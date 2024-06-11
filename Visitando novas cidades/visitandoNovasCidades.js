const turista = prompt("Qual seu nome: ")
let cidades = ''
let contador = 0
let visitou = prompt("Já visitou alguma cidade (Sim/Não)")

while (visitou === 'Sim'){
    let cidade = prompt("Qual o nome da cidade visitada: ")
    cidades += "\n - " + cidade +"\n"
    contador ++
    visitou = prompt("Já visitou alguma outra cidade (Sim/Não)")
}

alert(
    "Nome: " + turista +
    "\nQuantas cidades visitou: " + contador +
    "\nQuais cidades visitou: " + cidades
)

//teste 2,0