//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

let mediaFinal = media => {
    let final = 0
    for(let i of media){
        final += i
    }
    let mediana = final / 4
    if(mediana >= 0 && mediana <= 59){
        console.log("F")
    }else if(mediana >= 60 && mediana <= 69){
        console.log("D")
    }else if(mediana >= 70 && mediana <= 79){
        console.log("C")
    }else if(mediana >= 80 && mediana <= 89){
        console.log("B")
    }else if(mediana >= 90 && mediana <= 100){
        console.log("A")
    }else{
        console.log("Error")
    }
}

const array = [100,93,100,100]
mediaFinal(array)
