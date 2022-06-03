// função recursiva, onde a função recebe ela mesmo
//RECURSIVIDADE
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))


/* o fatorial de um número é ex:
5! = 5 x 4 x 3 x 2 x 1
ou seja:
5! = 5 x 4!

n! = n x (n-1)!

1! = 1 */