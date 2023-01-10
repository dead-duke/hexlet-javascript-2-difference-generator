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

const stylish = (data, indent = 0) => {
  const result = data.reduce((accum, {
    key, content, prevContent, type,
  }) => {
    const state = '  '.repeat(indent + 1) + getState(type);

    if (_.isObject(content)) {
      return `${accum}${state}${key}: ${stylish(content, indent + 2)}\n`;
    }
    if (type === 'updated') {
      const currentPrevContent = _.isObject(prevContent)
        ? stylish(prevContent, indent + 2)
        : prevContent;
      return (
        `${accum}${state.replace('+/-', '-')}${key}: ${currentPrevContent}\n`
        + `${state.replace('+/-', '+')}${key}: ${content}\n`
      );
    }
    return `${accum}${state}${key}: ${content}\n`;
  }, '');
  return `{\n${result}${'  '.repeat(indent)}}`;
};

export default stylish;
