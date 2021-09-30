function enviarFormulario() {

    var valido = true;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const nascimento = document.getElementById('nascimento').value;
    const celular = document.getElementById('celular').value;
    const cep = document.getElementById('cep').value;
    const numero = document.getElementById('numero').value;

    if (!validarNome(name, false)) {
        document.getElementById('nome_invalido').hidden = false
        valido = false;
    }

    if (!validarEmail(email, false)) {
        document.getElementById('email_invalido').hidden = false
        valido = false;
    }

    if (!validarCPF(cpf, false)) {
        document.getElementById('cpf_invalido').hidden = false
        valido = false;
    }

    if (!validarNascimento(nascimento, false)) {
        document.getElementById('nascimento_invalido').hidden = false
        valido = false;
    }

    if (!validarCelular(celular, false)) {
        document.getElementById('celular_invalido').hidden = false
        valido = false;
    }

    if (!validarCEP(cep, false)) {
        document.getElementById('cep_invalido').hidden = false
        valido = false;
    }

    if (!validarNumero(numero, false)) {
        document.getElementById('numero_invalido').hidden = false
        valido = false;
    }

    return valido;

}

function validarNome(nome, showAlert = true) {
    try {
        let value = nome ?? document.getElementById("name").value;
        let re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
        if (!re.test(value)) {
            if (showAlert) {
                alert('Nome Inválido');
            }
            return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

function validarEmail(email, showAlert = true) {
    try {
        let value = email ?? document.getElementById("email").value;
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (!re.test(value)) {
            if (showAlert) {
                alert('E-mail Inválido');
            }
            return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

function validarCPF(cpf, showAlert = true) {
    try {
        let value = cpf ?? document.getElementById("cpf").value;
        let re = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/;
        if (!re.test(value)) {
            if (showAlert) {
                alert('CPF Inválido');
            }
            return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

function validarNascimento(nascimento, showAlert = true) {
    try {
        let value = nascimento ?? document.getElementById("nascimento").value;
        let re = /^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/;
        if (!re.test(value)) {
            if (showAlert) {
                alert('Data de Nascimento Inválido');
            }
            return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

function validarCelular(celular, showAlert = true) {
    try {
        let value = celular ?? document.getElementById("celular").value;
        let re = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/g;
        if (!re.test(value)) {
            if (showAlert) {
                alert('Celular Inválido');
            }
            return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

function validarCEP(cep, showAlert = true) {
    try {
        let value = cep ?? document.getElementById("cep").value;
        let re = /^\d{5}-\d{3}$/;
        if (!re.test(value)) {
            if (showAlert) {
                alert('CEP Inválido');
            }
            return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

function validarLogradouro(logradouro, showAlert = true) {
    try {
        let value = logradouro ?? document.getElementById("logradouro").value;
        if (!re.test(value)) {
            if (showAlert) {
                alert('Logradouro Inválido');
            }
            return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

function validarNumero(numero, showAlert = true) {
    try {
        let value = numero ?? document.getElementById("numero").value;
        let re = /[0-9]/;
        if (!re.test(value)) {
            if (showAlert) {
                alert('Número Inválido');
            }
            return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

function validarComplemento(complemento, showAlert = true) {
    try {
        let value = complemento ?? document.getElementById("complemento").value;
        if (!re.test(value)) {
            if (showAlert) {
                alert('Complemento Inválido');
            }
            return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

function validarBairro(bairro, showAlert = true) {
    try {
        let value = bairro ?? document.getElementById("bairro").value;
        if (!re.test(value)) {
            if (showAlert) {
                alert('Bairro Inválido');
            }
            return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

         /*
         * Para efeito de demonstração, o JavaScript foi
         * incorporado no arquivo HTML.
         * O ideal é que você faça em um arquivo ".js" separado. Para mais informações
         * visite o endereço https://developer.yahoo.com/performance/rules.html#external
         */
        
        // Registra o evento blur do campo "cep", ou seja, a pesquisa será feita
        // quando o usuário sair do campo "cep"
        $("#cep").blur(function(){
            // Remove tudo o que não é número para fazer a pesquisa
            var cep = this.value.replace(/[^0-9]/, "");
            
            // Validação do CEP; caso o CEP não possua 8 números, então cancela
            // a consulta
            if(cep.length != 8){
                return false;
            }
            
            // A url de pesquisa consiste no endereço do webservice + o cep que
            // o usuário informou + o tipo de retorno desejado (entre "json",
            // "jsonp", "xml", "piped" ou "querty")
            var url = "https://viacep.com.br/ws/"+cep+"/json/";
            
            // Faz a pesquisa do CEP, tratando o retorno com try/catch para que
            // caso ocorra algum erro (o cep pode não existir, por exemplo) a
            // usabilidade não seja afetada, assim o usuário pode continuar//
            // preenchendo os campos normalmente
            $.getJSON(url, function(dadosRetorno){
                try{
                    // Preenche os campos de acordo com o retorno da pesquisa
                    $("#numero").val(dadosRetorno.numero);
                    $("#endereco").val(dadosRetorno.logradouro);
                    $("#bairro").val(dadosRetorno.bairro);
                    $("#cidade").val(dadosRetorno.localidade);
                    $("#complemento").val(dadosRetorno.complemento);
                    $("#uf").val(dadosRetorno.uf);
                }catch(ex){}
            });
        });

function checkInputs(inputs) {
    var filled = true;
            
    inputs.forEach(function(input) {
                
    if(input.value === "") {
    filled = false;
    }
            
});
            
return filled;
            
}
    var inputs = document.querySelectorAll("input");
    var button = document.querySelector("button");
    inputs.forEach(function(input) {
              
      input.addEventListener("keyup", function() {
        if(checkInputs(inputs)) {
            button.disabled = false;
            } else {
            button.disabled = true;
            }
        });
    });