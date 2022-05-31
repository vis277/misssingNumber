// let n=5;
// let arr=[1,2,3,5];

let n=10;
let arr=[1,2,4,3,5,9,6,10,7]


function missingNumber(arr,n){
for(let i=1;i<=n;i++){
if(arr.indexOf(i)===-1){
return i;
          }
        }
    }

console.log(missingNumber(arr,n));