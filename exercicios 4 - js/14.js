function removeEspacos(str) {
    return str.replace(/\s+/g, '');
}

const exemplo = "Curso Polkadot - codigo brazuka";
const resultado = removeEspacos(exemplo);

console.log(resultado); 
