// Percurso Simplificado

let valores = [8, 1, 7, 4, 2, 9] // forma de mostrar 
valores.sort()
console.log(valores)


for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}