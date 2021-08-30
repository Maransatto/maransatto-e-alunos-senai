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


function validar_cel() {

    let value = document.getElementById("cel").value;
    if (value == "" || value == null) {
        return false;
    }
    return true;
}

function validar_nome() {

    let value = document.getElementById("nome").value;
    if (value == "" || value == null) {
        return false;
    }
    return true;
}

function validar_nascimento() {

    let value = document.getElementById("nascimento").value;
    if (value == "" || value == null) {
        return false;
    }
    return true;
}

function validar_cpf() {

    let value = document.getElementById("cpf").value;
    let re = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;

    if (!re.test(value)) {
        alert('CPF Inválido');
        return false;
    }
    return true;
}

function validar_email() {

    let value = document.getElementById("email").value;
    if (value == "" || value == null) {
        return false;
    }
    return true;
}

function validar_salario() {

    let value = document.getElementById("salario").value;
    let re = /^\d+$/;

    if (!re.test(value)) {
     
      alert('Somente numeros ');
      return false;
    }
    return true;
}


function validar_sexo() {


    let value = document.querySelector('input[name="sexo"]:checked').value;
    if (value == "" || value == null) {
        return false;
    }
    return true;
}



function validar_times() {

    var select = document.getElementById('times');
    var value = select.options[select.selectedIndex].value;
    console.log(value); // pt

    if (value == "" || value == null) {

        return false;
    }
    return true;
}

function validar_planos() {

    let value = document.querySelector('input[name="planos"]:checked').value;
    if (value == "" || value == null) {
        return false;
    }
    return true;
}
function validar_login() {

    let user = '{"id": "Usuario"}';
    let v_user = JSON.parse(user);
    let value = document.getElementById("login").value;

    if (v_user.id == value)
        return true;
    else {
        alert("Usuário incorreto");

        return false;
    }
}

function validar_senha() {




    let pass = '{"passwd": "Abc$123"}';
    let v_pass = JSON.parse(pass);
    let value = document.getElementById("senha").value;

    if (v_pass.passwd == value)
        return true;
    else {
        alert("Senha incorreta");

        return false;
    }


}

function validar_premiere() {

    let value = document.querySelector('input[name="premiere"]:checked').value;
    if (value == "" || value == null) {
        return false;
    }
    return true;
}



function validar_tudo() {

    if (validar_nome() && validar_salario() && validar_times() && validar_senha()
        && validar_cpf() && validar_nascimento() && validar_email() && validar_login()
        && validar_cel() && validar_premiere() && validar_sexo() && validar_planos()) {

        document.getElementById("butassin").disabled = false;
        alert("formu ok");

    } else {
        alert("Formul invalido");
    }
}

setInterval(contartempo, 1000);

var contador=1;

function contartempo(){ 
	document.getElementById("tempo").innerHTML = contador;
	contador++;

}