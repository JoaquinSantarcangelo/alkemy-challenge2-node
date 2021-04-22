var express = require("express");
var router = express.Router();
const postController = require("../controllers/post.controller");

// Create New Post
router.post("/", postController.create);

// Retrieve all Posts
router.get("/", postController.findAll);

// Retrieve Post with id
router.get("/:id", postController.findOne);

// Update Post with id
router.patch("/:id", postController.update);

// Delete Post with id
router.delete("/:id", postController.delete);

module.exports = router;
