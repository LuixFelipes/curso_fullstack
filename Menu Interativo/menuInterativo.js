let opcao = ""
do {
     opcao = prompt(
        "Menu"+
        "\n1 - Cadastro de Recruta "+
        "\n2 - Conversor de medidas" +
        "\n3 - Teste de velocidade"+
        "\n4 - Visitando novas cidades"+
        "\n5 - Encerrar\n"+
        "\nEscolha um opção: "
        )
        switch (opcao){
            case "1": 
                alert("Cadastro de recruta")
                break
            case "2":
                alert("Conversor de medidad")
                break
            case "3":
                alert("Teste de velocidade")
                break
            case "4":
                alert("Visitando novas cidades")
                break
            case "5":
                alert("Encerrando...")
                break   
            default:
                alert("Entrada invalida! Escolha umas das opcões.")
            }
        
} while (opcao !== "5");

alert("Programa finalizado!")