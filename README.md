
# Hexlet: "Difference Generator"

[![hexlet-check](https://github.com/grim-vagabond/hexlet-javascript-2-difference-generator/actions/workflows/hexlet-check.yml/badge.svg?branch=main)](https://github.com/grim-vagabond/hexlet-javascript-2-difference-generator/actions/workflows/hexlet-check.yml)
[![Node CI](https://github.com/grim-vagabond/hexlet-javascript-2-difference-generator/actions/workflows/nodejs.yml/badge.svg?branch=main)](https://github.com/grim-vagabond/hexlet-javascript-2-difference-generator/actions/workflows/nodejs.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/e2fc6100cc90fb097171/maintainability)](https://codeclimate.com/github/grim-vagabond/hexlet-javascript-2-difference-generator/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e2fc6100cc90fb097171/test_coverage)](https://codeclimate.com/github/grim-vagabond/hexlet-javascript-2-difference-generator/test_coverage)

CLI application for compare two files. The result of the work is a report of differences in files. Work with JSON, YML, YAML files, result formats 'stylish', 'plain', 'json'.

## Requirements

* Node.js
* Make

## Installation and launch

* `make install` install
* `gendiff -h` information about application
* `gendiff <file1> <file2>` default launch
* `gendiff -f [format] <file1> <file2>` launch with user format

## Work examples

* [Flat files, result formatted as 'stylish'](https://asciinema.org/a/549699)
* [Nest files, result formatted as 'stylish'](https://asciinema.org/a/561869)
* [Nest files, result formatted as 'plain'](https://asciinema.org/a/561870)
* [Nest files, result formatted as 'json'](https://asciinema.org/a/561871)
