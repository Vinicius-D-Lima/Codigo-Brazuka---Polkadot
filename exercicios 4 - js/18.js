function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(aleatorio(1, 100))