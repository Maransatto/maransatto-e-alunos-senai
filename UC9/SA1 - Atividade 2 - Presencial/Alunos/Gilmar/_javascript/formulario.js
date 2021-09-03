var bt;
var div;

var form_init = () => {
  bt = document.getElementById("create_form_bt");
  div = document.getElementById("custom_form_div");

  bt.onclick = create_form;
}

var create_form = () => {
  var form = document.getElementById("custom_form");
  if (!form) {
    var form = document.createElement("form");
    form.setAttribute("id", "custom_form");
    div.appendChild(form);
  }
  else {
    while (form.firstChild) {
      form.removeChild(form.firstChild);
    }
  }

  append_br(form);

  append_span(form, "Nome:&nbsp;");
  append_text_input(form, "name", 80, 80);
  append_br(form, 2);

  append_span(form, "Apelido:&nbsp;");
  append_text_input(form, "nickname", 20, 20);
  append_br(form, 2);

  append_span(form, "Data de nascimento:&nbsp;");
  append_text_input(form, "day", 2, 2);
  append_text_input(form, "month", 2, 2);
  append_text_input(form, "year", 4, 4);
  append_br(form, 2);

  append_span(form, "CPF:&nbsp;");
  append_text_input(form, "cpf", 14, 14);
  append_br(form, 2);


  append_span(form, "Time do coração:&nbsp;");
  append_select(form, "team_id", [
    { value: 1, text: "Selecione" },
    { value: 2, text: "Flamengo" },
    { value: 3, text: "Corinthians" },
    { value: 4, text: "Palmeiras" },
  ], 1);
  append_br(form, 2);



  var fs1 = append_fieldset(form, "Esportes de interesse:&nbsp;");

  append_checkbox(fs1, "esporte", "Futebol");
  append_br(fs1);
  append_checkbox(fs1, "esporte", "Volei");
  append_br(fs1);
  append_checkbox(fs1, "esporte", "Bocha");
  append_br(fs1);
  append_checkbox(fs1, "esporte", "Sinuca");
  append_br(fs1);
  append_checkbox(fs1, "esporte", "Caratê");
  append_br(fs1);
  append_checkbox(fs1, "esporte", "Judô");
  append_br(fs1);
  append_checkbox(fs1, "esporte", "Natação");
  append_br(fs1);


}

var bt2;
var div2;

var send_form = () => {
  bt2 = document.getElementById("send_button");
  div2 = document.getElementById("mostrar_json");

  bt2.onclick = verify_form;
}

var verify_form = () => {

  var mensagens = [];


  var obj_form = {
    "name": "",
    "nickname": "",
    "day": "",
    "month": "",
    "year": "",
    "cpf": "",
    "team_id": 0,
    "esportes": [],
  }

  var el_name = document.getElementById("name");
  console.log('Nome:' + el_name.value)
  if (el_name.value.length == "") {
    mensagens.push("Escreva um nome");

  } else if (el_name.value.length < 10) {
    mensagens.push('Nome muito curto, deve ter mais de 10 caracteres');

  } else {
    obj_form.name = el_name.value;

  }


  var el_nickname = document.getElementById("nickname");
  console.log('Apelido:' + el_nickname.value);
  if (el_nickname.value.length == "") {
    mensagens.push('Escreva o apelido');
  } else if (el_nickname.value.length < 2) {
    mensagens.push('Apelido muito curto');
  } else {
    obj_form.nickname = el_nickname.value;

  }



  var el_day = document.getElementById("day");
  console.log('Dia:' + el_day.value);
  if (el_day.value.length == "") {
    mensagens.push('Insira um dia entre 01 e 31');

  } else if (el_day.value < 1 || el_day.value > 31) {
    mensagens.push('Dia deve ser entre 01 e 31');

  } else {
    obj_form.day = el_day.value;

  }



  var el_month = document.getElementById("month");
  console.log('Mês:' + el_month.value);
  if (el_month.value == "") {
    mensagens.push('Insira um mês entre 01 e 12');

  } else if (el_month.value < 1 || el_month.value > 12) {
    mensagens.push('Mês deve ser entre 01 e 12');

  } else {
    obj_form.month = el_month.value;

  }

  var el_year = document.getElementById("year");
  console.log('year:' + el_year.value);
  if (el_year.value == "") {
    mensagens.push('Insira um ano entre 1900 e 2021');

  } else if (el_year.value < 1900 || el_year.value > 2021) {
    mensagens.push('Ano deve ser entre 1900 e 2021');

  } else {
    obj_form.year = el_year.value;

  }


  var el_cpf = document.getElementById("cpf");
  console.log('cpf:' + el_cpf.value);
  if (el_cpf.value == "") {
    mensagens.push('Insira o CPF no formato XXX.XXX.XXX-XX');
  } else if (el_cpf.value.length != 14) {
    mensagens.push('Formato do CPF deve ser XXX.XXX.XXX.XX');

  } else {
    obj_form.cpf = el_cpf.value;

  }


  var el_team_id = document.getElementById("team_id");
  console.log('team_id:' + el_team_id.value);
  if (el_team_id.value == 1) {
    mensagens.push("Escolha um time do coração");
  } else {
    obj_form.team_id = el_team_id.value;

  }

  esportes = [];

  var el_esporte = document.querySelectorAll('input[name="esporte"]:checked');
  el_esporte.forEach((checkbox) => {
    esportes.push(checkbox.value);
    obj_form.esportes = esportes;
  });

  if (esportes.length == 0) {
    mensagens.push("Escolha pelo menos um esporte");
  }


  if (mensagens.length != "") {
    var mensagemFinal = mensagens.join("\n");
    alert(mensagemFinal);
    return false;

  } else {

    console.log(obj_form);

    var json = JSON.stringify(obj_form);
    console.log(json);
    document.write("<h1>Dados em Json</h1>");
    document.write(json);

  }

  alert('Formulário enviado com sucesso');



}


