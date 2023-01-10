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

const getFormatString = (mainStr, property, key, type, content, prevContent) => {
  const currentContent = formatContent(content);
  const prevCurrentContent = formatContent(prevContent);
  const currentProperty = `${property}.${key}`.slice(1);
  switch (type) {
    case 'added':
      return `${mainStr}Property '${currentProperty}' was ${type} with value: ${currentContent}\n`;
    case 'updated':
      return `${mainStr}Property '${currentProperty}' was ${type}. From ${prevCurrentContent} to ${currentContent}\n`;
    case 'removed':
      return `${mainStr}Property '${currentProperty}' was ${type}\n`;
    default:
      return mainStr;
  }
};

const plain = (data) => {
  const iter = (obj, property = '') => {
    const result = obj.reduce((accum, {
      key, content, prevContent, type,
    }) => {
      if (type === 'nested') {
        return `${accum}${iter(content, `${property}.${key}`)}`;
      }
      return getFormatString(accum, property, key, type, content, prevContent);
    }, '');

    return result;
  };
  return iter(data).slice(0, -1);
};

export default plain;
