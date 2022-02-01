function verificacao(num1, num2) {
    const guardarArray = (num1 + num2) / 2
    if (guardarArray >= 7) {
        console.log("aprovada")
    }
    if (guardarArray < 7) {
        console.log("reprovado")
    }

}


verificacao(7, 7)




/*will
function verificacao(num1, num2,) {
   const guardar= (num1 + num2) /2  
    
    switch(guardar>=7){
        case :
            console.log("aprovado");
            break;
    }


    function verificacao(num1, num2) {
    const guardarArray = (num1 + num2) / 2
    let comparaMaior = guardarArray >= 7
    let comparaMenor = guardarArray < 7
    switch (guardarArray) {
        case comparaMaior:
            console.log("aprovada");
            break;

        case comparaMenor:
            console.log("reprovado")
            break;
        default:
            console.log("invalido")
    }

}


verificacao(10, 20)
*/