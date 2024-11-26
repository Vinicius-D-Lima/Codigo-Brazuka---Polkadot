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

// Testando a função
const list = [23, 1, 3, 54, 3, 5, 6, 43, 89, 65, 43, 21, 11, 23, 90, 54];
console.log("Lista original:", list);
const sortedList = mergeSort(list, 0, list.length - 1);
console.log("Lista ordenada:", sortedList);
