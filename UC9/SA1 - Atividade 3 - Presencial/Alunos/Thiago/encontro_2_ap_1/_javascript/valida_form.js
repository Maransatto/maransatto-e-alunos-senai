var d = new Date();
document.getElementById("datahoje").value = d;



setInterval(contartempo, 1000);


var contador=1;
function contartempo(){ 
	document.getElementById("tempo").innerHTML = contador;
	contador++;
}
  

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

    let value = document.getElementById("nome").value;
    let re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if (!re.test(value)) {
      // campo inválido, retorna false para o formulário não ser submetido
      alert('Somente caracteres alfabéticos Inválido');
      document.form.nome.focus();
      return false;
    }
    return true;
}

function validarEmail(){

    let value = document.getElementById("email").value;
    let re = /^(\s?[^\s,]+@[^\s,]+\.[^\s,]+\s?,)*(\s?[^\s,]+@[^\s,]+\.[^\s,]+)$/;
    if (!re.test(value)) {
      // campo inválido, retorna false para o formulário não ser submetido
      alert('E-mail inválido');
      return false;
    }
    return true;
}

function validarCelular(){

    let value = document.getElementById("cel").value.replaceAll('(','').replaceAll(')','').replaceAll('-','');
    let re = /^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$/;
    if (!re.test(value)) {
      // campo inválido, retorna false para o formulário não ser submetido
      alert('Celular inválido');
      return false;
    }
    return true;
}

function validarCamposObrigatoriosTexto(){

    let nome = document.getElementById("nome");
    let cpf = document.getElementById("cpf");
    let cel = document.getElementById("cel");
    let nascimento = document.getElementById("nascimento");
    let salario = document.getElementById("salario");
    let times = document.getElementsByName("times")[0];
    
    var array_campos = [
        nome,
        cpf,
        cel,
        nascimento,
        salario,
        times
       ]; 
    var contMensagens = 0   

    let mensagens=[];

    let re = /^\s*$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?:[a-zA-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)$/;
    
    array_campos.forEach(array_campos => {

        if (re.test(array_campos.value)) {
            // Caso os campos estejam em branco, retorna o campo em forma de alerta
            mensagens.push('Campo obrigado: '+array_campos.name);

            contMensagens++
            
            return false;
            
          }

             
    });
    if (contMensagens>0) {
        alert(mensagens.join('\n'));
    }

    

    return true;
}

function validarRadioBox(){
    let sexo = document.getElementById("sexo").checked;
    let planos = document.getElementById("planos").checked;
    let premiere = document.getElementById("premiere").checked;
   
    if(sexo === false){ 
        alert('Campo Sexo é obrigatório');
        return false;
    }
    if(planos === false){ 
        alert('Campo planos é obrigatório');
        return false;
    }
    if(premiere === false){ 
        alert('Campo premiere é obrigatório');
        return false;
    }

    return true;
   
}

function validarData(){
    let data = document.getElementById("nascimento").value;
    reg = /[^\d\/\.]/gi;                  // Mascara = dd/mm/aaaa | dd.mm.aaaa
    var valida = data.replace(reg,'');    // aplica mascara e valida só numeros
    if (valida && valida.length == 10) {  // é válida, então ;)
      var ano = data.substr(6),
        mes = data.substr(3,2),
        dia = data.substr(0,2),
        M30 = ['04','06','09','11'],
        v_mes = /(0[1-9])|(1[0-2])/.test(mes),
        v_ano = /(19[1-9]\d)|(20\d\d)|2100/.test(ano),
        rexpr = new RegExp(mes),
        fev29 = ano % 4? 28: 29;

      if (v_mes && v_ano) {
          
        if (mes == '02') return (dia >= 1 && dia <= fev29);
        else if (rexpr.test(M30)) return /((0[1-9])|([1-2]\d)|30)/.test(dia);
        else return /((0[1-9])|([1-2]\d)|3[0-1])/.test(dia);
      }
      alert('Campo aniversário inválido');
      return false;
    }
    return true;                           // se inválida :(
}

function verificarCPF(strCpf){


    var soma;
    var resto;
    soma = 0;
    if (strCpf == "00000000000") {
        return false;
    }
    
    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }
    
    resto = soma % 11;
    
    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    
    if (resto != parseInt(strCpf.substring(9, 10))) {
        return false;
    }
    
    soma = 0;
    
    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }
    resto = soma % 11;
    
    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    
    if (resto != parseInt(strCpf.substring(10, 11))) {
        return false;
    }
    
    return true;
}

function validarCPF(){
    try {
        let cpf = document.getElementById('cpf'). value.replaceAll(".", "").replaceAll("-","");
        const valido = verificarCPF(cpf);

        if(valido===false) {
            alert('CPF Inválido');
            document.form.cpf.focus();
            return false;
        }        
    } catch (error) {
        console.log(error);
        alert('Ocorreu um erro ao validar CPF!')
        return false;
    }
    return true;
}

function validarTudo(){
    

    const formularioValido = validarCamposObrigatoriosTexto() &&
                       validarNome() &&
                       validarCPF() &&
                       validarEmail() &&
                       validarCelular() &&
                       validarData() &&
                       validarRadioBox();
                        
    if (formularioValido){
        document.getElementById('butassin').disabled = false;
    }

}

function validarUsuario(){
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    if(login ==='Usuario' && senha ==='Abc$123'){
        alert('Login efeituado com sucesso');
    }else {
        alert('Usuario ou senha inválido!');
    }
    
}

