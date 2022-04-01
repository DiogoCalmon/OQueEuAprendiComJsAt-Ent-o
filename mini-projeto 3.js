let fizzBuzz = numero => {
    if(numero % 3 == 0 && numero % 5 == 0){
        console.log("FizzBuzz")
    }else if(numero % 3 == 0){
        console.log("Fizz")
    }else if(numero % 5 == 0){
        console.log("Buzz")
    }else if(typeof numero == "string"){
        console.log("Você deve escolher um numero")
    }else{
        console.log(numero)
    }
}
fizzBuzz("a")