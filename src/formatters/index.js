import stylish from './stylish.js';
import plain from './plain.js';

const formatter = (data, format) => {
  switch (format) {
    case 'stylish': {
      return stylish(data);
    }
    case 'plain': {
      return plain(data);
    }
    default:
      throw new Error('Неподдерживаемый формат вывода'); // test
  }
};

export default formatter;
