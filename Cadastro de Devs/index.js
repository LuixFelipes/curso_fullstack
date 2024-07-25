//funcões auxiliares 
//-criar uma label
function createLabel(text, htmlFor){
    const label = document.createElement('label')
    label.htmlFor= htmlFor
    label.innerText = text
    return label
}
//-criar um input
function createInput(id , value, name, type = 'text', placeholder = ''){
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

//variaveis globais
const addTechBtn =  document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

//Criar evento no botao para adcionar novas tecnologias
addTechBtn.addEventListener('click', function(ev){
    const stackInputs = document.getElementById('stackInputs')
    
    const newrow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    newrow.id = 'inputRow-'+ rowIndex
    newrow.className = 'inputRow'

    const techLabel = createLabel('Nome: ', 'techName-'+rowIndex)
    const techInput = createInput('techName-'+rowIndex, null, 'techname')

    const expLabel = createLabel(' Experiencia:')
    //0-2 anos
    const id1 = 'expRadio-' + rowIndex + '.1'
    const expLabel1 = createLabel('0-2 anos', id1)
    const expRadio1 = createInput(id1, '0-2 anos ', 'techExp-' + rowIndex, 'radio')
    //3-4 anos
    const id2 = 'expRadio-' + rowIndex + '.2'
    const expLabel2 = createLabel('3-4 anos', id2)
    const expRadio2 = createInput(id2, '3-4 anos ', 'techExp-' + rowIndex, 'radio')
    //5+ anos
    const id3 = 'expRadio-' + rowIndex + '.3'
    const expLabel3 = createLabel('5+ anos ', id3)
    const expRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio')

    //remover
    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', function(){
        stackInputs.removeChild(newrow)
    })

    newrow.append(techLabel, techInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn)
    stackInputs.appendChild(newrow)

    //Botão cadastrar
    form.addEventListener('submit', function(){
        alert('Dev cadastrado com sucesso!')
    })
})
