
//5! = 5 * 4 * 3 * 2 * 1 = 120 - Calcular o Fatorial de um número

function fatorial(num) {
     let fat = 1
     for(let c = num; c > 1; c-- ) {
        fat *= c
     }
     return fat
}

console.log(fatorial(5))

