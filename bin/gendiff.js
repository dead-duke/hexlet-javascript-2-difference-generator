#!/usr/bin/env node
/* eslint-disable no-console */
import { Command } from 'commander';
import genDiff from '../index.js';

const program = new Command();

program
  .name('gendiff')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.2.0')
  .option('-f, --format [type]', 'output format', 'stylish');

program
  .action((filepath1, filepath2) => {
    const options = program.opts();
    console.log(genDiff(filepath1, filepath2, options.format));
  })
  .parse();
