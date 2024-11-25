function intercala(num, inicio, fim, meio) {
    let aux = []; // Array auxiliar
    let posLivre = inicio;
    let inicioA1 = inicio;
    let inicioA2 = meio + 1;

    // Comparação e intercalação das duas metades
    while (inicioA1 <= meio && inicioA2 <= fim) {
        if (num[inicioA1] > num[inicioA2]) {
            aux[posLivre] = num[inicioA2];
            inicioA2++;
        } else {
            aux[posLivre] = num[inicioA1];
            inicioA1++;
        }
        posLivre++;
    }

    // Copiando os elementos restantes da primeira metade, se existirem
    for (let i = inicioA1; i <= meio; i++) {
        aux[posLivre] = num[i];
        posLivre++;
    }

    // Copiando os elementos restantes da segunda metade, se existirem
    for (let i = inicioA2; i <= fim; i++) {
        aux[posLivre] = num[i];
        posLivre++;
    }

    // Copiando os elementos ordenados do auxiliar de volta para o array original
    for (let i = inicio; i <= fim; i++) {
        num[i] = aux[i];
    }
}

function mergeSort(num, inicio, fim) {
    if (inicio < fim) {
        const meio = Math.floor((inicio + fim) / 2); // Cálculo do meio
        mergeSort(num, inicio, meio); // Ordena a primeira metade
        mergeSort(num, meio + 1, fim); // Ordena a segunda metade
        intercala(num, inicio, fim, meio); // Intercala as duas metades
    }
    return num; // Retorna o array ordenado
}
function ordem(num) {
    // Criar uma cópia do array original
    const copia = [...num];

    // Ordenar a cópia
    mergeSort(copia, 0, copia.length - 1);

    // Verificar se o array original está em ordem
    for (let i = 0; i < num.length - 1; i++) {
        if (num[i] > num[i + 1]) {
            return false; // Não está em ordem
        }
    }

    return true; // Está em ordem
}

// Testando a função
const list = [1, 2, 3, 4, 5];
console.log(ordem(list)); // true

const list2 = [23, 1, 3, 54, 3, 5, 6, 43, 89, 65, 43, 21, 11, 23, 90, 54];
console.log(ordem(list2)); // false