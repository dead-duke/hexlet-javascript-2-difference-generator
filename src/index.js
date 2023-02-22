import parseData from './parseData.js';
import getComparedData from './compareData.js';
import getFormattedData from './formatters/index.js';

const genDiff = (path1, path2, outputFormat = 'stylish') => {
  try {
    const data1 = parseData(path1);
    const data2 = parseData(path2);
    const comparedData = getComparedData(data1, data2);
    return getFormattedData(comparedData, outputFormat);
  } catch (err) {
    return err.message;
  }
};

export default genDiff;
