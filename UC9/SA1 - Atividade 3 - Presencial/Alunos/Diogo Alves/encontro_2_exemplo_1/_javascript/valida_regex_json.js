//Validação com REGEX
function validar_texto() {
  let value = document.getElementById("texto").value;
  let re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
  if (!re.test(value)) {
    // campo inválido, retorna false para o formulário não ser submetido
    alert('Somente caracteres alfabéticos Inválido');
    document.form.texto.focus();
    return false;
  }
  return true;
}
//Validação com REGEX
function validar_numero() {
  let value = document.getElementById("numero").value;
  let re = /^\d+$/;
  if (!re.test(value)) {
    // campo inválido, retorna false para o formulário não ser submetido
    alert('Somente caracteres numéricos Inválido');
    document.form.numero.focus();
    return false;
  }
  return true;
}
//Validação com REGEX
function validar_cpf() {
  let value = document.getElementById("cpf").value;
  let re = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
  if (!re.test(value)) {
    // campo inválido, retorna false para o formulário não ser submetido
    alert('Conteúdo de CPF Inválido');
    document.form.cpf.focus();
    return false;
  }
  return true;
}
//Validação com JSON
//Confere se CPF digitado é igual ao válido do JSON
function confere_cpf()
{
  let cpf_json = '{"cpf1": "123.456.788-90","cpf2":"12345678890"}';
  let v_cpf = JSON.parse(cpf_json);
  if(v_cpf.cpf1 == document.form.cpf.value || v_cpf.cpf2 == document.form.cpf.value)
    return true;
  else
    {
    alert("CPF não confere com JSON!");
    document.form.cpf.focus();
    return false;
    }
}

  //valida todos os campos
  function validar_tudo() {
    // se um deles for inválido, retorna false e o form não é submetido
    return validar_texto() && validar_numero() 
    && validar_cpf() && confere_cpf();
  }
  