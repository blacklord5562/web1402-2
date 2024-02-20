let fs = require('fs');
let data=process.argv[3];


function unLinkCallBack(err) {
    if(err)
    {
        if(err.code==='EPERM'){
            fs.rmdir(process.argv[2],unLinkCallBack)
        }
        else{
            console.log('ERR:',err);
        }
    }

    else{
        console.log('File Deleted!');
    }
}

fs.unlink(process.argv[2],unLinkCallBack)