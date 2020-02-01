module.exports = (sequelize, DataTypes) =>
  sequelize.define("image", {
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isUrl: true },
    },
  });
