install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

help:
	node bin/gendiff.js -h

run-stylish:
	node bin/gendiff.js /home/deus-ex-m/projects/frontend-project-46/__fixtures__/testFile1.json __fixtures__/testFile2.json

run-plain:
	node bin/gendiff.js -f plain /home/deus-ex-m/projects/frontend-project-46/__fixtures__/testFile1.yml __fixtures__/testFile2.yml

run-json:
	node bin/gendiff.js -f json /home/deus-ex-m/projects/frontend-project-46/__fixtures__/testFile1.json __fixtures__/testFile2.json

test:
	npx jest

test-coverage:
	npx jest --coverage