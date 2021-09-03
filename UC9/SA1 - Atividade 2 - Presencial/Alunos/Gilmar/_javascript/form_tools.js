/*
           Insere de 1 a n quebras de linha. Recebe dois parâmetros: o primeiro é o elemento pai onde será inserida a quebra de
           linha, e o segundo o número de quebras de linha desejado. Se não informado o segundo parâmetro, será inserida apenas uma
           quebra de linha. Observe a implementação da função:
           
           */
var append_br = (el, n) => {
  if (n == undefined)
    n = 1;
  for (var i = 0; i < n; i++) { var br = document.createElement("br"); el.appendChild(br); }
}

/* append_span Insere um elemento
                  span com um texto interno. Recebe dois parâmetros: o primeiro é o elemento pai onde será inserido o span, e o segundo
                  é o texto a ser inserido dentro dele. Observe a implementação da função: */ 
  var append_span = (el, text) => {
  var span = document.createElement("span");
  span.innerHTML = text;
  el.appendChild(span);
  return span;
}

/*
append_text_input
 
Insere um elemento de texto. Recebe quatro parâmetros: o elemento pai onde será inserido, um identificador, o tamanho
da caixa de texto e o número máximo de caracteres. Veja a implementação da função
 
*/
var append_text_input = (el, id, size, maxlen) => {
  var text_input = document.createElement("input");
  text_input.setAttribute("type", "text");
  text_input.setAttribute("id", id);
  text_input.setAttribute("name", id);
  text_input.setAttribute("size", size);
  text_input.setAttribute("maxlength", maxlen);
  el.appendChild(text_input);
  return text_input;
}

/*
append_select
 
Insere uma caixa de seleção com múltiplas opções. Recebe quatro parâmetros: o elemento pai onde será inserido, um
identificador, um array de opções (cada uma é um objeto com valor e o texto de apresentação) e o valor da opção
default. Observe o código:
*/

var append_select = (el, id, options, default_id) => {
  var select = document.createElement("select");
  select.setAttribute("id", id);
  select.setAttribute("name", id);
  el.appendChild(select);
  options.forEach(item => {
    var option = document.createElement("option");
    option.setAttribute("value", item.value);
    if (default_id == item.value) {
      option.setAttribute("selected", "selected");
    }
    option.innerHTML = item.text;
    select.appendChild(option);
  });
}

/*
append_fieldset
 
Insere um elemento de texto. Recebe dois parâmetros: o elemento pai onde será inserido e um título. Veja o código:
*/
var append_fieldset = (el, title) => {
  var fieldset = document.createElement("fieldset");
  var legend = document.createElement("legend");
  legend.innerHTML = title;
  fieldset.appendChild(legend);
  el.appendChild(fieldset);
  return fieldset;
}


/*
append_checkbox
 
Insere uma caixa de marcação (checkbox). Recebe três parâmetros: o elemento pai onde será inserido, um identificador e
o texto de apresentação. Veja a implementação, e perceba como a função append_span é reaproveitada aqui:
*/

var append_checkbox = (el, id, text) => {
  var check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("id", id);
  check.setAttribute("name", id);
  el.appendChild(check);
  append_span(el, text);
  return check;
}

/*
append_radio
 
Insere um botão de opção (radio button). Recebe três parâmetros: o elemento pai onde será inserido, o nome pelo qual o
conjunto de opções será identificado e um texto de apresentação. Veja que o texto é inserido como um valor e também em
um elemento span para que seja visível. Observe a implementação desta função e como, novamente, a função append_span é
reaproveitada:
*/

var append_radio = (el, name, id, text) => {
  var radio = document.createElement("input");
  radio.setAttribute("type", "radio");
  radio.setAttribute("name", name);
  radio.setAttribute("value", id);
  el.appendChild(radio);
  append_span(el, text);
  return radio;
}

/*
append_textarea
 
Insere um elemento de texto de múltiplas linhas. Recebe quatro parâmetros: o elemento pai onde será inserido, um
identificador, e o número de colunas e de linhas. Veja o código:
*/
var append_textarea = (el, id, cols, rows) => {
  var textarea = document.createElement("textarea");
  textarea.setAttribute("id", id);
  textarea.setAttribute("name", id);
  textarea.setAttribute("cols", cols);
  textarea.setAttribute("rows", rows);
  el.appendChild(textarea);
  return textarea;
}

/*
append_submit
 
Insere um botão de submissão do formulário. Recebe três parâmetros: o elemento pai onde será inserido, o texto do
interior do botão e uma função de validação para ser invocada quando o formulário for submetido.
*/
var append_submit = (el, text, onsubmit_handler) => {
  var submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", text);
  el.appendChild(submit);
  el.submit = onsubmit_handler;
  return submit;
}