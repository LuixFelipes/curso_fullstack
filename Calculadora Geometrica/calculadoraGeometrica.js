function calcularAreaTriangulo(){
    const base = parseFloat(prompt("Informe a base do triangulo:"))
    const altura = parseFloat(prompt("Informe a altura do triângulo: "))
    return base * altura /2
}

function calcularAreaRetangulo(){
    const base = parseFloat(prompt("Informe a base do retângulo:"))
    const altura = parseFloat(prompt("Informe a altura do retângulo: "))
    return base * altura 
}

function calcularAreaQuadrado(){
    const lado = parseFloat(prompt("Informe o valor do lado do quadrado:"))
    return  lado*lado
}

function calcularAreaTrapezio(){
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio: "))
    const altura = parseFloat(prompt("Informe a altura do trapézio: "))
    return (baseMaior+baseMenor)*altura/2
}

function calcularAreaCirculo(){
    const pi = 3.14
    const raio = parseFloat(prompt("Informe o raio do circulo:"))
    return pi*(raio*raio)
}

function exibirMenu(){
    return prompt(
        "Calculador Geometrica\n" +
        "1. Calcular área do triângulo\n" +
        "2. Calcular área do retângulo\n" +
        "3. Calcular área do quadrado\n" +
        "4. Calcular área do trapézio\n" +
        "5. Calcular área do circulo\n" +
        "6. Sair"
    )
}

function excutar(){
    let opcao = ""

    do {
        opcao = exibirMenu()
        let resultado

        switch(opcao){
            case "1":
                resultado = calcularAreaTriangulo()
                break
            
            case "2":
                resultado = calcularAreaRetangulo()
                break
            
            case "3":
                resultado = calcularAreaQuadrado()
                break
            
            case "4":
                resultado = calcularAreaTrapezio()
                break
            
            case "5":
                resultado = calcularAreaCirculo()
                break

            case "6":
                alert("Saindo...")
                break

            default:
                alert("Opção inválida!")
                break
        }

        if(resultado){
            alert("Resultado: " + resultado)
        }
        
    } while (opcao!=="6");
}

excutar()