console.log("Inputs", process.argv);
let inputs=[];
let a=[];
let b= 0;
function x (val, index){
    if(index>1){
        inputs[index-2]=val;
    }
    b= index;
}
process.argv.forEach(x);
console.log("inputs:", inputs);


for (let i = 2; i <= b; i++) {
    inputs[i-2]=process.argv[i];
  }
  console.log("for input:",inputs);