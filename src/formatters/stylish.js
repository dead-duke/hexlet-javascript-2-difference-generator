import _ from 'lodash';

const getState = (type) => {
  switch (type) {
    case 'removed':
      return '- ';
    case 'added':
      return '+ ';
    case 'updated':
      return '+/- ';
    default:
      return '  ';
  }
};

const getUpdatedContent = (content, indent, f) => {
  if (_.isObject(content)) {
    return f(content, indent + 2);
  }
  return content;
};

const stylish = (data, indent = 0) => {
  const result = data.reduce((accum, {
    key, content, prevContent, type,
  }) => {
    const state = '  '.repeat(indent + 1) + getState(type);
    if (type === 'updated') {
      return (
        `${accum}${state.replace('+/-', '-')}`
        + `${key}: ${getUpdatedContent(prevContent, indent, stylish)}\n`
        + `${state.replace('+/-', '+')}${key}: ${getUpdatedContent(content, indent, stylish)}\n`
      );
    }
    return `${accum}${state}${key}: ${getUpdatedContent(content, indent, stylish)}\n`;
  }, '');
  return `{\n${result}${'  '.repeat(indent)}}`;
};

export default stylish;
