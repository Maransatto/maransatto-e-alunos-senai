

let valueSports;

function validateForm() {

    let form = true;

    var name = document.forms[0].name.value;
    let nickname = document.forms[0].nickname.value;
    let day = document.forms[0].day.value;
    let month = document.forms[0].month.value;
    let year = document.forms[0].year.value;
    let cpf = document.forms[0].cpf.value;
    let team_id = document.forms[0].team_id.value;




        //....................NOME........................
        if(name.length < 10) {
            alert("Nome curto, tamanho mínimo 10 caracteres");
            form = false;
        }

        if (name.length > 80) {
            alert("Nome longo, tamanho máximo 80 caracteres");
            form = false;
        }

    //     //....................APELIDO..................
        if (nickname.length < 10) {
            alert("Apelio curto, tamanho mínimo 10 caracteres");
            form = false;
        }

        if (nickname.length > 80) {
            alert("Apelido longo, tamanho máximo 80 caracteres");
            form = false;
        }

    //     //.......................DAY..................
        if( day < 1  || day > 31){   
            alert("Dia inválido");
            form = false;
        }

    // //.......................MES.........................
        if( month < 1 ||  month > 12){
            alert("Mês inválido");
            form = false;
        }

    //     //.......................ANO.........................
        if(year < 1900 || year> 2021){
            alert("Ano inválido");
            form = false;
        }

        //.......................CPF.........................
        if(cpf.length != 14){
            alert("CPF inválido");
            form = false;
        }



    const checkboxes = document.querySelectorAll(`input[name="sport"]:checked`);
    valueSports = [];
    checkboxes.forEach((checkbox) => {
        valueSports.push(checkbox.id);
    });

    if (valueSports.length == 0) {
        alert("Escolha um esporte");
        form = false;
    }

    if(form){
           formatJSON();
    }
 

}


//..........................


function formatJSON() {



    var obj_form = {
        name: "",
        nickname: "",
        day: "",
        month: "",
        year: "",
        cpf: "",
        team_id: "",
        sports: []
    }


    obj_form.name = document.forms[0].name.value;
    obj_form.nickname = document.forms[0].nickname.value;
    obj_form.day = document.forms[0].day.value;
    obj_form.month = document.forms[0].month.value;
    obj_form.year = document.forms[0].year.value;
    obj_form.cpf = document.forms[0].cpf.value;
    obj_form.team_id = document.forms[0].team_id.value;
    obj_form.sports = valueSports;

    console.log(obj_form.sports)

    var json = JSON.stringify(obj_form);
    console.log(json);
    document.write("<h1>Dados em Json</h1>");
    document.write(json);


}


