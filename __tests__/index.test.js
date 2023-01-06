import genDiff from '../src/index.js';

let simpleJson = '{\n  - follow: false\n    host: hexlet.io\n';
simpleJson += '  - proxy: 123.234.53.22\n  - timeout: 50\n';
simpleJson += '  + timeout: 20\n  + verbose: true\n}';
const pathFirstFile = '__fixtures__/file1.json';
const pathSecondFile = '__fixtures__/file2.json';
test('genGendiff', () => {
  expect(genDiff(pathFirstFile, pathSecondFile)).toEqual(simpleJson);
});
