let somar = numero => {
    let soma = 0
    for(let i = 0; i < numero+1;i++){
        if(i % 3 == 0 && i % 5 == 0){
            soma += i
        }else if(i % 5 == 0){
            soma += i
        }else if(i % 3 == 0){
            soma += i
        }else{
            continue
        }
    }
    console.log(soma)
}
somar(15)