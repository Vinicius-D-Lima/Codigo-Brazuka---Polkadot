function parOuImpar(num){
    if(num % 2 == 0){
        return 'Par';
    }else{
        return 'impar';
    }
}

let num = 4;
let result = parOuImpar(num);
console.log(result);
