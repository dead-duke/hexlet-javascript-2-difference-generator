import _ from 'lodash';

const compareData = (obj1, obj2) => {
  const allKeys = _.sortBy(_.uniq([...Object.keys(obj1), ...Object.keys(obj2)]));
  const objectCheck = (data) => (_.isObject(data) ? compareData(data, data) : data);

  return allKeys.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];
    if (_.isObject(value1) && _.isObject(value2)) {
      return { type: 'nested', key, content: compareData(value1, value2) };
    }

    if (!_.has(obj1, key)) {
      return { type: 'added', key, content: objectCheck(value2) };
    }
    if (!_.has(obj2, key)) {
      return { type: 'removed', key, content: objectCheck(value1) };
    }
    if (value1 === value2) {
      return { type: 'unchanged', key, content: objectCheck(value1) };
    }
    return {
      type: 'updated',
      key,
      content: objectCheck(value2),
      prevContent: objectCheck(value1),
    };
  });
};

export default compareData;
