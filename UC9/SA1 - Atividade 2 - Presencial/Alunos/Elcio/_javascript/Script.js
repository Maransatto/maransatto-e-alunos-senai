
function validateform() {
    var formValido = true;
    var mensagens = [];
    var name = document.forms[0].name.value;
    var nickname = document.forms[0].nickname.value;
    var day = document.forms[0].day.value;
    var month = document.forms[0].month.value;
    var year = document.forms[0].year.value;
    var cpf = document.forms[0].cpf.value;
    var combo = document.forms[0].combo.value;

    //nome
    if (name.length < 10) {
        mensagens.push('Nome com número de caracteres inferior ao permitido')
        formValido = false;
    }
    if (name.length > 80) {
        mensagens.push('Nome com número de caracteres maior que permitido')
        formValido = false;
    }
    //apelido
    if (nickname.length < 2) {
        mensagens.push('Apelido com número de caracteres inferior ao permitido')
        formValido = false;
    }
    if (nickname.length > 20) {
        mensagens.push('Apelido com número de caracteres maior que permitido')
        formValido = false;
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
    //cpf
    if (cpf.length != 14) {
        mensagens.push('CPF Inválido')
        formValido = false;
    }

    //combo esporte
    if (combo == "Escolha um time") {
        mensagens.push('Escolha um time do seu coração')
        formValido = false;
    }

    //Checkbox esporte
    var check = document.getElementsByName("Sport");
    var x;
    x = 0;
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked == true) {
            x = x + 1
        }
    }
    if (x == "0") {
        mensagens.push('Selecione ao menos uma categoria de esporte!')
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

function montarjson() {


    const name = document.getElementById('name').value;
    const nickname = document.getElementById('nickname').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const cpf = document.getElementById('cpf').value;
    const team_id = document.getElementById('team_id').value;
    
    var esporte = [];
    var els = document.getElementsByName('Sport');
    for (var i = 0; i < els.length; i++) {
        if (els[i].checked) esporte.push(els[i].value);
    }
    var resultado = esporte.join('-');
    // alert(resultado);
   

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


    //    console.log(obj_form.sports)

    //    return obj_form;
    var json = JSON.stringify(obj_form);

    document.write("<h1>Dados em Json</h1>");
    document.write(json);


}
