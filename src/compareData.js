import _ from 'lodash';

const compareData = (data) => {
  const [firstObj, secondObj] = data;
  const result = [];

  Object.entries(firstObj).forEach(([key, value]) => {
    if (_.has(secondObj, key)) {
      if (secondObj[key] === value) {
        result.push([key, ' ', value]);
      } else {
        result.push([key, 'a', value]);
        result.push([key, 'b', secondObj[key]]);
      }
    } else {
      result.push([key, 'a', value]);
    }
  });

  Object.entries(secondObj).forEach(([key, value]) => {
    if (!_.has(firstObj, key)) {
      result.push([key, 'b', value]);
    }
  });

  return _.sortBy(result);
};

export default compareData;
