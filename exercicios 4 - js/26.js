function contemSubstring(string, substring) {
    return string.includes(substring);
}


console.log(contemSubstring("programação é divertida", "divertida")); // true
console.log(contemSubstring("JavaScript é poderoso", "Python"));      // false
console.log(contemSubstring("Hello, world!", "world"));               // true
console.log(contemSubstring("Teste de string", "String"));            // false (case-sensitive)
