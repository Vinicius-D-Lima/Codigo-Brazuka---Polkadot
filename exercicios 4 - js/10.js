function vogal(str){
    let cont = 0;
    let vog = ['a','e','i','o','u'];
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < vog.length; j++){
            if(str[i] == vog[j]){
                cont++;
            }
        }
    }
    return cont;
}
console.log(vogal('bundamole'));