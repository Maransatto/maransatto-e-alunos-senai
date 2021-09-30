function ValidarName(){
    const name = document.getElementById("name").value;
    if(name.length < 10 || name.length > 80)
    {
        alert("Nome deve ter entre 10 e 80 caracteres");
        document.getElementById("name").focus();
        return false;
    }

    return true;
}

function ValidarNickname(){
    const nickname = document.getElementById("nickname").value;
    if(nickname.length < 2 || nickname.length > 20)
    {
        alert("Apelido deve ter entre 2 e 20 caracteres");
        document.getElementById("nickname").focus();
        return false;
    }

    return true;
}

function ValidarDay(){
    var day = parseInt(document.getElementById("day").value);
    if(day < 1 || day > 31 || isNaN(day)){
        alert("Informe um dia válido");
        document.getElementById("day").focus();
        return false;
    }
    return true;
}

function ValidarMonth(){
    var month = parseInt(document.getElementById("month").value);
    if(month < 1 || month > 12 || isNaN(month)){
        alert("Informe um mes válido");
        document.getElementById("month").focus();
        return false;
    }
    return true;
}

function ValidarYear(){
        var yearAtual = new Date().getFullYear();

    var year = parseInt(document.getElementById("year").value);
    if(year < 1900 || year > yearAtual || isNaN(year)){
        alert("Informe um ano válido");
        document.getElementById("year").focus();
        return false;
    }
    return true;
}

function ValidarCpf(){
    const cpf = document.getElementById("cpf").value;
    if(cpf.length < 14)
    {
        alert("O CPF deve conter no minimo 14 caracteres");
        document.getElementById("cpf").focus();
        return false;
    }

    return true;
}


function maskCpf(input) {
    input.value = input.value
      .replace(/\D+/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2");
  }

function ValidarTeam(){
    let teamEscolhido = 0;
    const team = document.getElementsByTagName("option");
    
    for(let i = 0; i < team.length; i++)
    {
        if(team[i].selected){
            teamEscolhido = team[i].id;
        }
    }

    if(teamEscolhido == 0){
        alert("Seleciona um time.")
        return false;
    }

    return true;
}

function ValidarSport(){
    const sport = document.getElementsByName("sport");
    for (let i = 0; i < sport.length; i++){
        if(sport[i].checked){
            return true;
        }
    }

    alert("Selecione um esporte, pelo menos.");
    return false;
}

function ValidarTudo(){
    if(
        ValidarName() &&
        ValidarNickname() &&
        ValidarDay() &&
        ValidarMonth() &&
        ValidarYear() &&
        ValidarCpf() &&
        ValidarTeam() &&
        ValidarSport()
    ) {
        alert("Formulário Válido!!!");
        return true;
    } else {
        alert("Formulário Inválido")
        return false;
    }
}

function GerarJson(){
    var obj_form = {
        name: '',
        nickname:'',
        cpf: '',
        team_id: 0,
        sports: [],
    };

    var el_name = document.getElementById('name');
    if (el_name.value == '') return null;
    obj_form.name = el_name.value;
  
    var el_nickname = document.getElementById('nickname');
    obj_form.nickname = el_nickname.value;
  
    var el_team = document.getElementById('team_id');
    obj_form.team_id = el_team.value;
  
    var el_cpf = document.getElementById('cpf');
    obj_form.cpf = el_cpf.value;

    var el_sport1 = document.getElementById('sport1');
    if (el_sport1.checked == true) obj_form.sports.push('sport1');
  
    var el_sport2 = document.getElementById('sport2');
    if (el_sport2.checked == true) obj_form.sports.push('sport2');
  
    var el_sport3 = document.getElementById('sport3');
    if (el_sport3.checked == true) obj_form.sports.push('sport3');
  
    var el_sport4 = document.getElementById('sport4');
    if (el_sport4.checked == true) obj_form.sports.push('sport4');
  
    var el_sport5 = document.getElementById('sport5');
    if (el_sport5.checked == true) obj_form.sports.push('sport5');
  
    var el_sport6 = document.getElementById('sport6');
    if (el_sport6.checked == true) obj_form.sports.push('sport6');
  
    if (obj_form.sports.lenght == 0) return null;
  
    console.log(obj_form);
  
    var json = JSON.stringify(obj_form);
    console.log(json);
    document.write('<h1>Dados em Json</h1>');
    document.write(json);
  
    return json;




}