let nome
let sobrenome
let campoEstudo
let anoNascimento
let idade

nome = prompt("Qual seu nome:")
sobrenome = prompt("Qual seu sobrenome:")
campoEstudo = prompt("Qual seu campo de estudo:")
anoNascimento = prompt("Qual seu ano de nascimento")

idade = 2024 - anoNascimento

confirm("Nome: ", nome," ", sobrenome, "\nIdade: ", idade, "\nCampo de Estudo: ",campoEstudo)
