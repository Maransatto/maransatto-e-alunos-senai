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

// $("#form").validate({
//     submitHandler: function (form) {
//         // some other code
//         // maybe disabling submit button
//         // then:
//         $(form).submit();
//     }
// });

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

function validarCPF(){
    var soma = 0;
    var resto;
    var inputCPF = document.getElementById('cpf').value.replaceAll(".","").replaceAll("-","");

    if(inputCPF == '00000000000') return false;
    for(i=1; i<=9; i++) soma = soma + parseInt(inputCPF.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if((resto == 10) || (resto == 11)) resto = 0;
    if(resto != parseInt(inputCPF.substring(9, 10))) return false;

    soma = 0;
    for(i = 1; i <= 10; i++) soma = soma + parseInt(inputCPF.substring(i-1, i))*(12-i);
    resto = (soma * 10) % 11;

    if((resto == 10) || (resto == 11)) resto = 0;
    if(resto != parseInt(inputCPF.substring(10, 11))) return false;
    return true;
}

function confereCPF(){
    const valido = validarCPF();
    if(!valido) {
        alert('CPF invalido');
        document.form.nome.focus();
    }
    return valido;
}
   
function validarEmail(){
  if( document.forms[0].email.value=="" 
     || document.forms[0].email.value.indexOf('@')==-1 )
      {
         alert( "Por favor, informe um E-MAIL válido!" );
         return false;
      }
  return true;
}
var contador = 1;
setInterval(() => {
    document.getElementById('tempo').innerText = contador;
    contador++;
}, 1000);

function verificarSenhaDoUsuario(){
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    if (login === 'Usuario' && senha === 'Abc$123'){
        alert('Parabens! Assinatura Realizada');
    } else {
        alert('usuario incorreto');
    }
   
}

function validarData(){
    var data = document.getElementById("nascimento");
    if(data.value == ''){
        alert("Data não preenchida!");
        return false;
    }
    return true;
}

function validarRadio(nameDoElemento){
    var valido = false;

    document.getElementsByName(nameDoElemento).forEach (opcao => {
        if (opcao.checked) {
            valido = true;
        }
    });
    if (!valido) {
        alert ('Selecione uma opção do ' + nameDoElemento);
        return false;
    }
    return true;
}

function validarTudo(){

    const formularioValido = validarNome() && confereCPF() && validarEmail() && validarData() && validarRadio('sexo') && validarRadio('planos') && validarRadio('premiere');
    if (formularioValido){
        document.getElementById('butassin').disabled=false;
    }
    return formularioValido;
}