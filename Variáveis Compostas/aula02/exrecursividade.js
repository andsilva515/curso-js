function fatorial(num) {
    if (num == 1) {
        return 1
    } else {
        return num * fatorial(num-1)
    }    
}

console.log(fatorial(5))


/*

5! = 5 x 4 x 3 x 2 x 1 
5! = 5 x 4!

O fatorial de um número pode ser calculado baseado no fatorial de outro número.

n! = n x (n-1)!
1! = 1

*/