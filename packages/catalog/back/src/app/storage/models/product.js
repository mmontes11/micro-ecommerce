export default (sequelize, DataTypes) => {
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
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
  });
  Product.associate = models => {
    Product.belongsTo(models.Category);
  };
  return Product;
};
