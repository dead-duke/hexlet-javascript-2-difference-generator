import _ from 'lodash';

const getState = (type) => {
  switch (type) {
    case 'removed':
    case 'updated/removed':
      return '- ';
    case 'added':
    case 'updated':
      return '+ ';
    default:
      return '  ';
  }
};

const stylish = (data, indent = 0) => {
  let result = '{\n';
  for (let i = 0; i < data.length; i += 1) {
    const { key, content, type } = data[i];
    const state = '  '.repeat(indent + 1) + getState(type);

    if (_.isObject(content)) {
      result += `${state}${key}: ${stylish(content, indent + 2)}\n`;
    } else {
      result += `${state}${key}: ${content}\n`;
    }
  }

  result += `${'  '.repeat(indent)}}`;

  return result;
};

export default stylish;
