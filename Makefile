install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

help:
	node bin/gendiff.js -h

run:
	node bin/gendiff.js /home/deus-ex-m/projects/frontend-project-46/__fixtures__/file1.json __fixtures__/file2.json

test:
	npx jest

test-coverage:
	npx jest --coverage