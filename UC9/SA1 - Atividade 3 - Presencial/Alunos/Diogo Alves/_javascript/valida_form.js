//função para totalizar valor de assinatura mensal
function totaliza() {
    total = 0.00;
    //plano mensal
    if (document.form.planos[0].checked)
        total = total + 85.00;
    //plano quadrimestral
    if (document.form.planos[1].checked)
        total = total + 300.00 / 4;
    //plano anual
    if (document.form.planos[2].checked)
        total = total + 600.00 / 12;
    //Premiere econômico
    if (document.form.premiere[0].checked)
        total = total + 60.00;
    //Premiere controle
    if (document.form.premiere[1].checked)
        total = total + 80.00;
    document.form.total.value = total.toFixed(2);
}

function validarNome() {
    try {
        let value = document.getElementById("nome").value;
        let re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
        if (!re.test(value)) {
            // campo inválido, retorna false para o formulário não ser submetido
            alert('Somente caracteres alfabéticos Inválido');
            document.form.nome.focus();
            return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}


function validarCPF() {
    number = document.getElementById('cpf').value.replaceAll(".", "").replaceAll("-", "")
    var sum;
    var rest;
    sum = 0;
    if (number == "00000000000") return false;

    for (i = 1; i <= 9; i++) sum = sum + parseInt(number.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) rest = 0;
    if (rest != parseInt(number.substring(9, 10))) return false;

    sum = 0;
    for (i = 1; i <= 10; i++) sum = sum + parseInt(number.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) rest = 0;
    if (rest != parseInt(number.substring(10, 11))) return false;
    return true;
}

function confereCPF() {

    const valido = validarCPF();
    if (!valido) {
        alert('CPF inválido');
        document.form.cpf.focus();
    }
    return valido;
}


function validaEmail() {
    email = document.getElementById('email').value
    var check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.search(check) == -1) {
        alert('e-mail inválido');
        return false;
    }
    return true;
}

var contador = 1
setInterval(function () {
    document.getElementById('tempo').innerText = contador;
    contador++;
}, 1000);

function verificaPlano() {
    var verifica = document.getElementsByName("planos");
    var x;
    x = 0;
    for (var i = 0; i < verifica.length; i++) {
        if (verifica[i].checked == true) {
            x = x + 1
        }
    }
    if (x == "0") {
        alert('Selecione ao menos um plano');
        return false;
    }
    return true;
}
function verificaPacote() {
    var verifica = document.getElementsByName("premiere");
    var x;
    x = 0;
    for (var i = 0; i < verifica.length; i++) {
        if (verifica[i].checked == true) {
            x = x + 1
        }
    }
    if (x == "0") {
        alert('Selecione ao menos um pacote Premiere');
        return false;
    }
    return true;
}

function verificaTime() {
    var time = document.getElementById("time").value;
    if (time.length === 0) {
        alert('Selecione ao menos um time');
        return false;
    }
    return true;
}

function SalarioVazio() {
    var salario = document.getElementById("salario").value;
    if ((salario <= "0,00") || (salario.length === 0)) {
        alert('Informa seu Salário');
        return false;
    }
    return true;
}

function CelularVazio() {
    var cel = document.getElementById("cel").value;
    if (cel.length === 0) {
        alert('Informa seu celular');
        return false;
    }
    return true;
}

function nascimentoVazio() {
    var nascimento = document.getElementById("nascimento").value;
    if (nascimento.length === 0) {
        alert('Informa sua data de nascimento');
        return false;
    }
    return true;
}

function validarTudo() {

    Const = formularioValido =
        validarNome() &&
        confereCPF() &&
        validaEmail() &&
        CelularVazio() &&
        nascimentoVazio() &&
        SalarioVazio() &&
        verificaTime() &&
        verificaPlano() &&
        verificaPacote();

    if (formularioValido) {
        document.getElementById('butassin').disabled = false;
    }
}
function validaLogon() {
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    if (login == 'Usuario' && senha == 'Abc$123') {
        alert('Assinatura Realizada com sucesso');
    } else {
        alert('Usuário ou senha inválida');
    }
}