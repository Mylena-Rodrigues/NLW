
//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)
//addEventLister é quando ele ouve algo


//Executar uma ação
function cloneField(){
    //Duplicar os campos. Que campos?
    const newFieldsContainer = document.querySelector('.schedule-item') //Peguei esses campos
    .cloneNode(true)//Pega todos os itens //boolean: true or false

    //Limpar os campos. Que campos?
    const fields = newFieldsContainer.querySelectorAll('input')
    //Para cando campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value=""

    })

    //Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}
//Duplicar os campos
//Colocar na página

//Extra
//console.log("Cheguei aqui")
    //console.log coloca tudo o que está dentro do("") na área Console quando se aperta F12