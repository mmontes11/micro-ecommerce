module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define("image", {
    location: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { notEmpty: true },
    },
    url: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { isUrl: true },
    },
  });
  Image.associate = models => {
    Image.belongsToMany(models.Product, { through: "product_color_image" });
  };
  return Image;
};
