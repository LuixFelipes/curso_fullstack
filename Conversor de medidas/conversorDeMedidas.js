let medida = parseFloat(prompt("Digite um valor em metros"))

const opcao = prompt(
    '1. milímetro (mm)\n'+
    '2. centímetro (cm)\n'+
    '3. decímetro (dm)\n'+
    '4. decâmetro (dam)\n'+
    '5. hectômetro (hm)\n' +
    '6. quilômetro (km)\n'
)

switch (opcao){
    case "1": 
        alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
        break
    case "2":
        alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
        break
    case "3":
        alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
        break
    case "4":
        alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
        break
    case "5":
     alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
     break
    case "6":
        alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
        break
    default:
        alert("Opção inválida!")
        break
} 