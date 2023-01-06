const formattData = (matches, format) => {
  if (format === 'json') {
    let result = '{\n';
    for (let i = 0; i < matches.length; i += 1) {
      const identification = matches[i][1];
      const key = matches[i][0];
      const value = matches[i][2];
      let info = '';
      if (identification === 'a') {
        info = '-';
      } else if (identification === 'b') {
        info = '+';
      } else {
        info = ' ';
      }

      result += `  ${info} ${key}: ${value}\n`;
    }

    result += '}';
    return result;
  }
  throw new Error('Неподдерживаемый формат');
};

export default formattData;
