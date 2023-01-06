import path from 'path';
import yaml from 'js-yaml';
import fs from 'fs';

const getData = (filePath) => {
  const format = path.extname(filePath);
  const rawData = fs.readFileSync(filePath);
  switch (format) {
    case '.json': {
      const data = JSON.parse(rawData);
      return data;
    }
    case '.yml':
    case '.yaml': {
      const data = yaml.load(rawData);
      return data;
    }
    default: {
      throw new Error('Неподдерживаемый формат файлов');
    }
  }
};

const parseData = (paths) => paths.map((currentPath) => getData(currentPath));

export default parseData;
