import _ from 'lodash';

const compareData = (data) => {
  const iter = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const allKeys = _.sortBy(_.uniq([...keys1, ...keys2]));

    return allKeys.flatMap((key) => {
      let value1 = obj1[key];
      let value2 = obj2[key];

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
        return [{ key, content: value2, type: 'added' }];
      }
      if (!_.has(obj2, key)) {
        return [{ key, content: value1, type: 'removed' }];
      }
      if (value1 === value2) {
        return [{ key, content: value1, type: 'unchanged' }];
      }

      return [
        { key, content: value1, type: 'removed' },
        { key, content: value2, type: 'added' },
      ];
    });
  };

  return iter(...data);
};

export default compareData;
