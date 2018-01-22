const fs = require('fs');
const path = require('path');


const file = fs.readFileSync(path.resolve('./source/test.js'));

fs.writeFile(path.resolve('./target/aaa.js'),file,()=>{console.log('success');});
