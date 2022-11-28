const fs = require('fs').promises;
const path = require('path');
const url = path.resolve(__dirname, '..', 'config/database.json');

const result = async () => {
  try {
    let arr = [];
    let data = fs.readFile(url); // need to be in an async function
    return data; // the contents of file1.js
  } catch (error) {
    console.log('Vasko', error)
  }

}
let arr = []
result().then(a => {
  arr.push(a);
}).catch(err => console.log(err));
console.log(arr)