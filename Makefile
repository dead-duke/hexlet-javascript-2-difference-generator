install:
	npm ci
	npm link

uninstall:
	npm uninstall -g @hexlet/code

publish:
	npm publish --dry-run

lint:
	npx eslint .

help:
	node bin/gendiff.js -h

test:
	npx jest

test-coverage:
	npx jest --coverage

stylish-run:
	node bin/gendiff.js /home/deus-ex-m/projects/frontend-project-46/__fixtures__/testFile1.json __fixtures__/testFile2.json

plain-run:
	node bin/gendiff.js -f plain /home/deus-ex-m/projects/frontend-project-46/__fixtures__/testFile1.yml __fixtures__/testFile2.yml

json-run:
	node bin/gendiff.js -f json /home/deus-ex-m/projects/frontend-project-46/__fixtures__/testFile1.json __fixtures__/testFile2.json