const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;


// Create Post Save a new Tutorial
exports.create = (req, res) => {
  console.log(req.body);

  res.send(req.body);

  // if (!req.body.title || !req.body.content || !req.body.image) {
  //   res.status(500).send({
  //     message: "Error: Invalid JSON.",
  //   });
  //   return;
  // }

  //Verifies Image Extension
  // var extension = req.body.image.substr(file.lastIndexOf(".") + 1);
  // if (!/(jpg|png|webp|jpeg)$/gi.test(extension)) {
  //   res.status(500).send({
  //     message: "Error: Invalid Image Format.",
  //   });
  //   return;
  // }

  // Create Post
  // const post = {
  //   title: req.body.title,
  //   content: req.body.description,
  //   image: req.body.image,
  //   createdAt: new Date(),
  // };

  // Post.create(post)
  //   .then((data) => {
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message: err.message || "Some error occurred.",
  //     });
  //   });
};

// Retrievse all Posts
exports.findAll = (req, res) => {
  console.log("Finding all");
  Post.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred .",
      });
    });
};

// Find Post with ID
exports.findOne = (req, res) => {
  const { id } = req.params;

  Post.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Post with id=" + id,
      });
    });
};

// Update Post
exports.update = (req, res) => {
  const { id } = req.params;

  Post.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Post updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Post with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Post with id=" + id,
      });
    });
};

// Delete Post
exports.delete = (req, res) => {
  const id = req.params.id;

  Post.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Post deleted successfully",
        });
      } else {
        res.send({
          message: `Cannot delete Post with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Cannot delete Post with id=" + id,
      });
    });
};
