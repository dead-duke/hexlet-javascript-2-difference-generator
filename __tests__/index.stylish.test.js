import path from 'path';
import genDiff from '../src/index.js';
import resultStylish from '../__fixtures__/resultStylish.js';

const jsonPath1 = path.resolve('__fixtures__/testFile1.json');
const jsonPath2 = path.resolve('__fixtures__/testFile2.json');
const ymlPath3 = path.resolve('__fixtures__/testFile3.yml');
const yamlPath4 = path.resolve('__fixtures__/testFile4.yaml');

describe('stylish format', () => {
  test('genDiff nest JSON', () => {
    expect(genDiff(jsonPath1, jsonPath2, 'stylish')).toEqual(resultStylish);
  });

  test('genDiff nest YML', () => {
    expect(genDiff(ymlPath3, yamlPath4, 'stylish')).toEqual(resultStylish);
  });

  test('genDiff nest JSON/YML', () => {
    expect(genDiff(jsonPath1, yamlPath4, 'stylish')).toEqual(resultStylish);
  });

  test('genDiff nest YML/JSON', () => {
    expect(genDiff(ymlPath3, jsonPath2, 'stylish')).toEqual(resultStylish);
  });
});
