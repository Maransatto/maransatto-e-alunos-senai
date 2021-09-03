document.getElementById('botao_nao').addEventListener('click', e => {

    alert ("Você precisa ter 18 anos ou mais para participar");

});

document.getElementById('botao_sim').addEventListener('click', e => {

    window.location.href='formulario.html';
    
    document.getElementById('body').addEventListener('onload', e => {

        create_form ();

    })
   

});


