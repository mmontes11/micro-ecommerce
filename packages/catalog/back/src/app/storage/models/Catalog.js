module.exports = (sequelize, DataTypes) => {
  const Catalog = sequelize.define("catalog", {
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
  });
  Catalog.associate = (models) => {
    Catalog.hasMany(models.Category);
  };
  return Catalog;
};
