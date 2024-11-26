function soma(num){
    let sum = 0;
    while(num <= 100){
        sum = sum + num;
        num++;
    }
    return sum;
}
let num = 1;
let result = soma(num);
console.log(result);