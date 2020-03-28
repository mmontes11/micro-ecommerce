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
  });
  Product.associate = (models) => {
    Product.belongsTo(models.Category);
    Product.belongsToMany(models.Color, { through: "product_color", as: "colors" });
  };
  return Product;
};
