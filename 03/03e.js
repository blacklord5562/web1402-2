let fs = require('fs');
// let data=process.argv[3];


function copyfunc(err) {
    if(err)
    {
        console.log('ERR:',err);
    }

    else{
        console.log('File Copyed!');
    }
}

fs.copyFile(process.argv[2],process.argv[3],copyfunc)