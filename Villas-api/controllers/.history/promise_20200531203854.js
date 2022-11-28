const fs = require('fs').promises;
const path = require('path');
const url = path.resolve(__dirname, '..', 'config/database.json');

try {
 let data = await fs.readFile(url); // need to be in an async function
  console.log(data); // the contents of file1.js
} catch (error) {
  console.log(error)
}
