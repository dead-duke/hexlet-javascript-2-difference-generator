import path from 'path';
import genDiff from '../index.js';
import resultStylish from '../__fixtures__/results/stylish.js';
import resultPlain from '../__fixtures__/results/plain.js';
import resultJson from '../__fixtures__/results/json.js';

const results = {
  stylish: resultStylish,
  plain: resultPlain,
  json: resultJson,
};

const testCombinations = [
  ['yml', 'stylish'],
  ['yml', 'plain'],
  ['yml', 'json'],
  ['json', 'stylish'],
  ['json', 'plain'],
  ['json', 'json'],
];

describe('formats', () => {
  test.each(testCombinations)('input: .%s, output: %s', (extension, format) => {
    const filePath1 = path.resolve(`__fixtures__/testFile1.${extension}`);
    const filePath2 = path.resolve(`__fixtures__/testFile2.${extension}`);
    const actual = genDiff(filePath1, filePath2, format);
    const expected = results[format];
    expect(actual).toEqual(expected);
  });
});

const filePath1 = path.resolve('__fixtures__/testFile1.json');
const filePath2 = path.resolve('__fixtures__/testFile2.json');

describe('errors', () => {
  test('output format', () => {
    expect(genDiff(filePath1, filePath2, 'bad output format')).toEqual(
      'Unsupported output format',
    );
  });
  test('input format', () => {
    expect(genDiff('__fixtures__/extensionTestFile.js', filePath1, 'stylish')).toEqual(
      'Unsupported file format',
    );
  });
});
