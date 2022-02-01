function salario(ouro, prata, cobre) {
    let dia = 0
    const ferreiro = cobre * (dia + 7) //10*7=70
    const dev = prata * (dia + 5) //20*5=100
    const merendeira = ouro * (dia + 10)//30*10= 300
    return ferreiro + dev + merendeira


}
console.log(salario(30, 20, 10))

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