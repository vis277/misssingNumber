let array=[1,2,4,3,5,9,6,10,7];
let n=10;

function MissingNumber(array,n){
    const obj={};
        for(let i=0;i<n;i++){
            obj[array[i]]=array[i];
        }

        for(let i=1;i<=n;i++){
    if(!obj.hasOwnProperty(i)){
        return i;
    }    
        }
    }
    
    console.log(MissingNumber(array,n));
