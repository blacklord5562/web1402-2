let fs = require('fs');
let data=process.argv[3];
let src=process.argv[2];

function x(err) {
    if(err){
        console.log('ER: ',err);
    }
    else{
        console.log('File Saved!');
    }
}

fs.writeFile(src,data,x)