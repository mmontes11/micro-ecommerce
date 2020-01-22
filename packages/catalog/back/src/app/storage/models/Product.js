module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    key: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { notEmpty: true },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
    brand: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { notEmpty: true },
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
  });
  Product.associate = models => {
    Product.belongsTo(models.Category);
    Product.belongsToMany(models.Color, { through: "product_color_size" });
    Product.belongsToMany(models.Image, { through: "product_color_image" });
  };
  return Product;
};
