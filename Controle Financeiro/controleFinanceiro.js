let saldo = parseFloat(prompt("Qual a quantidade inicial de dinheiro: "))
let opcao = ""

do {
    opcao = prompt(
        "Controle financeiro"+
        "\nSaldo R$ "+ saldo +
        "\n1 - Depositar  "+
        "\n2 - Sacar" +
        "\n3 - Encerrar\n"+
        "Escolha um opção: "
        )
        switch (opcao){
        case "1":
            saldo += parseFloat(prompt("Saldo: R$ "+ saldo + "\ninforme a quantidade de dinheiro a ser depositada: "))
            alert("Operação concluida com sucesso!")
            break
        case "2":
            let sacar = parseFloat(prompt("Saldo: R$ "+ saldo + "\ninforme a quantidade de dinheiro a ser sacada: "))
            if (sacar > saldo){
                alert("Digite um valor menor ou igual ao saldo")
                break
            }else{
                saldo -= sacar
                alert("Operação concluida com sucesso!")
                break
            }
        case "3":
            alert("Encerrando...")
            break
        
        default:
            alert("Entrada invalida! Escolha umas das opcões.")
        }
} while (opcao !== "3");

alert("Programa finalizado!")