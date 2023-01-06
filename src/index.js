/* eslint-disable spaced-comment */
/* eslint-disable no-console */
import pathProcessor from './pathProcessor.js';
import parseData from './parseData.js';
import compareData from './compareData.js';
import formattData from './formattData.js';

const genDiff = (firstFilePath, secondFilePath, format = 'json') => {
  const paths = pathProcessor(firstFilePath, secondFilePath);
  const data = parseData(paths);
  const preparedData = compareData(data);
  return formattData(preparedData, format);
};

export default genDiff;
