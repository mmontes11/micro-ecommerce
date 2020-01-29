const table = "image";

module.exports = {
  up(query, DataTypes) {
    return query.createTable(table, {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
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
  },
  down(query) {
    return query.dropTable(table);
  },
};
