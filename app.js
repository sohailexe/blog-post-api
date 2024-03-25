const express = require('express');
const bodyParser = require('body-parser');
const router = require("./routes/router");
const port = 4000;

const app = express();

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());//html form data in this form

// Routes
app.use(router);

// Start the server
app.listen(port, () => {
    console.log(`API is listening at http://localhost:${port}`);
});
