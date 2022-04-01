let verificarVelocidade = velocidade => {
    let pontos;
    Math.floor(pontos)
    if(velocidade > 70){
        pontos = (velocidade-70)/5
        if(pontos >= 12){
            console.log(`Carteira Suspendida`)
        }else{
        console.log(`Você recebeu ${pontos} na carteira`)
        }
    }else if(typeof velocidade == "string"){
        console.log(`Você deve colocar a velocidade em numero(s)`) 
    }else{
        console.log(`Você não recebeu nenhuma multa`)
    }
}
verificarVelocidade(60)