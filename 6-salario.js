function salario(profissao, dias) {
    let cobre = 30 //reais por dia 
    let prata = 40 //reais por dia
    let ouro = 50 //reais por dia
    
    if(dias>30){
        return "trabalhou mais do que devia!!!"
    }
    if( "faxineiro" === profissao){
    return "" + dias*30
    }

}
console.log(salario("faxineiro", 20))







/*salario = ouro,prata e cobre = numeros/parametros
dias * ouro
serviçais demoram Xdias para terminar os serviços 
podemos ter mais de uma pessoa para cada serviço 
calcule o salario deles 

entrada:
Função: Ferreiro
Custo: 2 Cobres/dia

saida:
Salário: em 20 dias, deve se pagar a 3 ferreiros 60 cobres
*/