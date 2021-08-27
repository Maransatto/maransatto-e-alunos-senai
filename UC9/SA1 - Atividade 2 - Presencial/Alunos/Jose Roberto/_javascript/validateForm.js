function validateForm() {

    let form = true;

    var name = document.getElementById('name').value;
    var nickname = document.getElementById('nickname').value;
    // Vai dar erro na linha abaixo, pois tenta sobrescrever o document, que é o mesmo
    // usado em document.getElementById(). O erro acontece ainda antes de chegar nesta linha,
    // só pelo fato dela existir. Por isso deve-se trocar o nome desta variável.
    var document = document.getElementById('document').value; 
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    let team_id = document.getElementById('team_id').value;

    if(name.length < 10) {
        alert("Nome curto, tamanho mínimo 10 caracteres");
        form = false;
    }

    if (name.length > 80) {
        alert("Nome longo, tamanho máximo 80 caracteres");
        form = false;
    }

    if (nickname.length < 10) {
        alert("Apelio curto, tamanho mínimo 10 caracteres");
        form = false;
    }

    if (nickname.length > 80) {
        alert("Apelido longo, tamanho máximo 80 caracteres");
        form = false;
    }

    if( day < 1  || day > 31){   
        alert("Dia inválido");
        form = false;
    }

    if( month < 1 ||  month > 12){
        alert("Mês inválido");
        form = false;
    }

    if(year < 1900 || year> 2021){
        alert("Ano inválido");
        form = false;
    }

    if(cpf.length != 14){
        alert("CPF inválido");
        form = false;
    }

    if (!form) {
        var mensagemFinal = 'Formulário Inválido. \n';
        mensagens.forEach(function(mensagem) {
        mensagemFinal = '\n' + mensagemFinal + mensagem + '\n';
        });
        alert(mensagemFinal);
        return false;
    }
        
    return form;
}