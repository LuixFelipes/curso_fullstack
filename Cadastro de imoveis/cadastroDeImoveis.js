const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Bem vindo ao Cadastro de imoveis. \nTotal de imoveis: " + imoveis.length +
        "\n\nEscolha uma opção: \n1. Novo imovel\n2. Listar imoveis\n3. Sair"
    )

    switch (opcao){
        case "1":
            const imovel = {}

            imovel.propietario = prompt("Informe o nome do propietario do imóvel:")
            imovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel:"))
            imovel.banheiros = parseFloat(prompt("Quantos banheiros possui o imóvel:"))
            imovel.garagem = prompt("O imóvel possui garagem: (Sim/Não)")

            const confirma = confirm(
                "Salvar este imóvel:\n" +
                "\nPropietario: " + imovel.propietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui garagem: " + imovel.garagem
            )

            if (confirma){
                imoveis.push(imovel)
            }
            break
        
        case "2":
            for(let i = 0; i < imoveis.length; i++){
                alert(
                    "Imóvel " + (i+1) +
                    "\nPropietário: " + imoveis[i].propietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nGaragem: " + imoveis[i].garagem
                )
            }
            break

        case "3":
            alert("Saindo...")
            break
        
        default:
            alert("Opção inválida!")
            break

    }
} while (opcao !== "3");