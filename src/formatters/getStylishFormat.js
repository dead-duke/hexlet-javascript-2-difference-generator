import _ from 'lodash';

const getNewIndent = (indent) => `${indent}${' '.repeat(4)}`;

const getFormattedObject = (obj, indent) => {
  const newIndent = getNewIndent(indent);
  const result = Object.entries(obj).reduce((accum, item) => {
    const [key, value] = item;

    if (_.isObject(value)) {
      const group = getFormattedObject(value, newIndent);
      return [...accum, `${newIndent}${key}: ${group}\n`];
    }
    return [...accum, `${newIndent}${key}: ${value}\n`];
  }, []);

  return `{\n${result.join('')}${indent}}`;
};

const getFormattedValue = (value, indent) => {
  if (_.isObject(value)) {
    return getFormattedObject(value, getNewIndent(indent));
  }
  return value;
};

const getStylishFormat = (data, indent = '') => {
  const result = Object.entries(data).reduce((accum, item) => {
    const [groupKey, group] = item;
    const newIndent = getNewIndent(indent);

    switch (group.type) {
      case 'nested':
        return [...accum, `${newIndent}${groupKey}: ${getStylishFormat(group.children, newIndent)}\n`];
      case 'added':
        return [...accum, `${indent}  + ${groupKey}: ${getFormattedValue(group.value, indent)}\n`];
      case 'removed':
        return [...accum, `${indent}  - ${groupKey}: ${getFormattedValue(group.value, indent)}\n`];
      case 'unchanged':
        return [...accum, `${indent}    ${groupKey}: ${getFormattedValue(group.value, indent)}\n`];
      default:
        return [...accum, `${indent}  - ${groupKey}: ${getFormattedValue(group.previusValue, indent)}\n`,
          `${indent}  + ${groupKey}: ${getFormattedValue(group.value, indent)}\n`];
    }
  }, []);

  return `{\n${result.join('')}${indent}}`;
};

export default getStylishFormat;
