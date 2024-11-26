function contImpar(num){
    let cont = 0;
    for(let i = 0; i < num.length; i++){
        if(num[i] % 2 == 1){
            cont++;
        }
    }
    return cont;
}
var num = [20,12,34,55,3,7,97,64];
console.log(contImpar(num));