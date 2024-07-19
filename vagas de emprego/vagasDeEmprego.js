const vagas = []

function listarVagas(){
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")
    if(vagasEmTexto === ''){
        alert("Nenhuma vaga criada!")

    }else{
        alert(vagasEmTexto)
    }
    
}

function novaVaga(){
    const nome = prompt("Informe um nome para a vaga: ")
    const descricao = prompt("Informe uma descrição para a vaga: ")
    const dataLimite = prompt("Informe uma data (dd/mm/aaaa) limite para a vaga: ")

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas infomação?\n" +
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
    )

    if (confirmacao){
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga criada")
    }
}

function exibirVaga(){
    const indice = prompt("Informe o indice da vaga que deseja exibir: ")

    if(indice>= vagas.length || indice < 0){
        alert("Indice inválido!")
        return
    }

    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga n° " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite + 
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato(){
    const candidato = prompt("Informe o nome do(a) candidato(a): ")
    const indice = prompt("Informe o indice da vaga para a qual o(a) candidato(a) deseja se inscrever: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite    
    )

    if(confirmacao){
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada.")
    }
}

function excluirVaga(){
    const indice = prompt("Informe o indice da vaga que deseja excluir: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga: " + 
        "\nNome: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite    
    )

    if(confirmacao){
        vagas.splice(indice, 1)
        alert("Vaga excluida.")
    }
}

function exibirMenu(){
    const opcao = prompt(
        "CADASTRO DE VAGAS DE EMPREGO" +
        "\n\nEscolha um das opçôes: " +
        "\n1. Listar vagas disponiveis" +
        "\n2. Criar uma nova vaga" +
        "\n3. Visualizar uma vaga" +
        "\n4. Inscrever um(a) candidatro(a)" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair"
    )

    return opcao
}

function executar (){
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch(opcao){
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção invalida!")
        }
    } while (opcao !== '6');
}


executar()