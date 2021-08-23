
function validateForm() {
    var name = document.forms[0].name.value;
    // var name = document.getElementById('name').value;

    if (name.length < 10) {
        alert('Nome do usuário tem que possuir mais que 10 caracteres');
        return false;
    }
    return true;
}



// function validateForm() {

//     var formularioValido = true;
//     var mensagens = [];

//     // NOME
//     var name = document.forms[0].name.value;

//     if (name.length < 10) {
//         // alert('Nome muito pequeno, o mínimo é 10 caracteres');
//         mensagens.push('Nome muito pequeno, o mínimo é 10 caracteres')
//         formularioValido = false;
//     }

//     if (name.length > 80) {
//         // alert('Nome muito grande, o máximo é 80 caracteres');
//         mensagens.push('Nome muito grande, o máximo é 80 caracteres')
//         formularioValido = false;
//     }

//     if (!formularioValido) {
//         var mensagemFinal = 'Formulário Inválido. \n';
//         mensagens.forEach(function(mensagem) {
//             mensagemFinal = '\n' + mensagemFinal + mensagem + '\n';
//         });
//         alert(mensagemFinal);
//         return false;
//     }

//     const meuJson = montarJson();
//     // console.log(meuJson);

//     document.getElementById('resultadoJson').innerHTML = JSON.stringify(meuJson);

//     getSports();

//     return false;
// }

function montarJson() {

    const name      = document.getElementById('name').value;
    const nickname  = document.getElementById('nickname').value;
    const day       = document.getElementById('day').value;
    const month     = document.getElementById('month').value;
    const year      = document.getElementById('year').value;

    const sports    = document.getElementsByName('sport').value;

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
    const sportChecks = document.getElementsByName('sport');
    const sports = []

    sportChecks.forEach(sport => {
        if (sport.checked) {
            sports.push(sport.value);
        }
    })

    console.log(sports);
}

// function showJson() {
//     var json = [{
//         "name": "Deep purple",
//         "title1": "Machine Head",
//         "title2": "Stormbringer"
//     },{
//         "name": "Joe Satriani",
//         "title1": "Flying in a Blue Dream",
//         "title2": "The Extremist",
//         "title3": "Shockwave Supernova"
//     },{
//         "name": "Snoop Dogg",
//         "title1": "The Doggfather",
//         "title2": "Snoopified"
//     }];

//     // var obj = JSON.parse(json);

//     var content = json.map(function (obj) {
//         var con = "<h3>" + obj.name + "</h3>";
//         con += "<ul>";
//         con += Object.keys(obj).map(function (key) {
//             return key.startsWith("title") ? "<li>" + obj[key] + "</li>" : "";
//         }).join('');
//         con += "</ul>";
//         return con;
//     }).join('');

//     alert(content);

//     document.getElementById('resultadoJson').innerHTML = content;
// }