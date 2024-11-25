function somaPar(num){
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        if(num[i] % 2 == 0){
            sum += num[i];
        }
    }
    return sum;
}

var num = [20,12,34,55,3,7,97,64];
console.log(somaPar(num));