import genDiff from '../src/index.js';

const path1 = '__fixtures__/file1.json';
const path2 = '__fixtures__/file2.json';
const path3 = '__fixtures__/file3.yml';
const path4 = '__fixtures__/file4.yaml';

const stylishResult = `{
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

test('genDiff nest JSON stylish', () => {
  expect(genDiff(path1, path2, 'stylish')).toEqual(stylishResult);
});

test('genDiff nest YML stylish', () => {
  expect(genDiff(path3, path4, 'stylish')).toEqual(stylishResult);
});

test('genDiff nest JSON/YML stylish', () => {
  expect(genDiff(path1, path4, 'stylish')).toEqual(stylishResult);
});

test('genDiff nest YML/JSON stylish', () => {
  expect(genDiff(path3, path2, 'stylish')).toEqual(stylishResult);
});

const palinResult = `Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`;

test('genDiff nest JSON plain', () => {
  expect(genDiff(path1, path2, 'plain')).toEqual(palinResult);
});

test('genDiff nest YML plain', () => {
  expect(genDiff(path3, path4, 'plain')).toEqual(palinResult);
});

test('genDiff nest JSON/YML plain', () => {
  expect(genDiff(path1, path4, 'plain')).toEqual(palinResult);
});

test('genDiff nest YML/JSON plain', () => {
  expect(genDiff(path3, path2, 'plain')).toEqual(palinResult);
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
