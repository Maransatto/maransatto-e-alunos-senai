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

function validarObrigatoriedadeDoNome() {
    let value = document.getElementById("nome").value;
    if (!value) {
        alert('O nome é obrigatório, preencher');
        return false;
    }
    return true;
}

function validarNome() {
    try {
        if (!validarObrigatoriedadeDoNome()) {
            return;
        }

        let value = document.getElementById("nome").value;
        let re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
        if (!re.test(value)) {
          // campo inválido, retorna false para o formulário não ser submetido
          alert('Nome inválido, não pode ter número');
          document.form.nome.focus();
          return false;
        }
        return true; 
    } catch (error) {
        console.error(error);
        alert('Ocorreu um erro ao validar o nome');
        return false;
    }
}

function verificarCPF(strCpf) {
    if (!/[0-9]{11}/.test(strCpf)) return false;
    if (strCpf === "00000000000") return false;

    var soma = 0;

    for (var i = 1; i <= 9; i++) {
        soma += parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }

    var resto = soma % 11;

    if (resto === 10 || resto === 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto !== parseInt(strCpf.substring(9, 10))) {
        return false;
    }

    soma = 0;

    for (var i = 1; i <= 10; i++) {
        soma += parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }
    resto = soma % 11;

    if (resto === 10 || resto === 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
 
    if (resto !== parseInt(strCpf.substring(10, 11))) {
        return false;
    }

    return true;
}

function validarCPF() {
    try {
        let cpf = document.getElementById('cpf').value.replaceAll('.', '').replaceAll('-','');
        const valido = verificarCPF(cpf);

        if (!valido) {
            alert('CPF Inválido');
            document.form.cpf.focus();
            return false;
        }

        return true;

    } catch (error) {
        console.error(error);
        alert('Ocorreu um erro ao validar o CPF');
        return false;
    }
}

function validarSexo() {
    var sexoPreenchido = false;

    document.getElementsByName('sexo').forEach(opcao => {
        if (opcao.checked) {
            sexoPreenchido = true;
        }
    });

    if (!sexoPreenchido) {
        alert('Informe o sexo (masculino ou feminino)');
        return false;
    }
    return true;
}

function validarTudo() {

    var formularioValido = validarNome() &&
                           validarCPF() &&
                           validarSexo();

    if (formularioValido) {
        document.getElementById('butassin').disabled = false;
    }
}

function validarUsuario() {
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    if (login === 'Usuario' && senha === 'Abc$123') {
        alert('Login efetuado com sucesso!');
    } else {
        alert('Usuário ou senha inválidos');
    }
}

var contador = 1;

setInterval(() => {
    document.getElementById('tempo').innerHTML = contador;
    contador++;
}, 1000);