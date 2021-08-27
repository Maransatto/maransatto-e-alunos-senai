function idadeMaior(){
    window.location.assign ("formulario.html");
}

function idadeMenor(){
         alert("Somente cliente maiores de 18 anos podem participar das promoções");
}

function index(){
    window.location.assign ("index.html");
}  
    
function validarFormulario(){

    var name     = document.getElementById('name').value;
    var nickname = document.getElementById('nickname').value;
    var cpf      = document.getElementById('cpf').value;
    var day      = document.getElementById('day').value;
    var month    = document.getElementById('month').value;
    var year     = document.getElementById('year').value;
    var team_id  = document.getElementById('team_id');

    //CHECKBOX
    var sport_1 = document.getElementById('sport_1').checked;
    var sport_2 = document.getElementById('sport_2').checked;
    var sport_3 = document.getElementById('sport_3').checked;
    var sport_4 = document.getElementById('sport_4').checked;
    var validaSport = sport_1+sport_2+sport_3+sport_4;

    var formValido = true;
    var mensagens  = [];
    var today = new Date();
    var ano_atual  = today.getFullYear();
    console.log(ano_atual);
    var team_id = team_id.options[team_id.selectedIndex].id;

    if(name.length<10){
        mensagens.push('Nome invalido, menor que 10 caracteres');
        formValido = false;
    }
    if(name.length>80){
        mensagens.push('Nome invalido, maior que 80 caracteres');
        formValido = false;
    }
    if(nickname.length<2){
        mensagens.push('Apelido invalido, menor que 2 caracteres');
        formValido = false;
    }
    if(nickname.length>20){
        mensagens.push('Apelido invalido, maior que 20 caracteres');
        formValido = false;
    }
    if(cpf.length<14){
        mensagens.push('Cpf invalido, menor que 14 caracteres');
        formValido = false;
    }
    if(day.length>2){
        mensagens.push('Dia invalido, maior que 2 caracteres');
        formValido = false;
    }
    if(month.length>2){
        mensagens.push('Mês invalido, maior que 2 caracteres');
        formValido = false;
    }
    if(year.length>4){
        mensagens.push('Ano invalido, maior que 4 caracteres');
        formValido = false;
    }
    if(day<1 | day>31){
        mensagens.push('Dia invalido. Não está entre 1 à 31');
        formValido = false;  
    }
    if(month<1 | month>12){
        mensagens.push('Mês invalido. Não está entre 1 à 12');
        formValido = false;
    }
    if(year<1900 | year>ano_atual){
        mensagens.push('Ano invalido. Não está entre 1900 à ano atual');
        formValido = false;
    }
    if(team_id.length ==""){
        mensagens.push('Selecione um time');
        formValido = false; 
    }
    if(validaSport ==0) {
        mensagens.push('Selecione pelo menos 1 esporte');
        formValido = false; 
    }
     //PUSH EM TELA 
    if(formValido === false) {
        alert(mensagens.join('\n'));
    }
    
    var meuJson = imprimeJson();

    document.getElementById('resultadoJson').innerHTML = JSON.stringify(meuJson); 


    // return false;
    return formValido;

    

}



function mascaraCpf(cpf){
   
    var v = cpf.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       cpf.value = v.substring(0, v.length-1);
       return;
    }
    
    cpf.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) cpf.value += ".";
    if (v.length == 11) cpf.value += "-";
 
 }

function mascaraDay(day){
   
    var v = day.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       day.value = v.substring(0, v.length-1);
       return;
    }
    day.setAttribute("maxlength", "2");
 }

 function mascaraMonth(month){

    var v = month.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       month.value = v.substring(0, v.length-1);
       return;
    }
    month.setAttribute("maxlength", "2");
 }

 function mascaraYear(year){

    var v = year.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       year.value = v.substring(0, v.length-1);
       return;
    }
    year.setAttribute("maxlength", "4");
 }

 function imprimeJson(){

    var name     = document.getElementById('name').value;
    var nickname = document.getElementById('nickname').value;
    var cpf      = document.getElementById('cpf').value;
    var day      = document.getElementById('day').value;
    var month    = document.getElementById('month').value;
    var year     = document.getElementById('year').value;
    var team     = document.getElementById('team_id').value;
    var sport_1  = document.getElementById('sport_1').checked;
    var sport_2  = document.getElementById('sport_2').checked;
    var sport_3  = document.getElementById('sport_3').checked;
    var sport_4  = document.getElementById('sport_4').checked;

    if(sport_1===true){
        var sport_1  = document.getElementById('sport_1').value;
    }else{
        sport_1 = "Vazio"
    }
    if(sport_2===true){
        var sport_2  = document.getElementById('sport_2').value;
    }else{
        sport_2 = "Vazio"
    }
    if(sport_3===true){
        var sport_3  = document.getElementById('sport_3').value;
    }else{
        sport_3 = "Vazio"
    }
    if(sport_4===true){
        var sport_4  = document.getElementById('sport_4').value;
    }else{
        sport_4 = "Vazio"
    }


    var array_json = {};


    
    array_json = {
        "nome" : name,
        "Apelido" : nickname,
        "CPF": cpf,
        "Dia": day,
        "Mês": month,
        "Ano": year,
        "Time do Coração": team,
        "Esporte 1": sport_1,
        "Esporte 2": sport_2,
        "Esporte 3": sport_3,
        "Esporte 4": sport_4,
    }

    return array_json;
    

 }


 

