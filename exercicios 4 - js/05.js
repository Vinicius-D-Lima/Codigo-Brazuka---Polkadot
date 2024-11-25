// loop de forma recursiva
function loop(num){
    console.log(num);
    if(num == 10){
        return;
    }
    loop(num + 1);
}
//funcao com loop normal 
function loop2(num){
    while(num <= 10){
        console.log(num);
        num++;
    }
}
num = 1;
let result = loop(num);
console.log(result);
loop2(num);