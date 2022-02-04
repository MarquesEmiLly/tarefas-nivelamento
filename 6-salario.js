function salario(profissao, dias, moedas) {
    const moedaDeCobre = 10
    const moedaDePrata = 50
    const moedaDeOuro = 100
    let moedinha = moedas.toUpperCase()
    
    if (dias == 0) {
        return "Não trabalhou nenhum dia "
    }
    if (dias <= -1) {
        return "Esta devendo dias de trabalho"
    }
    if (dias >= 25) {
        const calculoExtra = moedaDeCobre * 3
        return `hora extra opcional no valor de : ${calculoExtra} cobres`
    }

    if (dias > 30) {
        return "trabalhou mais do que devia!"
    }

    if (moedinha === "OURO") {
        let ouro = moedaDeOuro || moedaDePrata * 2 || moedaDeCobre * 10
        const calculo = dias * ouro
        return `${profissao} trabalhou durante ${dias} dias e irá receber ${calculo} de ouro`

    }
    if (moedinha === "PRATA") {
        let prata = moedaDePrata || moedaDeOuro / 2 || moedaDeCobre * 5
        const calculo = dias * prata
        return `${profissao} trabalhou durante ${dias} dias e irá receber ${calculo} de prata`
    }

    if (moedinha === "COBRE") {
        let cobre = moedaDeCobre || moedaDePrata / 5 || moedaDeOuro / 10
        const calculo = dias * cobre
        return `${profissao} trabalhou durante ${dias} dias e irá receber ${calculo} de cobre`
    }
    return "não aceitamos essa moédinha"

}

console.log(salario("faxineiro", 28, "cobre"))