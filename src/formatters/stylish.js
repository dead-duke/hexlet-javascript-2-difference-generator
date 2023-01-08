import _ from 'lodash';

const stylish = (data, depth = 1) => {
  let result = '{\n';
  for (let i = 0; i < data.length; i += 1) {
    const { key, content, type } = data[i];
    let info = '  '.repeat(depth);
    switch (type) {
      case 'removed':
        info += '- ';
        break;
      case 'added':
        info += '+ ';
        break;
      default:
        info += '  ';
        break;
    }

    if (_.isObject(content)) {
      result += `${info}${key}: ${stylish(content, depth + 2)}\n`;
    } else {
      result += `${info}${key}: ${content}\n`;
    }
  }

  result += `${'  '.repeat(depth - 1)}}`;

  return result;
};

export default stylish;
