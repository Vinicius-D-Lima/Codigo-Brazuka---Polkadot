function somaPar(num){
    let mult = 1;
    for(let i = 0; i < num.length; i++){
        if(num[i] % 2 == 0){
            mult *= num[i];
        }
    }
    return mult;
}

var num = [20,12,34,55,3,7,97,64];
console.log(somaPar(num));