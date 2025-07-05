
# Hexlet: "Difference Generator"

[![hexlet-check](https://github.com/dead-duke/hexlet-javascript-2-difference-generator/actions/workflows/hexlet-check.yml/badge.svg?branch=main)](https://github.com/dead-duke/hexlet-javascript-2-difference-generator/actions/workflows/hexlet-check.yml)
[![Node CI](https://github.com/dead-duke/hexlet-javascript-2-difference-generator/actions/workflows/nodejs.yml/badge.svg?branch=main)](https://github.com/dead-duke/hexlet-javascript-2-difference-generator/actions/workflows/nodejs.yml)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=dead-duke_hexlet-javascript-2-difference-generator&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=dead-duke_hexlet-javascript-2-difference-generator)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=dead-duke_hexlet-javascript-2-difference-generator&metric=bugs)](https://sonarcloud.io/summary/new_code?id=dead-duke_hexlet-javascript-2-difference-generator)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=dead-duke_hexlet-javascript-2-difference-generator&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=dead-duke_hexlet-javascript-2-difference-generator)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=dead-duke_hexlet-javascript-2-difference-generator&metric=coverage)](https://sonarcloud.io/summary/new_code?id=dead-duke_hexlet-javascript-2-difference-generator)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=dead-duke_hexlet-javascript-2-difference-generator&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=dead-duke_hexlet-javascript-2-difference-generator)

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
