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

const getFormatString = (mainStr, state, key, content, prevContent, indent, f) => (
  `${mainStr}${state.replace('+/-', '-')}`
  + `${key}: ${getUpdatedContent(prevContent, indent, f)}\n`
  + `${state.replace('+/-', '+')}${key}: ${content}\n`
);

const stylish = (data, indent = 0) => {
  const result = data.reduce((accum, {
    key, content, prevContent, type,
  }) => {
    const state = '  '.repeat(indent + 1) + getState(type);

    if (_.isObject(content)) {
      return `${accum}${state}${key}: ${stylish(content, indent + 2)}\n`;
    }
    if (type === 'updated') {
      return getFormatString(
        accum,
        state,
        key,
        content,
        prevContent,
        indent,
        stylish,
      );
    }
    return `${accum}${state}${key}: ${content}\n`;
  }, '');
  return `{\n${result}${'  '.repeat(indent)}}`;
};

export default stylish;
