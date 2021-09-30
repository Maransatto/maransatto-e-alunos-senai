function validarForm() {

    var name = document.getElementById('name').value;
    var nickname  = document.getElementById('nickname').value;
    var cpf = document.getElementById('cpf').value;

    var formValido = true;
    var mensagens = [];

    if (name === '') {
        mensagens.push('Nome obrigatório');
        formValido = false;
    }

    if (name != '' && name.length < 10) {
        mensagens.push('Nome inválido, menor que 10 caracteres');
        formValido = false;
    }

    if (nickname != '' && nickname.length < 10) {
        mensagens.push('Apelido inválido, menor que 10 caracteres');
        formValido = false;
    }

    if (formValido === false) {
        var mensagemFinal = mensagens.join('\n');
        alert(mensagemFinal);
    }

    return formValido;
}