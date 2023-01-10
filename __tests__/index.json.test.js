import path from 'path';
import genDiff from '../src/index.js';
import resultJson from '../__fixtures__/resultJson.js';

const jsonPath1 = path.resolve('__fixtures__/testFile1.json');
const jsonPath2 = path.resolve('__fixtures__/testFile2.json');
const ymlPath3 = path.resolve('__fixtures__/testFile3.yml');
const yamlPath4 = path.resolve('__fixtures__/testFile4.yaml');

describe('json format', () => {
  test('genDiff nest JSON', () => {
    expect(genDiff(jsonPath1, jsonPath2, 'json')).toEqual(resultJson);
  });

  test('genDiff nest YML', () => {
    expect(genDiff(ymlPath3, yamlPath4, 'json')).toEqual(resultJson);
  });

  test('genDiff nest JSON/YML', () => {
    expect(genDiff(jsonPath1, yamlPath4, 'json')).toEqual(resultJson);
  });

  test('genDiff nest YML/JSON', () => {
    expect(genDiff(ymlPath3, jsonPath2, 'json')).toEqual(resultJson);
  });
});
