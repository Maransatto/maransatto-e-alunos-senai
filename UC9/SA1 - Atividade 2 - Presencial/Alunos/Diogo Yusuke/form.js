function validateForms() {

    var name = document.getElementById('name').value;
    var nickname = document.getElementById('nickname').value;
    var cpf = document.getElementById('cpf').value;
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    

    var formulariovalido = true

    if (name.length < 10 || name.length > 80) {
        alert('Nome deve ser 1 a 20 caracteres')
        formulariovalido = false;
    }

    if (nickname.length <2 || nickname.length > 20) {
        alert('Apelido deve ser 2 a 20 caracteres')
        formulariovalido = false;
    }

    if (day.length > 2) {
        alert('máximo 2 números')
        formulariovalido = false;
    }

    if (day <1 || day >31){
        alert('O dia deve estar entre 1 a 31')
        formulariovalido = false
    }

    if (month.length > 2) {
        alert('máximo 2 números')
        formulariovalido = false;
    }

    if (month <1 || month >12){
        alert('O mês deve estar entre 1 a 12')
        formulariovalido = false
    }

    if (year.length > 4) {
        alert('máximo 4 números')
        formulariovalido = false;
    }

    if (year <1900 || year >2021){
        alert('O ano deve estar entre 1900 a 2021')
        formulariovalido = false
    }

    if (cpf.length > 14) {
        alert('Apelido muito grande, máximo 14 caracteres')
        formulariovalido = false;
    }

   
    if (!formulariovalido) {
        alert('Formulário inválido');
        return false;
    }
    return true;





   
}




