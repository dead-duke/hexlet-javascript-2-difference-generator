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

const getComparedData = (obj1, obj2) => {
  const allKeys = _.sortBy(_.uniq(_.union(Object.keys(obj1), Object.keys(obj2))));
  return allKeys.reduce((accum, key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];
    if (_.isObject(value1) && _.isObject(value2)) {
      return { ...accum, [key]: { type: 'nested', children: getComparedData(value1, value2) } };
    }

    const type = getType(obj1, obj2, key);
    switch (type) {
      case 'added':
      case 'unchanged':
        return { ...accum, [key]: { type, value: value2 } };
      case 'removed':
        return { ...accum, [key]: { type, value: value1 } };
      default:
        return { ...accum, [key]: { type, value: value2, previusValue: value1 } };
    }
  }, {});
};

export default getComparedData;
