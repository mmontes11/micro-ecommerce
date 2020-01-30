const table = "size";

module.exports = {
  up(query, DataTypes) {
    return query.createTable(table, {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
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
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
    });
  },
  down(query) {
    return query.dropTable(table);
  },
};
