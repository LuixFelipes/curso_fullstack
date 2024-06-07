const entrada1 = prompt("Informe a velocidade do primeiro veiculo em Km/h:")
const entrada2 = prompt("Informe a velocidade do segundo veiculo em Km/h:")
const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

if (x == y){
    alert('Velocidade do veiculos são iguais '+ x +'Km/h')
}else if(x > y){
    alert('velocidade do primeiro veiculo '+ x + 'Km/h maior que a do segundo ' + y+ 'Km/h')
}else
    alert('velocidade do segundo veiculo ' + y + 'Km/h maior que a do primeiro ' + x + 'Km/h')
