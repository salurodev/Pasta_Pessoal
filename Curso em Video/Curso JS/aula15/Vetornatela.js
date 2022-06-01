let valores = [8, 1, 7, 4, 2, 9]



//pode se fazer assim
console.log(valores);

//pode se fazer assim:
console.log(valores[0]);
console.log(valores[1]);
console.log(valores[2]);
console.log(valores[3]);
console.log(valores[4]);
console.log(valores[5]);

//usando o for é mais fácil:)
for(let pos = 0; pos < valores.length; pos ++) {
    console.log(`Aposição ${pos} tem o valor ${valores[pos]}`)
}

//usando o .sort para colocar em ordem crescente
valores.sort()
for(let pos = 0; pos < valores.length; pos ++) {
    console.log(`Os valores das posições estão em ordem ${pos} tem o valor ${valores[pos]}`)
}

//jeito mais simplificado e mais novo de fazer
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}