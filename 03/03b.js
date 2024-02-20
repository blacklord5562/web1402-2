let fs = require('fs');
let data=process.argv[3];


function x(err) {
    if(err){
        console.log('ER: ',err);
    }
    else{
        console.log('File Saved!');
    }
}

fs.appendFile(process.argv[2],data,x)