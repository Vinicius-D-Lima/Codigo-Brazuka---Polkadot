function caracter(x,y){
    let cont = 0;
    for(let i = 0;i < x.length; i++ ){
        if(x[i] == y){
            cont++;
        }
    }
    return cont;
}
console.log(caracter('codigo brazuka curso polkadot','o'));