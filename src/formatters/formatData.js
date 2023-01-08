import stylish from './stylish.js';

const formatData = (data, format) => {
  switch (format) {
    case 'stylish': {
      return stylish(data);
    }
    default:
      throw new Error('Неподдерживаемый формат вывода'); // test
  }
};

export default formatData;
