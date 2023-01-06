import genDiff from '../src/index.js';

let simpleMatch = '{\n  - follow: false\n    host: hexlet.io\n';
simpleMatch += '  - proxy: 123.234.53.22\n  - timeout: 50\n';
simpleMatch += '  + timeout: 20\n  + verbose: true\n}';
const firstFilePath = '__fixtures__/file1.json';
const secondFilePath = '__fixtures__/file2.json';
const thirdFilePath = '__fixtures__/file3.yml';
const fourthFilePath = '__fixtures__/file4.yaml';

test('genGendiff simple JSON', () => {
  expect(genDiff(firstFilePath, secondFilePath)).toEqual(simpleMatch);
});

test('genGendiff simple YML', () => {
  expect(genDiff(thirdFilePath, fourthFilePath)).toEqual(simpleMatch);
});

test('genGendiff simple JSON/YML', () => {
  expect(genDiff(firstFilePath, fourthFilePath)).toEqual(simpleMatch);
});

test('genGendiff simple YML/JSON', () => {
  expect(genDiff(thirdFilePath, secondFilePath)).toEqual(simpleMatch);
});
