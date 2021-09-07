function validateform () {
    var formValido = true;
    var mensagens = [];
    var name = document.forms [0] .name.value;
    var nickname = document.forms [0] .nickname.value;
    var day = document.forms [0] .day.value;
    var mês = document.forms [0] .month.value;
    var year = document.forms [0] .year.value;
    var cpf = document.forms [0] .cpf.value;
    var combo = document.forms [0] .combo.value;

    // nome
    if (name.length <10) {
        mensagens.push ('Nome com número de caracteres inferior ao permitido')
        formValido = falso;
    }
    if (name.length> 80) {
        mensagens.push ('Nome com número de caracteres maior que permitido')
        formValido = falso;
    }
    // apelido
    if (nickname.length <2) {
        mensagens.push ('elevado com número de caracteres inferior ao permitido')
        formValido = falso;
    }
    if (nickname.length> 20) {
        mensagens.push ('Processado com número de caracteres maior que permitido')
        formValido = falso;
    }
    // dia
    if ((dia <"1") || (dia> "31")) {
        mensagens.push ('Dia permitido tem que ser compreendido entre 1 e 31')
        formValido = falso;
    }

    // mes
    if (((mês * 1) <"1") || ((mês * 1)> "12")) {
        mensagens.push ('Mês permitido tem que ser compreendido entre 1 e 12')
        formValido = falso;
    }

    // ano
    if ((ano <"1900") || (ano> "2021")) {
        mensagens.push ('Ano permitido tem que ser compreendido entre 1900 e 2021')
        formValido = falso;
    }
    // cpf
    if (cpf.length == 14) {
        mensagens.push ('CPF Inválido')
        formValido = falso;
    }

    // combo esporte
    if (combo == "Escolha um tempo") {
        mensagens.push ('Escolha um momento do seu coração')
        formValido = falso;
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
    // Checkbox esporte
    var check = document.getElementsByName ("Sport");
    var x;
    x = 0;
    for (var i = 0; i <check.length; i ++) {
        if (verifique [i] .checked == true) {
            x = x + 1
        }
    }
    if (x == "0") {
        mensagens.push ('Selecione ao menos uma categoria de esporte!')
        formValido = falso;
    }

    if (! formValido) {
        var mensagemFinal = 'Formulário inválido \ n';
        mensagens.forEach (mensagem => {
            mensagemFinal = '\ n' + mensagemFinal + mensagem + '\ n';
        });
        alerta (mensagemFinal);
        retornafalso;
    }
    return true;

}
// mascara cpf
function mascara_cpf () {
    var cpf = document.getElementById ('cpf')
    if (cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += "."
    }
    else if (cpf.value.length == 11) {
        cpf.value += "-"
    }
}

function montarjson () {   
    const name = document.getElementById('name').value;
    const nickname = document.getElementById('nickname').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const cpf = document.getElementById('cpf').value;
    const team_id = document.getElementById('team_id').value;
    
    var esporte = [];
    var els = document.getElementsByName ('Sport');
    for (var i = 0; i <els.length; i ++) {
        if (els [i] .checked) esporte.push (els [i].value);
    }
    var resultado = esporte.join ('-');
    // alerta (resultado);
   
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


    // console.log (obj_form.sports)

    // return obj_form;
    var json = JSON.stringify (obj_form);

    document.write ("<h1> Dados em Json </h1>");
    document.write (json);


}