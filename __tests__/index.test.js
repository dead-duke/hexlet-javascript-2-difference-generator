import genDiff from '../src/index.js';

const nestMatch = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;

const path1 = '__fixtures__/file1.json';
const path2 = '__fixtures__/file2.json';
const path3 = '__fixtures__/file3.yml';
const path4 = '__fixtures__/file4.yaml';

test('genDiff nest JSON', () => {
  expect(genDiff(path1, path2, 'stylish')).toEqual(nestMatch);
});

test('genDiff nest YML', () => {
  expect(genDiff(path3, path4, 'stylish')).toEqual(nestMatch);
});

test('genDiff nest JSON/YML', () => {
  expect(genDiff(path1, path4, 'stylish')).toEqual(nestMatch);
});

test('genDiff nest YML/JSON', () => {
  expect(genDiff(path3, path2, 'stylish')).toEqual(nestMatch);
});

describe('errors', () => {
  test('output format', () => {
    expect(genDiff(path3, path2, 'bad output format')).toEqual(
      'Неподдерживаемый формат вывода',
    );
  });
  test('input format', () => {
    expect(genDiff('__fixtures__/file100.js', path2, 'stylish')).toEqual(
      'Неподдерживаемый формат файлов',
    );
  });
  test('invalid path', () => {
    expect(genDiff('__fixtures__/file10000.js', path2, 'stylish')).toEqual(
      'По указаномму пути нет файла или директории',
    );
  });
});
