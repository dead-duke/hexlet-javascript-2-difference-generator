#!/usr/bin/env node
/* eslint-disable no-console */
import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.2.0')
  .option('-f, --format [type]', 'output format');

program.action((filepath1, filepath2) => {
  const options = program.opts();
  let format;
  if (options.format) {
    format = options.format;
  } else {
    format = 'json';
  }
  const result = genDiff(filepath1, filepath2, format);
  console.log(result);
});

program.parse();
