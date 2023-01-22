let primefactor=[]
let num=13195;
for(let i=2;i<=num;i++){
    if(num%i===0){
        primefactor.push(i)
    }
}

console.log(primefactor)
let largestPrimeFactor=[]
for (number of primefactor){
    console.log(number)
    for(let j=5;j<=primefactor.length;j++){
        console.log(primefactor)
        if(number%j===0){
            if(j<number){
                break;
            }else{
                largestPrimeFactor.push(j)
            }
        }
    }
    
}
console.log(largestPrimeFactor)