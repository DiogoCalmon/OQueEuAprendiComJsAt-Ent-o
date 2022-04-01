let exibirNumeroPrimo = limite => {
    if(limite == 1){
        console.log(limite)
    }
    for(let numero = 2; numero <= limite; numero++){
        let ehPrimo = true
        for(let divisor = 2; divisor < numero; divisor++){
            if(numero % divisor == 0){
                ehPrimo = false
                break
            }
        }
        if(ehPrimo == true){
            console.log(numero)
        }
    }
}
exibirNumeroPrimo(5)