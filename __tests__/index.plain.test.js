import path from 'path';
import genDiff from '../src/index.js';
import resultPlain from '../__fixtures__/resultPlain.js';

const jsonPath1 = path.resolve('__fixtures__/testFile1.json');
const jsonPath2 = path.resolve('__fixtures__/testFile2.json');
const ymlPath3 = path.resolve('__fixtures__/testFile3.yml');
const yamlPath4 = path.resolve('__fixtures__/testFile4.yaml');

describe('plain format', () => {
  test('genDiff nest JSON', () => {
    expect(genDiff(jsonPath1, jsonPath2, 'plain')).toEqual(resultPlain);
  });

  test('genDiff nest YML', () => {
    expect(genDiff(ymlPath3, yamlPath4, 'plain')).toEqual(resultPlain);
  });

  test('genDiff nest JSON/YML', () => {
    expect(genDiff(jsonPath1, yamlPath4, 'plain')).toEqual(resultPlain);
  });

  test('genDiff nest YML/JSON', () => {
    expect(genDiff(ymlPath3, jsonPath2, 'plain')).toEqual(resultPlain);
  });
});
