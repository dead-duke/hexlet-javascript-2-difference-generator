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

run2:
	node bin/gendiff.js /home/deus-ex-m/projects/frontend-project-46/__fixtures__/file3.yml __fixtures__/file4.yaml

test:
	npx jest

test-coverage:
	npx jest --coverage