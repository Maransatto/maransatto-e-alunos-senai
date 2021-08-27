// function validateForm() {
    
//     var name = document.forms[0].name.value;

//     if (name !== 'Rodolfo Cerutti') {
//         alert('Digite o nome correto');
//         return false;
//     }
//     return true;
// }

function validateForm(){
    
    var formValido = true;
    var mensagens = [];

    var name = document.forms[0].name.value;

    if (name.length < 5){
        mensagens.push('Nome muito curto')
        formValido = false;
    }

    if (name.length > 20){
        mensagens.push('Nome muito grande')
        formValido = false;
    }

    if (!formValido){
        var msnfinal = 'Formulario Invalido \n';
        mensagens.forEach(mensagem => {
            msnfinal = '\n' + msnfinal + mensagem + '\n';
        });
        alert(msnfinal);
        return false;
    }

    const meuJson = montarJson();
    document.getElementById('resultadoJson').innerHTML = JSON.stringify(meuJson);

    return false;
}

function montarJson(){
    const name = document.getElementById('name').value;
    const nickname = document.getElementById('nickname').value;
    const day = document.getElementById('day').valeu;
    const month = document.getElementById('month').valeu;
    const year = document.getElementById('year').valeu;
    const cpf = document.getElementById('cpf').valeu;

    var mostrarJson = {
        "nome" : name,
        "nickname" : nickname,
        "dia" : day,
        "mês" : month,
        "ano" : year,
        "cpf" : cpf,
    }

    return mostrarJson;

}


