let fs = require('fs');
let pos=process.argv[2];


switch(pos){
   
        case pos=='copy':
            function copyfunc(err) {
                if(err)
                {
                    console.log('ERR:',err);
                }
            
                else{
                    console.log('File Copyed!');
                }
            }
            
            fs.copyFile(process.argv[3],process.argv[4],copyfunc)
    
        case pos=='delete':
            function unLinkCallBack(err) {
                if(err)
                {
                    if(err.code==='EPERM'){
                        fs.rmdir(process.argv[3],unLinkCallBack)
                    }
                    else{
                        console.log('ERR:',err);
                    }
                }
            
                else{
                    console.log('File Deleted!');
                }
            }
            
            fs.unlink(process.argv[3],unLinkCallBack)

        case pos=='append':
            function x(err) {
                if(err){
                    console.log('ER: ',err);
                }
                else{
                    console.log('File Saved!');
                }
            }
            
            fs.appendFile(process.argv[3],data,x)

        case pos=='create':
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

    }