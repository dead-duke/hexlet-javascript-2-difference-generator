import _ from 'lodash';

const compareData = (data) => {
  const iter = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const allKeys = _.sortBy(_.uniq([...keys1, ...keys2]));

    return allKeys.flatMap((key) => {
      let value1 = obj1[key];
      let value2 = obj2[key];
      const result = [];

      if (_.isObject(value1) && _.isObject(value2)) {
        return [{ key, content: iter(value1, value2), type: 'nested' }];
      }

      if (_.isObject(value1)) {
        value1 = iter(value1, value1);
      }
      if (_.isObject(value2)) {
        value2 = iter(value2, value2);
      }

      if (!_.has(obj1, key)) {
        result.push({ key, content: value2, type: 'added' });
      } else if (!_.has(obj2, key)) {
        result.push({ key, content: value1, type: 'removed' });
      } else if (value1 === value2) {
        result.push({ key, content: value1, type: 'unchanged' });
      } else {
        result.push({ key, content: value1, type: 'removed' });
        result.push({ key, content: value2, type: 'added' });
      }

      return result;
    });
  };

  return iter(...data);
};

export default compareData;
