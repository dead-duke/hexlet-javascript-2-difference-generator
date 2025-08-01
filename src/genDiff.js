import getParseData from './getParseData.js'
import getComparedData from './getComparedData.js'
import getFormattedData from './formatters/getFormattedData.js'

const genDiff = (path1, path2, outputFormat = 'stylish') => {
  try {
    const data1 = getParseData(path1)
    const data2 = getParseData(path2)
    const comparedData = getComparedData(data1, data2)
    return getFormattedData(comparedData, outputFormat)
  }
  catch (err) {
    return err.message
  }
}

export default genDiff
