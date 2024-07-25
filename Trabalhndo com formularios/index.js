const form = document.getElementById("orderForm")

form.addEventListener("submit", function(ev){
    //ev.preventDefault()

    const name = document.querySelector("input[name='name']").value
    const address = document.querySelector("input[name='address']").value
    const breadType = document.querySelector("select[name='breadType']").value
    const main = document.querySelector("input[name='main']").value
    const observation = document.querySelector("textarea[name='observations']").value

    let salad = ""
    document.querySelectorAll("input[name='salad']:checked").forEach(function(item){
        salad += " - " + item.value + "\n"
    })

    const confirmation = confirm(
        "Pedido!" +
        "\nNome do cliente: " + name +
        "\nEndereço de entrega: " + address +
        "\nTipo de pão: " + breadType +
        "\nRecheio: \n - " + main + " \n" + salad +
        "Observações: " + observation + 
        "\n\nCorfimar pedido?"
    )
     
    if(confirmation){
        alert("Pedido realizado com sucesso!!")
    }
})

