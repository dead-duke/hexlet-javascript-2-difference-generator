import _ from 'lodash';

const getType = (obj1, obj2, key) => {
  if (!_.has(obj1, key)) {
    return 'added';
  }
  if (!_.has(obj2, key)) {
    return 'removed';
  }
  if (obj1[key] === obj2[key]) {
    return 'unchanged';
  }
  return 'updated';
};

const objectCheck = (data, f) => (_.isObject(data) ? f(data, data) : data);

const compareData = (obj1, obj2) => {
  const allKeys = _.sortBy(_.uniq(_.union(Object.keys(obj1), Object.keys(obj2))));
  return allKeys.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];
    if (_.isObject(value1) && _.isObject(value2)) {
      return { type: 'nested', key, content: compareData(value1, value2) };
    }

    const type = getType(obj1, obj2, key);
    switch (type) {
      case 'added':
      case 'unchanged':
        return { type, key, content: objectCheck(value2, compareData) };
      case 'removed':
        return { type, key, content: objectCheck(value1, compareData) };
      default:
        return {
          type,
          key,
          content: objectCheck(value2, compareData),
          prevContent: objectCheck(value1, compareData),
        };
    }
  });
};

export default compareData;
