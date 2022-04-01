let exibirPropriedade = (objeto) => {
    for(let propriedade in objeto){
        if(typeof objeto[propriedade] === "string"){
            console.log(objeto[propriedade])
        }else{
            continue
        }
    }
}
let letras = {
    a:1,
    b:"ola",
    c:"oi"
}
exibirPropriedade(letras)

