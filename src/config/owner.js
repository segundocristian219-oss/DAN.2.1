import fs from 'fs';
import 'dotenv/config';

global.owner = [['5212213479743'], ['5216711089134'], ['4173790455']];
global.dev1 = ['50432955554'];
global.developer = 'hrz';
global.key = process.env.API_KEY;
global.v = JSON.parse(fs.readFileSync('./package.json', 'utf-8')).version;
