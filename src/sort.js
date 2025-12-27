document.addEventListener('DOMContentLoaded', function () { //add um ouvinte de evento para dizer ao bloco lógico que o DOM deve ser carregado primeiro

    document.getElementById('id_form').addEventListener('submit', function (e) { // Capturei o id do fomulario, adicionei um ouvinte de evento que será executado quando eu clicar no botão do formulário

        e.preventDefault()

        let TagResultado = document.querySelector('.resultado')
        let CaixaResultado = document.querySelector('.CaixaResult_oculto')
        let MaxNumber = parseInt(document.getElementById('campoNum').value) // parseInt traduz o numero digitado que a princípio é uma string, para inteiro
        let temp = Math.floor(MaxNumber * Math.random()) + 1 // Math.floor arredonda um número para baixo

        TagResultado.innerText = `${temp}`

        CaixaResultado.classList.remove('CaixaResult_oculto')
        CaixaResultado.classList.add('CaixaResult_aparece')
    })
})
