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
  let result = '';
  const iter = (currentData, property) => {
    currentData.forEach(({
      key, content, prevContent, type,
    }) => {
      if (type !== 'nested') {
        const currentContent = formatContent(content);
        const prevCurrentContent = formatContent(prevContent);
        const currentProperty = `${property}.${key}`.slice(1);
        switch (type) {
          case 'added':
            result += `Property '${currentProperty}'`;
            result += ` was ${type} with value: ${currentContent}\n`;
            break;
          case 'updated':
            result += `Property '${currentProperty}'`;
            result += ` was ${type}. From ${prevCurrentContent} to ${currentContent}\n`;
            break;
          case 'removed':
            result += `Property '${currentProperty}' was ${type}\n`;
            break;
          default:
            break;
        }
      } else {
        iter(content, `${property}.${key}`);
      }
    });
  };
  iter(data, '');

  return result.slice(0, -1);
};

export default plain;
