module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
    id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    image: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    description: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    createdAt: { allowNull: false, type: Sequelize.DATE },
  });

  return Post;
};
