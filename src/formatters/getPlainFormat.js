import _ from 'lodash';

const getFormattedValue = (content) => {
  if (_.isObject(content)) {
    return '[complex value]';
  }
  if (typeof content === 'string') {
    return `'${content}'`;
  }
  return content;
};

const getFormattedLine = (key, type, value, previusValue, property) => {
  const currentContent = getFormattedValue(value);
  const previusCurrentContent = getFormattedValue(previusValue);
  const currentProperty = `${property}${key}`;
  switch (type) {
    case 'added':
      return `Property '${currentProperty}' was ${type} with value: ${currentContent}\n`;
    case 'updated':
      return `Property '${currentProperty}' was ${type}. From ${previusCurrentContent} to ${currentContent}\n`;
    case 'removed':
      return `Property '${currentProperty}' was ${type}\n`;
    default:
      return '';
  }
};

const getPlainFormat = (data) => {
  const iter = (obj, property = '') => Object.entries(obj).reduce((accum, item) => {
    const {
      value, previusValue, type, children,
    } = item[1];
    if (type === 'nested') {
      const newProperty = `${property}${item[0]}.`;
      return accum + iter(children, newProperty);
    }
    return accum + getFormattedLine(item[0], type, value, previusValue, property);
  }, '');
  return iter(data).slice(0, -1);
};

export default getPlainFormat;
