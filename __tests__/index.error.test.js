import path from 'path';
import genDiff from '../src/index.js';

const jsonPath1 = path.resolve('__fixtures__/testFile1.json');
const jsonPath2 = path.resolve('__fixtures__/testFile2.json');

describe('errors', () => {
  test('output format', () => {
    expect(genDiff(jsonPath1, jsonPath2, 'bad output format')).toEqual(
      'Неподдерживаемый формат вывода',
    );
  });
  test('input format', () => {
    expect(genDiff('__fixtures__/extendTestFile.js', jsonPath1, 'stylish')).toEqual(
      'Неподдерживаемый формат файлов',
    );
  });
  test('invalid path', () => {
    expect(genDiff('__fixtures__/file10000.js', jsonPath1, 'stylish')).toEqual(
      'По указаномму пути нет файла или директории',
    );
  });
});
