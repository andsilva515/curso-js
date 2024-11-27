let num = [5, 8, 2, 9, 3]

    num.push(1) // adiciona mais um elemento no vetor.
    num.sort() // vetor em ordem

    console.log(`Vetor: [ ${num} ]`)    
    console.log(`O vetor tem ${num.length} posições.`)    
    console.log(`O primeiro valor do vetor é ${num[0]}`)    
    console.log(`O segundo valor do vetor é ${num[1]}`)

    // let pos = num.indexOf(8)

    let pos = num.indexOf(8) // buscar valor que não existe
    if (pos == -1) {
        console.log(`O valor não foi encontrado!`)
    } else {
        console.log(`O valor 8 está na posição ${pos}`)
    }
    
