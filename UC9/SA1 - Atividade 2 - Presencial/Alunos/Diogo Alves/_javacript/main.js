function validarFormulario() {

    var formValido = true;
    var mensagens = [];
    var name = document.forms[0].name.value;
    var nickname = document.forms[0].nickname.value;
    var day = document.forms[0].day.value;
    var month = document.forms[0].month.value;
    var year = document.forms[0].year.value;
    var cpf = document.forms[0].cpf.value;
    var team_id = document.forms[0].team_id.value;



    if (name.length < 10) {
        mensagens.push('nome com numero de caracteres inferior da permitida')
        formValido = false;
    }
    if (name.length > 80) {
        mensagens.push('nome com carecteres maior que o permitido')
        formValido = false;
    }

    if (nickname.length < 2) {
        mensagens.push('Sobre nome com numero de caracteres inferior da permitida')
        formValido = false;
    }
    if (nickname.length > 20) {
        mensagens.push('Sobre nome com carecteres maior que o permitido')
        formValido = false;
    }


    //mascara cpf

    function mascara_cpf() {
        var cpf = document.getElementById('cpf')

        if (cpf.value.length == 3 || cpf.value.length == 7) {
            cpf.value += "."
        }

        else if (cpf.value.length == 11) {
            cpf.value += "-"
        }
    }

    //dia

    if ((day < "1") || (day > "31")) {
        mensagens.push('Dia permitido tem que ser compreendido entre 1 e 31')
        formValido = false;
    }

    //mes

    if (((month * 1) < "1") || ((month * 1) > "12")) {
        mensagens.push('Mês permitido tem que ser compreendido entre 1 e 12')
        formValido = false;
    }

    //ano

    if ((year < "1900") || (year > "2021")) {
        mensagens.push('Ano permitido tem que ser compreendido entre 1900 e 2021')
        formValido = false;
    }

    //team_id esporte

    if (team_id == "Escolha um time") {
        mensagens.push('Escolha um time do seu coração')
        formValido = false;
    }

    //Checkbox esporte

    var check = document.getElementsByName("sport");
    var x;
    x = 0;

    for (var i = 0; i < check.length; i++) {
        if (check[i].checked == true) {
            x = x + 1
        }
    }

    if (x == "0") {
        mensagens.push('Selecione uma categoria de esporte!')
        formValido = false;
    }



    if (!formValido) {
        var mensagemFinal = 'Formulário inválido \n';
        mensagens.forEach(mensagem => {
            mensagemFinal = '\n' + mensagemFinal + mensagem + '\n';
        });

        alert(mensagemFinal);
        return false;
    }

    return true;

    if (!validarCPF(cpf)) {
        mensagens.push('CPF inválido');
        formValido = false;
    }

    if (!formValido) {
        var mensagemFinal = 'Formulário inválido \n';
        mensagens.forEach(mensagem => {
            mensagemFinal = '\n' + mensagemFinal + mensagem + '\n';
        });

        alert(mensagemFinal);
        return false;
    }
    return true;
}

function mascara_cpf() {

    var cpf = document.getElementById('cpf')
    if (cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += "."
    }
    else if (cpf.value.length == 11) {
        cpf.value += "-"
    }
}

function validarCPF(cpf = 0) {
    console.log(cpf);
    cpf = cpf.replace(/\.|-/g, "");
    let soma = 0;
    soma += cpf[0] * 10;
    soma += cpf[1] * 9;
    soma += cpf[2] * 8;
    soma += cpf[3] * 7;
    soma += cpf[4] * 6;
    soma += cpf[5] * 5;
    soma += cpf[6] * 4;
    soma += cpf[7] * 3;
    soma += cpf[8] * 2;
    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 11)
        soma = 0;
    console.log("Primeiro d : " + soma);
    if (soma != cpf[9])
        return false;
    soma = 0;
    soma += cpf[0] * 11;
    soma += cpf[1] * 10;
    soma += cpf[2] * 9;
    soma += cpf[3] * 8;
    soma += cpf[4] * 7;
    soma += cpf[5] * 6;
    soma += cpf[6] * 5;
    soma += cpf[7] * 4;
    soma += cpf[8] * 3;
    soma += cpf[9] * 2;
    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11)
        soma = 0;
    if (soma != cpf[10])
        return false;

    console.log("segundo d : " + soma);
    return true;
}
function montarjson() {
    const name = document.getElementById('name').value;
    const nickname = document.getElementById('nickname').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const cpf = document.getElementById('cpf').value;
    const team_id = document.getElementById('team_id').value;

    var esporte = [];
    var els = document.getElementsByName('sport');
    for (var i = 0; i < els.length; i++) {
        if (els[i].checked) esporte.push(els[i].value);
    }

    var resultado = esporte.join('-');
    var obj_form = {

        "nome": name,
        "Apelido": nickname,
        "Dia": day,
        "Mês": month,
        "Ano": year,
        "CPF": cpf,
        "Time coração": team_id,
        Esporte: resultado,
    }

    var json = JSON.stringify(obj_form);
    document.write("<h1>Dados em Json</h1>");
    document.write(json);
}