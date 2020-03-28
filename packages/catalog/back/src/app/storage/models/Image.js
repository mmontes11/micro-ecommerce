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
    productId: {
      type: DataTypes.INTEGER,
      references: {
        key: "id",
        model: "product",
      },
      allowNull: true,
    },
    colorId: {
      type: DataTypes.INTEGER,
      references: {
        key: "id",
        model: "color",
      },
      allowNull: true,
    },
  });
