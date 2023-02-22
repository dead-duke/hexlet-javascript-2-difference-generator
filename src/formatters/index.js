import getStylishFormat from './getStylishFormat.js';
import getPlainFormat from './getPlainFormat.js';
import getJsonFormat from './getJsonFormat.js';

const getFormattedData = (data, format) => {
  switch (format) {
    case 'stylish': {
      return getStylishFormat(data);
    }
    case 'plain': {
      return getPlainFormat(data);
    }
    case 'json': {
      return getJsonFormat(data);
    }
    default:
      throw new Error('Unsupported output format');
  }
};

export default getFormattedData;
