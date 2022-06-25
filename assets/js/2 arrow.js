// Transforma las siguiente función a una arrow function de una línea. 
//Este ejercicio debe quedar en un archivo llamado `2 arrow.js`

//Expresión original

suma = function(a, b) {
    return a + b
}
console.log(suma)

//Expresión transformada

suma = (a, b) => (a + b)

console.log(suma)