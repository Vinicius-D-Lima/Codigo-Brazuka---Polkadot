function trocaVogal(str){
    let vogal = ['a', 'e', 'i','o','u'];
    var cleanStr = str.split('');
    for(let i = 0; i < cleanStr.length;i++){
        for(let j = 0; j < vogal.length;j++){
            if(cleanStr[i] == vogal[j]){
                cleanStr[i] = '*';
            }
        }
    }
    return str = cleanStr.join('');
}
console.log(trocaVogal('curso polkadot - codigo brazuka'));