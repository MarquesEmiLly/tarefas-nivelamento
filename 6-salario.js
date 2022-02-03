function salario(profissao, dias, moedas) {
    let moedaDeCobre = 10 //reais por dia 
    let moedaDePrata = 20 //reais por dia
    let moedaDeOuro = 30//reais por dia
    let profissoes = profissao.toUpperCase() //conversão das letras no console 
    //let Ferreiro = 10 //dias trabalhado para cada profissional
    if (moedas <= "ouro") {
        const calculo = dias * moedaDeOuro
        return `${profissoes} trabalhou durante ${dias} e irá receber ${calculo} de ouro`

    }

    if (dias == 0) {
        return "Não trabalhou nenhum dia "
    }
    if (dias <= -1) {
        return "Esta devendo dias de trabalho"
    }
    if (dias > 30) {
        return "trabalhou mais do que devia!"
    }
}

console.log(salario("Mineirador", 20, "ouro"))