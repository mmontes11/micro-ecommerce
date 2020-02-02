const isDefined = x => typeof x !== "undefined" && x !== null;

const isEmpty = x => {
  if (!isDefined(x)) {
    return true;
  }
  if (isDefined(x.length) && x.length === 0) {
    return true;
  }
  if (typeof x === "object" && Object.keys(x).length === 0) {
    return true;
  }
  return false;
};

const indexByField = (array, field) =>
  array.reduce((acc, it) => {
    const key = it[field];
    const value = acc[key] ? [...acc[key], it] : [it];
    return {
      ...acc,
      [key]: value,
    };
  }, {});

const mapObjectValues = (value, shouldMap, mapFn, ...args) => {
  if (shouldMap(value)) {
    return mapFn(value, ...args);
  }
  return {
    ...Object.keys(value).reduce(
      (acc, k) => ({
        ...acc,
        [k]: mapObjectValues(value[k], shouldMap, mapFn, ...args),
      }),
      {},
    ),
  };
};

const indexBy = (value, ...fields) => {
  if (fields.length === 0) {
    return value;
  }
  const [currentField, ...rest] = fields;
  const newValue = mapObjectValues(value, Array.isArray, indexByField, currentField);
  return indexBy(newValue, ...rest);
};

module.exports = {
  isDefined,
  isEmpty,
  mapObjectValues,
  indexBy,
};
