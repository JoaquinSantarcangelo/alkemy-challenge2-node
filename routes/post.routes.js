const posts = require("../controllers/post.controller.js");
var express = require("express");
var router = express.Router();

// Create New Post
router.post("/", posts.create);

// Retrieve all Posts
router.get("/", posts.findAll);

// Retrieve Post with id
router.get("/:id", posts.findOne);

// Update Post with id
router.patch("/:id", posts.update);

// Delete Post with id
router.delete("/:id", posts.delete);

module.exports = router;
