const indexByField = field => array =>
  array.reduce((acc, it) => {
    const key = it[field];
    const value = acc[key] ? [...acc[key], it] : [it];
    return {
      ...acc,
      [key]: value,
    };
  }, {});

const applyToLatestLevel = (value, fn) => {
  if (Array.isArray(value)) {
    return fn(value);
  }
  return {
    ...Object.keys(value).reduce(
      (acc, k) => ({
        ...acc,
        [k]: applyToLatestLevel(value[k], fn),
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
  const indexByCurrentField = indexByField(currentField);
  const newValue = applyToLatestLevel(value, indexByCurrentField);
  return indexBy(newValue, ...rest);
};

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

module.exports = {
  indexBy,
  isDefined,
  isEmpty,
};
