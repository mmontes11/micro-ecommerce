const indexBy = (array, field) =>
  array.reduce((acc, it) => {
    const key = it[field];
    const value = acc[key] ? [...acc[key], it] : [it];
    return {
      ...acc,
      [key]: value,
    };
  }, {});

module.exports = { indexBy };
