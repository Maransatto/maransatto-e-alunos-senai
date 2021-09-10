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

function validar_nome() {

    let value = document.getElementById("nome").value;
    let re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if (value.length == "") {
        alert('Insira seu nome completo');
        document.form.nome.focus();
        return false;

    } else if (!re.test(value)) {
        // campo inválido, retorna false para o formulário não ser submetido
        alert('Somente caracteres alfanuméricos');
        document.form.nome.focus();
        return false;
    }
    return true;
}


function validarCPF(inputCPF) {
    var soma = 0;
    var resto;
    var inputCPF = document.getElementById('cpf').value.replaceAll('.', '').replaceAll('-', '');;


    if (inputCPF == '00000000000') return false;
    for (i = 1; i <= 9; i++) soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(inputCPF.substring(9, 10))) return false;

    soma = 0;
    for (i = 1; i <= 10; i++) soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(inputCPF.substring(10, 11))) return false;
    return true;
}

function validar_cpf() {
    let CPF = document.getElementById('cpf').value.replaceAll('.', '').replaceAll('-', '');;
    const valido = validarCPF(CPF);
    if (CPF == "") {
        alert('Insira seu CPF');
        document.form.cpf.focus();
        return false;

    } else if (!valido) {
        alert('CPF inválido')
        document.form.cpf.focus();
        return false;

    } return true;
}


function validateEmail(email) {
    var email = document.getElementById('email').value;
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validar_email() {
    let email = document.getElementById('email').value;
    const emailValido = validateEmail(email);
    if (email.length == "") {
        alert('Insira um email válido');
        document.form.email.focus();
        return false;

    } else if (!emailValido) {
        alert('Insira email no formato email@email.com.br');
        document.form.email.focus();
        return false;
    }
    return true;
}


function validar_celular() {
    let celular = document.getElementById("cel").value;
    if (celular.length == "") {
        alert('Insira número do celular');
        document.form.cel.focus();
        return false;


    } else if (celular.length != 15) {
        alert('Insira número do celular no formato com código de área');
        document.form.cel.focus();
        return false;
    }
    return true;
}


var isValidDate = function (str) {
    return str == 'dd/mm/yyyy' ||
        (/^\d{2}\/\d{2}\/\d{4}$/.test(str) && new Date(str).getTime());
}


function validar_nascimento() {
    let nascimento = document.getElementById('nascimento').value.replaceAll('.', '').replaceAll('-', '');;
    const valido = isValidDate(nascimento);
    if (nascimento == "") {
        alert('Insira sua data de nascimento');
        document.form.nascimento.focus();
        return false;

    } else if (!valido) {
        alert('Data inválida')
        document.form.nascimento.focus();
        return false;

    } return true;
}



function validar_salario() {
    let salario = document.getElementById("salario").value;
    if (salario.length == "") {
        alert('Insira seu salário');
        document.form.salario.focus();
        return false;
    }
    return true;
}


function validar_sexo() {
    const sexo = document.querySelectorAll('input[name="sexo"]:checked');
    valueSexo = [];
    sexo.forEach((sexo) => {
        valueSexo.push(sexo.id);

    });

    if (valueSexo.length == "") {
        alert('Escolha o sexo');
        return false;
    }
    return true;

}

function validar_time() {
    if (form.times.selectedIndex == 0) {
        alert("Escolha seu time");
        return false;
    } return true;

}


function validar_plano() {
    const planos = document.querySelectorAll('input[name="planos"]:checked');
    valuePlanos = [];
    planos.forEach((planos) => {
        valuePlanos.push(planos.id);

    });

    if (valuePlanos.length == "") {
        alert('Escolha o seu plano');
        return false;
    };
    return true;

}

function validar_premiere() {
    const premiere = document.querySelectorAll('input[name="premiere"]:checked');
    valuePremiere = [];
    premiere.forEach((premiere) => {
        valuePremiere.push(premiere.id);

    });

    if (valuePremiere.length == "") {
        alert('Escolha o premiere');
        return false;
    };
    return true;

}



//valida todos os campos
function validar_tudo() {
    var formularioValido = validar_nome() && validar_cpf() && validar_email() && validar_nascimento() && validar_celular() && validar_salario() && validar_sexo() && validar_time() && validar_plano() && validar_premiere();


    if (formularioValido) {

        document.getElementById('butassin').disabled = false;
        alert('Insira login e senha para assinar');

    }
}



function validar_usuario() {

    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    if (login === "Usuario" && senha === "Abc$123") {
        alert('Login efetuado com sucesso');

    } else {

        alert('Login ou senha inválido');
    }
}

var contador = 1;

setInterval(() => {
    document.getElementById('tempo').innerHTML = contador;
    contador = contador + 1;


}, 1000);

