function validar(){
    var usuario = document.getElementById("usuario").value;
    var apelido = document.getElementById("apelido").value;
    var usuario_correto = /^[A-Za-z]+$/;
    var sport = document.getElementById("sport").value;
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var cpf = document.getElementById("cpf").value;
    var valido = true;

    if(usuario.length < 2 || usuario.length > 16) {
        document.getElementById("msg-usuario").innerHTML="* O nome de usúario precisa ter entre 2 a 16 caracteres";
        valido = false;
    }else if (usuario.match(usuario_correto)) {
        document.getElementById("msg-usuario").innerHTML="* O nome de usúario só pode ter letras [A-Z/a-z]"; 
        valido = false;
    }else{
        document.getElementById("msg-usuario").innerHTML="";
    }

    if(apelido=="") {
        document.getElementById("msg-apelido").innerHTML="* O apelido é obrigatório";
        valido = false;
    }else{
        document.getElementById("msg-apelido").innerHTML="";
    }

    if(day=="") {
        document.getElementById("msg-day").innerHTML="* O dia é obrigatório";
        valido = false;
    }else{
        document.getElementById("msg-day").innerHTML="";
    }
    
    if(month=="") {
        document.getElementById("msg-month").innerHTML="* O mês é obrigatório";
        valido = false;
    }else{
        document.getElementById("msg-month").innerHTML="";
    }
    
    if(year=="") {
        document.getElementById("msg-year").innerHTML="* O ano é obrigatório";
        valido = false;
    }else{
        document.getElementById("msg-year").innerHTML="";
    }

    if(cpf=="") {
        document.getElementById("msg-cpf").innerHTML="* O CPF é obrigatório";
        valido = false;
    }else{
        document.getElementById("msg-cpf").innerHTML="";
    }

    if(sport=="") {
        document.getElementById("msg-sport").innerHTML="* Os esportes de interesse é obrigatório";
        valido = false;
    }else{
        document.getElementById("msg-sport").innerHTML="";
    }
    
    return valido;
}