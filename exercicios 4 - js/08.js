function media(num){
    let soma = 0;
    for(let i = 0; i < num.length; i++){
        soma += num[i];
    }
    let media = soma / num.length;
    return media;
}
let num = [7,7];
let result = media(num);
console.log(result);