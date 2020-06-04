const path = require('path');
const os = require('os');
const fs = require('fs');

var pathObj = path.parse(__filename);
console.log(pathObj);

var totalMem = os.totalmem();
var freeMem = os.freemem();
console.log(`Total Memory : ${totalMem}`);
console.log(`Frree Mem : ${freeMem}`);

fs.readdir('./', function(err, files){
    if(err){
        console.log(err);
    }else{
        console.log(files);
    }
});

