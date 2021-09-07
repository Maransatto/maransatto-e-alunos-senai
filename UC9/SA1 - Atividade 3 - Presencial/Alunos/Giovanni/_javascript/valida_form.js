//função para totalizar valor de assinatura mensal
function totaliza()
{
    total = 0.00;
    //plano mensal
    if(document.form.planos[0].checked)
        total = total + 85.00;
    //plano quadrimestral
    if(document.form.planos[1].checked)
        total = total + 300.00 / 4;
    //plano anual
    if(document.form.planos[2].checked)
        total = total + 600.00 / 12;
    //Premiere econômico
    if(document.form.premiere[0].checked)
        total = total + 60.00;
    //Premiere controle
    if(document.form.premiere[1].checked)
        total = total + 80.00;
    document.form.total.value = total.toFixed(2);
}

function validarNome(){
var nome = document.forms[0].nome.value;
if(nome.length === 0) {
    alert("Nome inválido, digite corretamente!");
    return false;
    }
    return true;
}

function validarCPF(){
var cpf = document.forms[0].cpf.value;
if(cpf.length === 0) {
    alert("CPF inválido, digite corretamente!");
    return false;
    }
    return true;
}

function validarEmail(){
var email = document.forms[0].email.value;
if(email.length === 0) {
    alert("E-mail inválido, digite corretamente!");
    return false;
    }
    return true;
}

function validarTelefone(){
var telefone = document.forms[0].telefone.value;
if(telefone.length === 0) {
    alert("Telefone inválido, digite corretamente!");
    return false;
    }
    return true;
}

function validarNascimento(){
var nascimento = document.forms[0].nascimento.value;
if(nascimento.length === 0) {
    alert("Data de nascimento inválido!");
    return false;
    }
    return true;
}

function validarSalario(){
var salario = document.forms[0].salario.value;
if(salario.length === 0) {
    alert("Salário inválido, digite seu salário!");
    return false;
    }
    return true;
}

function validarSexo(){
var sexo = document.forms[0].sexo.value;
if(sexo.length === 0) {
    alert("Sexo inválido, selecione seu sexo!");
    return false;
    }
    return true;
}

function validarTimes(){
var times = document.forms[0].times.value;
if(times.length === 0) {
    alert("Time de futebol inválido, selecione um time!");
    return false;
    }
    return true;
}

function validarPlanos(){
var planos = document.forms[0].planos.value;
if(planos.length === 0) {
    alert("Plano inválido, selecione um plano!");
    return false;
    }
    return true;
}

function validarPremiere(){
var premiere = document.forms[0].premiere.value;
if(premiere.length === 0) {
    alert("Premiere inválido, selecione um premiere!");
    return false;
    }
    return true;
}

function validarTudo() {
    const formularioValido = validarNome()
                            && validarCPF()
                            && validarEmail()
                            && validarTelefone()
                            && validarNascimento()
                            && validarSalario()
                            && validarSexo()
                            && validarTimes()
                            && validarPlanos()
                            && validarPremiere();

    if (formularioValido) {
        document.getElementById('butassin').disabled = false;
    }
}

var contador = 1;

setInterval(function() {
    document.getElementById('tempo').innerText = contador;
    contador++;
}, 1000);

function verficarSenhaDoUsuario() {
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    if (login === 'Usuario' && senha === 'Abc$123') {
        alert('Parabéns! Assinatura Realizada');
    } else {
        alert('Usuário ou Senha Incorreto');
    }
}