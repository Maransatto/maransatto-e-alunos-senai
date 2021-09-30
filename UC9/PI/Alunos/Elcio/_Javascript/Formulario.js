function validarNome(nome, showAlert = true) {
    try {
        let value = nome ?? document.getElementById("nome").value;
        let re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
        if (!re.test(value)) {
            // campo inválido, retorna false para o formulário não ser submetido
            if (showAlert) {
                alert('Somente caracteres alfabéticos válido');
            }

            document.getElementById("nome").focus;
            return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

function validarQtdeCaractereNome(nome, showAlert = true) {
    try {
        let Nome = nome ?? document.getElementById("nome").value;
        // let Nome = document.getElementById("nome").value;

        if (Nome.length <= 11) {
            if (showAlert) {
                alert('O campo Nome deve ter no mínimo 10 caracteres');
            }
            document.getElementById("nome").focus;
            return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

function validarQtdeCaractereEmpresa(empresa, showAlert = true) {
    try {
        let Empresa = empresa ?? document.getElementById("empresa").value;

        if (Empresa.length <= 11) {
            if (showAlert) {
                alert('O campo Empresa deve ter no mínimo 10 caracteres');
            }
            document.getElementById("empresa").focus;
            return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }

}



function validaEmail() {
    email = document.getElementById("email").value;
    var check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.search(check) == -1) {
        alert('e-mail inválido');
        return false;
    }
    return true;
}

function confereCPF() {
    val = document.getElementById("cpf_cnpj").value.replaceAll("-", "").replaceAll(".", "").replaceAll("/", "");
    if (val.length == 11) {
        var cpf = val.trim();

        cpf = cpf.replace(/\./g, '');
        cpf = cpf.replace('-', '');
        cpf = cpf.split('');

        var v1 = 0;
        var v2 = 0;
        var aux = false;

        for (var i = 1; cpf.length > i; i++) {
            if (cpf[i - 1] != cpf[i]) {
                aux = true;
            }
        }

        if (aux == false) {
            alert('CPF inválido');
            return false;
        }

        for (var i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
            v1 += cpf[i] * p;
        }

        v1 = ((v1 * 10) % 11);

        if (v1 == 10) {
            v1 = 0;
        }

        if (v1 != cpf[9]) {
            alert('CPF inválido');
            return false;
        }

        for (var i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
            v2 += cpf[i] * p;
        }

        v2 = ((v2 * 10) % 11);

        if (v2 == 10) {
            v2 = 0;
        }

        if (v2 != cpf[10]) {
            alert('CPF inválido');
            return false;
        } else {
            return true;
        }
    } else if (val.length == 14) {
        var cnpj = val.trim();

        cnpj = cnpj.replace(/\./g, '');
        cnpj = cnpj.replace('-', '');
        cnpj = cnpj.replace('/', '');
        cnpj = cnpj.split('');

        var v1 = 0;
        var v2 = 0;
        var aux = false;

        for (var i = 1; cnpj.length > i; i++) {
            if (cnpj[i - 1] != cnpj[i]) {
                aux = true;
            }
        }

        if (aux == false) {
            alert('CNPJ inválido');
            return false;
        }

        for (var i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
            if (p1 >= 2) {
                v1 += cnpj[i] * p1;
            } else {
                v1 += cnpj[i] * p2;
            }
        }

        v1 = (v1 % 11);

        if (v1 < 2) {
            v1 = 0;
        } else {
            v1 = (11 - v1);
        }

        if (v1 != cnpj[12]) {
            alert('CNPJ inválido');
            return false;
        }

        for (var i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) {
            if (p1 >= 2) {
                v2 += cnpj[i] * p1;
            } else {
                v2 += cnpj[i] * p2;
            }
        }

        v2 = (v2 % 11);

        if (v2 < 2) {
            v2 = 0;
        } else {
            v2 = (11 - v2);
        }

        if (v2 != cnpj[13]) {
            alert('CNPJ inválido');
            return false;
        } else {
            return true;
        }
    } else {
        alert('CNPJ inválido');
        return false;
    }
}
function valida_cep_branco() {
    cep_branco = document.getElementById('cep').value
    if (cep_branco == '') {
        alert('O Campo CEP não pode estar vazio');
        document.ELEMENT_NODE('cep').focus
        return false;
    }
    return true;
}

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('estado').value = ("");
    document.getElementById('numero').value = ("");
    // document.getElementById('complemento').value = ("");
    habilitar_campos(false);
}

function habilitar_campos(disabled, possuiLogradouro = true) {

    if (possuiLogradouro) {
        document.getElementById('rua').disabled = disabled;
        document.getElementById('bairro').disabled = disabled;
    }

    document.getElementById('cidade').disabled = disabled;
    document.getElementById('estado').disabled = disabled;
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('estado').value = (conteudo.uf);
        // document.getElementById('complemento').value=(conteudo.complemento);

        habilitar_campos(true, conteudo.logradouro.length > 0)

    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.")
        document.getElementById('cep').value = '';
        document.getElementById('cep').focus;
    }
}


function pesquisaCep(valor) {

    var cep = valor ?? document.getElementById("cep").value;

    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');
    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "";
            document.getElementById('cidade').value = "...";
            document.getElementById('estado').value = "...";
            document.getElementById('numero').value = "";
            document.getElementById('complemento').value = "";


            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};
function valida_telefone_branco() {
    telefone_branco = document.getElementById('telefone').value
    if (telefone_branco == '') {
        alert('O Campo Telefone não pode estar vazio');
        document.getElementById('telefone').focus
        return false;
    }
    return true;
}

function valida_rua_branco() {
    rua_branco = document.getElementById('rua').value
    if (rua_branco == '') {
        alert('O Campo Rua não pode estar vazio');
        document.getElementById('rua').focus
        return false;
    }
    return true;
}
function valida_numero_branco() {
    numero_branco = document.getElementById('numero').value
    if (numero_branco == '') {
        alert('O Campo Numero não pode estar vazio');
        document.getElementById('numero').focus
        return false;
    }
    return true;
}

function valida_complemento_branco() {
    conplemento_branco = document.getElementById('complemento').value
    if (conplemento_branco == '') {
        alert('O Campo Complemento não pode estar vazio');
        document.getElementById('complemento').focus
        return false;
    }
    return true;
}

function valida_bairro_branco() {
    bairro_branco = document.getElementById('bairro').value
    if (bairro_branco == '') {
        alert('O Campo Bairro não pode estar vazio');
        document.getElementById('bairro').focus
        return false;
    }
    return true;
}
function valida_estado_branco() {
    estado_branco = document.getElementById('estado').value
    if (estado_branco == '') {
        alert('O Campo Estado não pode estar vazio');
        document.getElementById('estado').focus
        return false;
    }
    return true;
}

function valida_especialdade_branco() {
    especialidade_branco = document.getElementById('especialidade').value
    if (especialidade_branco == '') {
        alert('O Campo Especialidade não pode estar vazio');
        document.getElementById('especialidade').focus
        return false;
    }
    return true;
}
function validarQtdeCaractereEspecialidade(especialidade, showAlert = true) {
    try {
        let Especialidade = especialidade ?? document.getElementById("especialidade").value;
        // let Nome = document.getElementById("nome").value;

        if (Especialidade.length <= 12) {
            if (showAlert) {
                alert('O campo Especialidade deve ter no mínimo 10 caracteres');
            }
            document.getElementById("especialidade").focus;
            return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}


function valida_Form() {

    // se um deles for inválido, retorna false e o form não é submetido
    // cpfcnpj()&&

    const valido = validarQtdeCaractereNome() &&
        validarNome() &&
        validaEmail() &&
        validarQtdeCaractereEmpresa() &&
        confereCPF() &&
        valida_telefone_branco() &&
        valida_cep_branco() &&
        valida_rua_branco() &&
        valida_numero_branco() &&
        valida_complemento_branco() &&
        valida_bairro_branco() &&
        valida_estado_branco() &&
        valida_especialdade_branco() &&
        validarQtdeCaractereEspecialidade();

    if (valido) {
        alert('Cadastro efetuado com sucesso!');
        montarjson();
        return true;
    }

    return false;

}

// function valida_Form() {

//     // se um deles for inválido, retorna false e o form não é submetido
//     // cpfcnpj()&&uyuty7tty


//     return(validarQtdeCaractereNome() &&
//     validarNome() &&
//     validaEmail() &&
//     validarQtdeCaractereEmpresa() &&
//     confereCPF() &&
//     valida_telefone_branco() &&
//     valida_cep_branco() &&
//     valida_rua_branco() &&
//     valida_numero_branco() &&
//     valida_complemento_branco() &&
//     valida_bairro_branco( )&&
//     valida_estado_branco() &&
//     valida_especialdade_branco() &&
//     validarQtdeCaractereEspecialidade());


// }

function montarjson() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const empresa = document.getElementById('empresa').value;
    const cpf_cnpj = document.getElementById('cpf_cnpj').value;
    const telefone = document.getElementById('telefone').value;
    const cep = document.getElementById('cep').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const especialidade = document.getElementById('especialidade').value;

    var obj_form = {
        "nome": nome,
        "email": email,
        "empresa": empresa,
        "cpf_cnpj": cpf_cnpj,
        "telefone": telefone,
        "cep": cep,
        "rua": rua,
        "numero": numero,
        "complemento": complemento,
        "bairro": bairro,
        "cidade": cidade,
        "estado": estado,
        "especialidade": especialidade,

    }
    var json = JSON.stringify(obj_form);

    document.write("<h1>Dados em Json</h1>");
    document.write(json);
}
