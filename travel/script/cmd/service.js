const http = require('http');
const fs = require('fs');

const content = fs.readFileSync('./resource/view/index.html');
http.createServer((req,res)=>{
    console.log('listen');
    console.log(content);
    res.write('test');
}).listen(3000,'localhost');