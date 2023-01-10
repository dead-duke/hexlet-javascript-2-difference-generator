import path from 'path';
import genDiff from '../src/index.js';
import resultStylish from '../__fixtures__/resultStylish.js';
import resultPlain from '../__fixtures__/resultPlain.js';
import resultJson from '../__fixtures__/resultJson.js';

const jsonPath1 = path.resolve('__fixtures__/testFile1.json');
const jsonPath2 = path.resolve('__fixtures__/testFile2.json');
const ymlPath3 = path.resolve('__fixtures__/testFile3.yml');
const yamlPath4 = path.resolve('__fixtures__/testFile4.yaml');

describe('formats', () => {
  test('genDiff stylish', () => {
    expect(genDiff(jsonPath1, jsonPath2, 'stylish')).toEqual(resultStylish);
    expect(genDiff(ymlPath3, yamlPath4, 'stylish')).toEqual(resultStylish);
    expect(genDiff(jsonPath1, yamlPath4, 'stylish')).toEqual(resultStylish);
    expect(genDiff(ymlPath3, jsonPath2, 'stylish')).toEqual(resultStylish);
  });

  test('genDiff plain', () => {
    expect(genDiff(jsonPath1, jsonPath2, 'plain')).toEqual(resultPlain);
    expect(genDiff(ymlPath3, yamlPath4, 'plain')).toEqual(resultPlain);
    expect(genDiff(jsonPath1, yamlPath4, 'plain')).toEqual(resultPlain);
    expect(genDiff(ymlPath3, jsonPath2, 'plain')).toEqual(resultPlain);
  });

  test('genDiff JSON', () => {
    expect(genDiff(jsonPath1, jsonPath2, 'json')).toEqual(resultJson);
    expect(genDiff(ymlPath3, yamlPath4, 'json')).toEqual(resultJson);
    expect(genDiff(jsonPath1, yamlPath4, 'json')).toEqual(resultJson);
    expect(genDiff(ymlPath3, jsonPath2, 'json')).toEqual(resultJson);
  });
});

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
