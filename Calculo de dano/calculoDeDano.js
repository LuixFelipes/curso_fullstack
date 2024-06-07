const atacante = prompt("Informe o nome do personagem atacante: ")
const ataque = parseFloat(prompt("Informe o poder de ataque de 0 a 1000: "))

const defensor = prompt("Informe o nome do segundo personagem defensor: ")
const defesa = parseFloat(prompt("Informe o poder de defesa de 0 a 1000: "))
let pontosDeVida = parseFloat(prompt("Quantidade de pontos de vida 0 a 1000: "))
const escudo = prompt("Esse personagem possui escudo: Sim(S)/Nao(N)")

let danoCausado = 0

if (ataque>defesa && escudo === 'N'){
    danoCausado = ataque - defesa
}else if(ataque>defesa && escudo === 'S'){
    danoCausado = (ataque - defesa)/2
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + ataque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + defesa + "\nPossui escudo: " + escudo
)