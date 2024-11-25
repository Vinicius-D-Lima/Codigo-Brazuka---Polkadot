function fibobancci(num){
    if(num <= 2){
        return 1;
    }else{
        return fibobancci(num -1) + fibobancci(num -2);
    }
}

console.log(fibobancci(4));