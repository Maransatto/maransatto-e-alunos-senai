function validateForm() {

    var formularioValido = true
    var mensagens = [];

    if (name.lenth < 10) {
        mensagens.push("Nome muito Pequeno, min 10 caract.")
        formularioValido = false
    }

    if (name.lench > 80) {
        mensagens.push("Nome muito Grande, max 80 caract.")
        formularioValido = false
    }

    if (!formularioValido) {
        var mensagemFinal = "Formulário Inválido. \n'";
        mensagemFinal = '\n' + mensagemFinal + mensagens + '\n'
    }

     const meuJson = montarJson();

     document.getElementById('resultadoJson').innerHTML = JSON.stringify(meuJson);

     getSports();

    return false;

}

function montarJson() {

    const name      = document.getElementById('name').value;
    const nickname  = document.getElementById('nickname').value;
    const day       = document.getElementById('day').value;
    const month     = document.getElementById('month').value;
    const year      = document.getElementById('year').value;
    const sports    = document.getElementsByName('sports').value;

    var sextaFeira13 = {
        "nome" : name,
        "apelido" : nickname,
        "day" : day,
        "month" : month,
        "year" : year
    }

    return sextaFeira13;
}

function getSports() {
    const sportChecks = document.getElementsByName('sports');
    const sports = []

    sportChecks.forEach(sport => {
        sports.push(sport.id);
    
    })
    
    console.log(sports)
}