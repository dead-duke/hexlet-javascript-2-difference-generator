import fs from 'fs';

const jsonData = JSON.parse(fs.readFileSync('__fixtures__/jsonTest.json', 'utf8'));
const resultJson = JSON.stringify(jsonData, null, 2);

export default resultJson;
