const nome = prompt("Qual seu nome:")
const sobrenome = prompt("Qual seu sobrenome:")
const campoEstudo = prompt("Qual seu campo de estudo:")
const anoNascimento = prompt("Qual seu ano de nascimento")

const idade = 2024 - anoNascimento

alert(
    "Recruta cadastrado com Sucesso\n" +
    "\n Nome: " + nome + " " + sobrenome +
    "\n Idade: " + idade +
    "\n Campo de estudo: " + campoEstudo
)

