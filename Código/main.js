const recarregar = document.getElementById("FORMULARIO");
console.log(recarregar);

const numero = document.getElementById("NUMERO");
const rua = document.getElementById("RUA");
const numero_casa = document.getElementById("nC");
const NOME = document.getElementById("NOME");
const erro = document.querySelector('.name-complet');
const IDADE = document.getElementById('idade');
let err = false;
let ver_idade = false;

function validar_idade(idd) {

    const IDD = parseInt(idd, 10); //Foi usado o 10 para dizer que é uma casa decimal
    return IDD >= 18;
}

function validar_nome(nome) {
    const name = nome.split(' ');
    return name.length >= 2;
}

recarregar.addEventListener('submit', function (e) {

    e.preventDefault();
    const mensage = `O registro foi enviado com êxito por: <b>${NOME.value}!</b>`;
    const idad_mensage = `<b>${NOME.value}!</b> não possui idade para enviar`;
    err = validar_nome(NOME.value);
    ver_idade = validar_idade(IDADE.value);


    if (err && ver_idade) {

        const ContainerMensage = document.querySelector('.envio'); //Atribui a classe a variavel criada
        const ContainerIdade = document.querySelector('.idadeREQ');
        ContainerMensage.innerHTML = mensage;
        ContainerMensage.style.display = 'block';

        NOME.value = "";
        numero.value = "";
        rua.value = "";
        numero_casa.value = "";
        IDADE.value = "";

    } else {

        IDADE.style.border = '1px dashed red';
        NOME.style.border = '1px dashed red';
        document.querySelector('.name-complet').style.display = 'block';
        document.querySelector('.idadeREQ').style.display = 'block';        

    }
})


NOME.addEventListener('keyup', function (e) {
    console.log(e.target.value);
    err = validar_nome(e.target.value);

    if (!err) {

        NOME.style.color = 'red';
        erro.style.display = 'block';
        NOME.style.border = '2px dashed red';

    } else {

        NOME.style.color = 'black';
        erro.style.display = 'none';
        NOME.style.border = '';

    }

})