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

fs.unlink(process.argv[2])