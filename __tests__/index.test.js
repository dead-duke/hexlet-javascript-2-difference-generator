import path from 'path'
import fs from 'fs'
import genDiff from '../index.js'
import {
  describe,
  test,
  expect,
} from '@jest/globals'

const testCombinations = [
  ['yml', 'stylish'],
  ['yml', 'plain'],
  ['yml', 'json'],
  ['json', 'stylish'],
  ['json', 'plain'],
  ['json', 'json'],
]

describe('formats', () => {
  test.each(testCombinations)('input: .%s, output: %s', (extension, format) => {
    const filePath1 = path.resolve(`__fixtures__/testFile1.${extension}`)
    const filePath2 = path.resolve(`__fixtures__/testFile2.${extension}`)
    const actual = genDiff(filePath1, filePath2, format)
    const expected = fs.readFileSync(`__fixtures__/results/${format}.txt`, 'utf-8')
    expect(actual).toEqual(expected)
  })
})

const filePath1 = path.resolve('__fixtures__/testFile1.json')
const filePath2 = path.resolve('__fixtures__/testFile2.json')

describe('errors', () => {
  test('output format', () => {
    expect(genDiff(filePath1, filePath2, 'bad output format')).toEqual(
      'Unsupported output format - bad output format',
    )
  })
  test('input format', () => {
    expect(genDiff('__fixtures__/extensionTestFile.js', filePath1, 'stylish')).toEqual(
      'Unsupported file format - .js',
    )
  })
})
