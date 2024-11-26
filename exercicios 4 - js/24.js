function listarDivisores(numero) {
    if (numero <= 0) {
        console.log("Digite um número maior que zero.");
        return [];
    }

    const divisores = [];
    const limite = Math.sqrt(numero);

    for (let i = 1; i <= limite; i++) {
        if (numero % i === 0) {
            divisores.push(i); 
            if (i !== numero / i) {
                divisores.push(numero / i); 
            }
        }
    }

    return divisores.sort((a, b) => a - b); 
}

console.log(listarDivisores(12)); 
console.log(listarDivisores(25)); 
console.log(listarDivisores(1));  
