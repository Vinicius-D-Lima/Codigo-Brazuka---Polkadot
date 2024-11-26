function separarDigitos(numero) {
    return numero.toString().split('').map(digito => parseInt(digito));
}
function somaD(num){
    var sum = 0;
    var list
    if(num < 10){
        console.log("digite um numero menor que 10");
    }
    list = separarDigitos(num);
    for(let i = 0; i < list.length; i++){
        sum += list[i];
    }
    return sum;
}
console.log(somaD(32));