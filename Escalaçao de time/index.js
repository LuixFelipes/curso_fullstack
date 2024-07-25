function addPlayer(){
    const position = document.getElementById("position").value
    const name = document.getElementById("name").value
    const number = document.getElementById("number").value 
    const confirmation = confirm("Escalar " + name + " na posição " + position + "?")
    if(confirmation){
        const teamList = document.getElementById("team-list")
        const playerItem = document.createElement("li")
        playerItem.id = "player-"+number
        playerItem.innerText = position + ": " + name + " (" + number + ")"
        teamList.appendChild(playerItem)

        document.getElementById("position").value= ""
        document.getElementById("name").value= ""
        document.getElementById("number").value= ""
        }
}

function removeToPlayer(){
    const number =  document.getElementById("numberToRemove").value
    const playerToRemove = document.getElementById("player-" + number)

    const corfimation = confirm("Remover jogador " + playerToRemove.innerText + "?")

    if(corfimation){
        document.getElementById("team-list").removeChild(playerToRemove)
        document.getElementById("numberToremove").value = ""
    }
}