let posts= require("../data/posts")
// const { validationResult } = require('express-validator');

exports.getPosts = (req,res)=>{
    console.log("hello");
    res.status(200).send(posts)
}
exports.getPost = (req,res)=>{
    const requiredPost =posts.find(post=> post.id==req.params.id)
    res.status(200).send(requiredPost)
}
exports.postPost = (req,res)=>{
    const currentDate = new Date();

    const post = {
        id: posts.length+1,
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
      date: currentDate
    }
    
    posts.push(post)
    res.send("Success")
}

exports.patchPost = (req,res)=>{

    const existingPost =posts.find(post=> post.id==req.params.id)
    const currentDate = new Date();
    const post = {
    id:req.params.id,
      title: req.body.title   || existingPost.title,
      content:req.body.content  || existingPost.content,
      author: req.body.auther || existingPost.author,
      date: existingPost.date
    }
    console.log(post);
    const postIndex = posts.findIndex(post => post.id==req.params.id)
    posts[postIndex]= post


    res.send("Success")
}


exports.deletePost = (req,res)=>{

  const index = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Post not found" });

  posts.splice(index, 1);
  res.json({ message: "Post deleted" });
}