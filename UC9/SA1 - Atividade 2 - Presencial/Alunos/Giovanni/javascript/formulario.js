function validar() {

    var valueEsportes;

    var form = true;

    var nome = document.forms[0].nome.value;
    var apelido = document.forms[0].apelido.value;
    var dia = document.forms[0].dia.value;
    var mes = document.forms[0].mes.value;
    var ano = document.forms[0].ano.value;
    var cpf = document.forms[0].cpf.value;

        if(nome.length < 10) {
            alert("Nome curto, tamanho mínimo 10 caracteres");
            form = false;
        }

        if (nome.length > 20) {
            alert("Nome longo, tamanho máximo 20 caracteres");
            form = false;
        }

        if (apelido.length < 10) {
            alert("Apelido curto, tamanho mínimo 10 caracteres");
            form = false;
        }

        if (apelido.length > 20) {
            alert("Apelido longo, tamanho máximo 20 caracteres");
            form = false;
        }

        if(dia < 1  || dia > 31){   
            alert("Dia de nascimento inválido");
            form = false;
        }

        if(mes < 1 ||  mes > 12){
            alert("Mês de nascimento inválido");
            form = false;
        }

        if(ano < 1900 || ano> 2021){
          alert("Ano de nascimento inválido");
            form = false;
      }

      if(cpf.length != 11){
          alert("CPF inválido");
          form = false;
      }

      if (valueEsportes.length == 0) {
          alert("Escolha seus esportes de interesse");
          form = false;
      }

    const checkboxes = document.querySelectorAll(`input[nome="esporte"]:checked`);
    valueEsportes = [];
    checkboxes.forEach((checkbox) => {
        valueEsportes.push(checkbox.id);
    });
}