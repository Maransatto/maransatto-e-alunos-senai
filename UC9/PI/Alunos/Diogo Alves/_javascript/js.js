function enviarFormulario() {
  valido = true;

  const name = document.getElementById("name").Value;

  if (!validarNome(name, false)) {
    document.getElementById("nome_obrigatorio").hidden = false;
    valido = false;
  }
  return valido;
}

function validarNome(nome, showAlert = true) {
  try {
    let Value = nome ?? document.getElementById("name").value;
    let re =
      /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if (!re.test(value)) {
      if (showAlert) {
        alert("nome Invalido");
      }
      return false;
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function pesquisacep(valor) {
  let cep = valor ?? document.getElementById("cep").value;
  //Nova variável "cep" somente com dígitos.
  var cep = cep.replace(/\D/g, "");

  //Verifica se campo cep possui valor informado.
  if (cep != "") {
    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {
      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById("logradouro").value = "...";
      document.getElementById("bairro").value = "...";
      document.getElementById("cidade").value = "...";
      document.getElementById("estado").value = "...";
      //document.getElementById('ibge').value = "...";
      // cria um elemento javascript
      var script = document.createElement("script");
      // sincroniza com o caliback
      script.src =
        "https://viacep.com.br/ws/" + cep + "/json/?callback=meu_callback";

      //Consulta o webservice viacep.com.br/
      $.getJSON(
        "https://viacep.com.br/ws/" + cep + "/json/?callback=?",
        function (dados) {
          if (!("erro" in dados)) {
            //Atualiza os campos com os valores da consulta.
            $("#logradouro").val(dados.logradouro);
            $("#bairro").val(dados.bairro);
            $("#cidade").val(dados.localidade);
            $("#estado").val(dados.uf);
            //$("#ibge").val(dados.ibge);
          } //end if.
          else {
            //CEP pesquisado não foi encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
          }
        }
      );
    } //end if.
    else {
      //cep é inválido.
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  } //end if.
  else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
  }
}


function limpa_formulário_cep() {
    console.log('limpa_formulario_cep called');
}

function validarCPF() {
  number = document
    .getElementById("cpf")
    .value.replaceAll(".", "")
    .replaceAll("-", "");
  var sum;
  var rest;
  sum = 0;
  if (number == "00000000000") return false;

  for (i = 1; i <= 9; i++)
    sum = sum + parseInt(number.substring(i - 1, i)) * (11 - i);
  rest = (sum * 10) % 11;

  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(number.substring(9, 10))) return false;

  sum = 0;
  for (i = 1; i <= 10; i++)
    sum = sum + parseInt(number.substring(i - 1, i)) * (12 - i);
  rest = (sum * 10) % 11;

  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(number.substring(10, 11))) return false;
  return true;
}

function confereCPF() {
  const valido = validarCPF();
  if (!valido) {
    alert("CPF inválido");
    document.form.cpf.focus();
  }
  return valido;
}

// valida celular vazio
function telefoneVazio() {
  var tel = document.getElementById("tel").value;
  if (tel.length === 0) {
    alert("Informa seu telefone");
    return false;
  }
  return true;
}
function CelularVazio() {
  var cel = document.getElementById("cel").value;
  if (cel.length === 0) {
    alert("Informa seu celular");
    return false;
  }
  return true;
}

function validarTudo() {
  // se um deles for inválido, retorna false e o form não é submetido
  const formularioValido =
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
    document.getElementById("butassin").disabled = false;
  }
}
function validacadastro() {
  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;

  if (login == "Usuario" && senha == "Abc$123") {
    alert("Parabéns! Cadastro Realizado");
  } else {
    alert("Usuário ou senha inválido");
  }
}
