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

function maskCpf() {
    const cpf = document.getElementById("cpf");
     
      cpf.value = cpf.value
        .replace(/\D+/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2');
}
    
function maskCelular() {
    const cel= document.getElementById("cel");
      cel.value = cel.value
        .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3');
}

function validarCpf() {
  var cpf = document.getElementById('cpf').value;
  if (cpf.length < 14) {
      alert('Seu cpf foi invalidado');
      document.getElementById('cpf').focus();
      return false;
  }
  return true;
}

function validarNome() {
  var nome = document.getElementById('nome').value;
  if (nome.length < 10) {
      alert('Seu nome foi invalidado');
      document.getElementById('nome').focus();
      return false;
  }
  return true;
}

function validarTime() {
  let time_escolhido = 0;
  var times = document.getElementsByTagName('option');
  
  for (var i = 0; i < times.length; ++i) {
    if (times[i].selected) {
      time_escolhido = times[i].id;
    }
  }
  
  if (time_escolhido == 0) {
    alert('Selecione pelo menos um time');
    return false;
  }
  return true;
}
function validarEmail() {
  var email = document.getElementById('email');
  if (email.value == "" || email.value == null) {
      alert('Seu email foi invalidado');
      document.getElementById('email').focus();
      return false;
  }
  return true;
}

function validarCelular() {
  var celular = document.getElementById('cel').value;
  if (celular.length < 15) {
      alert('Seu número foi invalidado');
      document.getElementById('cel').focus();
      return false;
  }
  return true;
}

function validarData() {
  var data = document.getElementById("nascimento");
  if (data.value == "" || data.value == null ){
      alert("Escolha uma data");
      document.getElementById('nascimento').focus;
      return false;
  }
  return true;
}

function validarSalario() {
  var salario = document.getElementById('salario');
  if (salario.value == "" || salario.value == null) {
      alert('Insira o salário');
      document.getElementById('salario').focus;
      return false;
  }
  return true;
}



function verificarLogin() {
  var loginJson = '{"usuario":"Usuario","senha":"Abc$123"}';
  var login = JSON.parse(loginJson);
  let user = document.getElementById('login');
  let senha = document.getElementById('senha');
  if (login.usuario === user.value && login.senha === senha.value) {
    return true;
  }
 
  alert('Usuário ou senha incorreto.');
  return false;
}
 
function validar() {
  if (validarNome() &&
      validarCpf() &&
      validarEmail() &&
      validarCelular() &&
      validarData() &&
      validarSalario() &&
      validarTime() &&
      verificarLogin()) {
    var btn = document.getElementById('butassin');
    btn.disabled = false;
  }
}

let segundo = 0;
let minuto = 0;
let hora = 0;
 
setInterval(timer, 1000);
 
function timer() {
  segundo++;
  if (segundo == 60) {
    minuto++;
    segundo = 0;
  }
  if (minuto == 60) {
    hora++;
    minuto = 0;
  }
 
  document.getElementById("hora").innerText = hora > 10 ? hora : `0${hora}`;
  document.getElementById("minuto").innerText =
    minuto > 10 ? minuto : `0${minuto}`;
  document.getElementById("segundo").innerText =
    segundo > 10 ? segundo : `0${segundo}`;
}
 
 
