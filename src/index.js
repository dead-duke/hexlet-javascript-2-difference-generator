/* eslint-disable spaced-comment */
/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const dataMatch = (obj1, obj2) => {
  const result = [];

  Object.entries(obj1).forEach(([key, value]) => {
    if (_.has(obj2, key)) {
      if (obj2[key] === value) {
        result.push([key, ' ', value]);
      } else {
        result.push([key, 'a', value]);
        result.push([key, 'b', obj2[key]]);
      }
    } else {
      result.push([key, 'a', value]);
    }
  });

  Object.entries(obj2).forEach(([key, value]) => {
    if (!_.has(obj1, key)) {
      result.push([key, 'b', value]);
    }
  });

  return result;
};

const getStringResult = (matches) => {
  let result = '{\n';
  for (let i = 0; i < matches.length; i += 1) {
    const identification = matches[i][1];
    const key = matches[i][0];
    const value = matches[i][2];
    let info = '';
    if (identification === 'a') {
      info = '-';
    } else if (identification === 'b') {
      info = '+';
    } else {
      info = ' ';
    }

    result += `  ${info} ${key}: ${value}\n`;
  }

  result += '}';
  return result;
};

const genDiff = (filepath1, filepath2, format = 'json') => {
  const firstFile = fs.readFileSync(path.resolve(filepath1));
  const secondFile = fs.readFileSync(path.resolve(filepath2));
  if (format.toLowerCase() === 'json') {
    const firstData = JSON.parse(firstFile);
    const secondData = JSON.parse(secondFile);
    const matches = dataMatch(firstData, secondData);
    const sortedMatches = _.sortBy(matches);
    return getStringResult(sortedMatches);
  }
  return 'Неподдерживаемый формат данных';

  // - первый файл, + второй файл
};

export default genDiff;
