
# Hexlet: "Difference Generator"

[![hexlet-check](https://github.com/deus-ex-m/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg?branch=main)](https://github.com/deus-ex-m/frontend-project-46/actions/workflows/hexlet-check.yml)
[![Node CI](https://github.com/deus-ex-m/frontend-project-46/actions/workflows/nodejs.yml/badge.svg?branch=main)](https://github.com/deus-ex-m/frontend-project-46/actions/workflows/nodejs.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/74cd35462a7c58d57ee6/maintainability)](https://codeclimate.com/github/deus-ex-m/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/74cd35462a7c58d57ee6/test_coverage)](https://codeclimate.com/github/deus-ex-m/frontend-project-46/test_coverage)


CLI applications to compare two files. The result of the work is a report of differences in files. Work with JSON, YML, YAML files, result formats 'stylish', 'plain', 'json'.

## Requirements

* Node.js
* Make

## Installation and launch

* `make install` install
* `make help` information about application
* `gendiff [file1] [file2]` default launch
* `gendiff -f <format> [file1] [file2]` launch with user format

## Work examples

* Flat files, result formatted as 'stylish'
[![asciicast](https://asciinema.org/a/549699.svg)](https://asciinema.org/a/549699)
* Nest files, result formatted as 'stylish'
[![asciicast](https://asciinema.org/a/561869.svg)](https://asciinema.org/a/561869)
* Nest files, result formatted as 'plain'
[![asciicast](https://asciinema.org/a/561870.svg)](https://asciinema.org/a/561870)
* Nest files, result formatted as 'json'
[![asciicast](https://asciinema.org/a/561871.svg)](https://asciinema.org/a/561871)