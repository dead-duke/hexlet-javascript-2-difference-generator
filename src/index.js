import parseData from './parseData.js';
import compareData from './compareData.js';
import formatter from './formatters/index.js';

const genDiff = (path1, path2, outputFormat) => {
  try {
    const data = parseData(path1, path2);
    const comparedData = compareData(data);
    return formatter(comparedData, outputFormat);
  } catch (err) {
    return err.message;
  }
};

export default genDiff;
