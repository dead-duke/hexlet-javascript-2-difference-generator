import _ from 'lodash';

const formatContent = (content) => {
  if (_.isObject(content)) {
    return '[complex value]';
  }
  if (typeof content === 'string') {
    return `'${content}'`;
  }
  return content;
};

const plain = (data) => {
  const iter = (obj, property = '') => {
    const result = obj.reduce((accum, {
      key, content, prevContent, type,
    }) => {
      if (type === 'nested') {
        return `${accum}${iter(content, `${property}.${key}`)}`;
      }
      const currentContent = formatContent(content);
      const prevCurrentContent = formatContent(prevContent);
      const currentProperty = `${property}.${key}`.slice(1);
      switch (type) {
        case 'added':
          return `${accum}Property '${currentProperty}' was ${type} with value: ${currentContent}\n`;
        case 'updated':
          return `${accum}Property '${currentProperty}' was ${type}. From ${prevCurrentContent} to ${currentContent}\n`;
        case 'removed':
          return `${accum}Property '${currentProperty}' was ${type}\n`;
        default:
          return accum;
      }
    }, '');

    return result;
  };
  return iter(data).slice(0, -1);
};

export default plain;
