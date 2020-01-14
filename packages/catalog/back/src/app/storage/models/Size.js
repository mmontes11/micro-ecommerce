module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define("size", {
    sku: {
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
  Size.associate = models => {
    Size.belongsToMany(models.Color, { through: "product_color_size" });
  };
  return Size;
};
