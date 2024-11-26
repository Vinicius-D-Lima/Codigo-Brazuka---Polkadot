function primo(num){
    if(num <= 1){
        return false;
    }
    let i = 2;
    let range = (num * 0.5) + 1;
    while(i < range){
        if(num % i == 0){
            return false;
        }
        return true;
        i++;
    }
}
let num = 7;
let result = primo(num);
console.log(result);