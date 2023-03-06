import _ from 'lodash';

const getComparedData = (obj1, obj2) => {
  const unionKeys = _.union(Object.keys(obj1), Object.keys(obj2));
  return _.sortBy(unionKeys).reduce((accum, key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (_.isObject(value1) && _.isObject(value2)) {
      return { ...accum, [key]: { type: 'nested', children: getComparedData(value1, value2) } };
    }
    if (!_.has(obj1, key)) {
      return { ...accum, [key]: { type: 'added', value: value2 } };
    }
    if (!_.has(obj2, key)) {
      return { ...accum, [key]: { type: 'removed', value: value1 } };
    }
    if (obj1[key] === obj2[key]) {
      return { ...accum, [key]: { type: 'unchanged', value: value2 } };
    }
    return { ...accum, [key]: { type: 'updated', value: value2, previusValue: value1 } };
  }, {});
};

export default getComparedData;
