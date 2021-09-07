function validateForm () {

    let form = true;

    var name = document.getElementById ('nome'). valor;
    var nickname = document.getElementById ('nickname'). value;
    var userDocument = document.getElementById ('userDocument'). value;
    let day = document.getElementById ('day'). value;
    let month = document.getElementById ('month'). value;
    let year = document.getElementById ('year'). value;
    let team_id = document.getElementById ('team_id'). value;

    if (name.length <10) {
        alerta ("Nome curto, tamanho mínimo 10 caracteres");
        form = false;
    }

    if (name.length> 80) {
        alerta ("Nome longo, tamanho máximo 80 caracteres");
        form = false;
    }

    if (nickname.length <10) {
        alerta ("Apelio curto, tamanho mínimo 10 caracteres");
        form = false;
    }

    if (nickname.length> 80) {
        alerta ("Rastreamento longo, tamanho máximo 80 caracteres");
        form = false;
    }

    if (dia <1 || dia> 31) {   
        alerta ("dia inválido”);
        form = false;
    }

    if (mês <1 || mês> 12) {
        alerta ("Mês inválido");
        form = false;
    }

    if (ano <1900 || ano> 2021) {
        alerta ("Ano inválido");
        form = false;
    }

    if (userDocument.length!=14) {
        alerta ("CPF inválido");
        form = false;
    }

    if (! form) {
        var mensagemFinal = 'Formulário Inválido. \ n ';
        mensagens.forEach (função (mensagem) {
        mensagemFinal = '\ n' + mensagemFinal + mensagem + '\ n';
        });
        alerta (mensagemFinal);
        retornafalso;
    }
        
    formulárioderetorno;
}