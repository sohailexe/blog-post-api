let posts= require("../data/posts")
const { validationResult } = require('express-validator');

exports.getPosts = (req,res)=>{
    res.status(200).json({
        message: "success",
        data:posts
    })
}
exports.getPosts = (req,res)=>{

}