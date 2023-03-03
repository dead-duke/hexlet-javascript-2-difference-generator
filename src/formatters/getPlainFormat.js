import _ from 'lodash';

const getFormattedValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const getPlainFormat = (data) => {
  const iter = (obj, property = '') => Object.entries(obj).reduce((accum, item) => {
    const [groupKey, group] = item;
    const value = getFormattedValue(group.value);
    const previusValue = getFormattedValue(group.previusValue);
    const currentProperty = `${property}${groupKey}`;

    switch (group.type) {
      case 'nested':
        return [...accum, iter(group.children, `${currentProperty}.`).join('')];
      case 'added':
        return [...accum, `Property '${currentProperty}' was ${group.type} with value: ${value}\n`];
      case 'removed':
        return [...accum, `Property '${currentProperty}' was ${group.type}\n`];
      case 'updated':
        return [...accum, `Property '${currentProperty}' was ${group.type}. From ${previusValue} to ${value}\n`];
      default:
        return accum;
    }
  }, []);

  return iter(data).join('').trim();
};

export default getPlainFormat;
