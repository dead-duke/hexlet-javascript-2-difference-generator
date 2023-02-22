import _ from 'lodash';

const getState = (type) => {
  switch (type) {
    case 'removed':
      return '-';
    case 'added':
      return '+';
    default:
      return ' ';
  }
};

const getFormattedObject = (obj, indent) => {
  const newIndent = `${indent}    `;
  const result = Object.entries(obj).reduce((accum, item) => {
    const value = item[1];
    if (_.isObject(value)) {
      const newValue = getFormattedObject(value, newIndent);
      return `${accum}${newIndent}${item[0]}: ${newValue}\n`;
    }
    return `${accum}${newIndent}${item[0]}: ${value}\n`;
  }, '');
  return `{\n${result}${indent}}`;
};

const getFormattedValue = (value, indent) => {
  if (_.isObject(value)) {
    return getFormattedObject(value, `${indent}    `);
  }
  return value;
};

const getStylishFormat = (data, indent = '') => {
  const result = Object.entries(data).reduce((accum, item) => {
    const {
      value, previusValue, type, children,
    } = item[1];
    const newIndent = `${indent}    `;
    switch (type) {
      case 'nested':
        return `${accum}${newIndent}${item[0]}: ${getStylishFormat(children, newIndent)}\n`;
      case 'updated':
        return `${accum}${indent}  - ${item[0]}: ${getFormattedValue(previusValue, indent)}\n`
              + `${indent}  + ${item[0]}: ${getFormattedValue(value, indent)}\n`;
      default:
        return `${accum}${indent}  ${getState(type)} ${item[0]}: ${getFormattedValue(value, indent)}\n`;
    }
  }, '');
  return `{\n${result}${indent}}`;
};

export default getStylishFormat;
