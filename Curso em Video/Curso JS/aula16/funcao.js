function parImpar(n) {
    if (n == 0) {
        return 'Zero'
    } else if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
    
}



console.log(parImpar(0))