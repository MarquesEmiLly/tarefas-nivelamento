function salario(profissao, dias) {
    let cobre = 10 //reais por dia 
    let prata = 20 //reais por dia
    let ouro = 30//reais por dia
    let profissoes = profissao.toUpperCase() //conversão das letras no console 
    if (dias == 0) {
        return "Não trabalhou nenhum dia "
    }
    if (dias <= -1) {
        return "Esta devendo dias de trabalho"
    }
    if (dias > 50) {     //caso ultrapassar os 50 dias
        return "trabalhou mais do que devia!"
    }
    if ("FERREIRO" === profissoes) {
        const salario1 = cobre * dias //calculo do salario
        return `o salário do Ferreiro é de : ${salario1}`
    }
    if ("ESCAVADOR" === profissoes) {
        const salario2 = prata * dias //calculo do salario
        return `o salário do Escavador é de : ${salario2}`
    }
    if ("MINEIRADOR" === profissoes) {
        const salario3 = ouro * dias //calculo do salario
        return `O salário do Mineirador é de : ${salario3}`
    }
    return "Profissão não reconhecida"
}

console.log(salario("mineirador", 0))







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