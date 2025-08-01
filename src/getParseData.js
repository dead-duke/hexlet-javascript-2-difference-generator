import path from 'path'
import yaml from 'js-yaml'
import fs from 'fs'

const getParseData = (currentPath) => {
  const validPath = path.resolve(process.cwd(), currentPath)
  const inputFormat = path.extname(validPath)
  const data = fs.readFileSync(validPath, 'utf8')

  switch (inputFormat) {
    case '.json': {
      return JSON.parse(data)
    }
    case '.yml':
    case '.yaml': {
      return yaml.load(data)
    }
    default: {
      throw new Error(`Unsupported file format - ${inputFormat}`)
    }
  }
}

export default getParseData
