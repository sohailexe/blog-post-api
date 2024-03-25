const express = require('express');
const router = express.Router();
const controller= require("../countrollers/controller")




//Write your code here//

//CHALLENGE 1: GET All posts
router.get("/posts",controller.getPosts)
//CHALLENGE 2: GET a specific post by id

//CHALLENGE 3: POST a new post

//CHALLENGE 4: PATCH a post when you just want to update one parameter

//CHALLENGE 5: DELETE a specific post by providing the post id.




module.exports = router;