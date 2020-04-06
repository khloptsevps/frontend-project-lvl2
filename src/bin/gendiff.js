#!/usr/bin/env node
import program from 'commander';
import genDiff from '../index';


program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'output format')
  .action((firstConfig, secondConfig) => console.log(genDiff(firstConfig, secondConfig)));
program.parse(process.argv);
if (program.format) console.log('Coming soon');
