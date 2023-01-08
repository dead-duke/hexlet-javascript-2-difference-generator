import path from 'path';
import yaml from 'js-yaml';
import fs from 'fs';

const getData = (currentPath) => {
  const validPath = path.resolve(currentPath);
  const inputFormat = path.extname(validPath);
  try {
    fs.readFileSync(validPath, 'utf8');
  } catch {
    throw new Error('По указаномму пути нет файла или директории');
  }
  const data = fs.readFileSync(validPath, 'utf8');
  switch (inputFormat) {
    case '.json': {
      return JSON.parse(data);
    }
    case '.yml':
    case '.yaml': {
      return yaml.load(data);
    }
    default: {
      throw new Error('Неподдерживаемый формат файлов');
    }
  }
};

const parseData = (...paths) => paths.map((currentPath) => getData(currentPath));

export default parseData;
