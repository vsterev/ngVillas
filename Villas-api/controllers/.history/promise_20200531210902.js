const fs = require('fs').promises;
const path = require('path');
const url = path.resolve(__dirname, '..', 'config/database.json');

const result = async () => {
  try {
    let data = await fs.readFile(url); // need to be in an async function
    return (JSON.parse(data)); // the contents of file1.js
  } catch (error) {
    console.log('Vasko', error)
  }

}
let arr = [1];
result().then(data=> {return arr.push(JSON.stringify(data))}).catch(err => console.log(err));
console.log(arr)