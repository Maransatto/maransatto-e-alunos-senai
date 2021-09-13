function enviarFormulario() {
    var valido = true;

    const name = document.getElementById('name').value;

    if (!validarNome(name, false)) {
        document.getElementById('nome_invalido').hidden = false
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

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('logradouro').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('estado').value=("");
    // document.getElementById('ibge').value=("");
    habilitar_campos(false);
}

function habilitar_campos(disabled, possuiLogradouro = true) {

    if (possuiLogradouro) {
        document.getElementById('logradouro').disabled = disabled;
        document.getElementById('bairro').disabled = disabled;
    }

    document.getElementById('cidade').disabled = disabled;
    document.getElementById('estado').disabled = disabled;
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('logradouro').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('estado').value=(conteudo.uf);
        // document.getElementById('ibge').value=(conteudo.ibge);

        habilitar_campos(true, conteudo.logradouro.length > 0)


    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisarCep(valor) {

    var cep = valor ?? document.getElementById("cep").value;

    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('logradouro').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('estado').value="...";
            // document.getElementById('ibge').value="...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

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

function verificaTipoPessoa() {
    selecionadoPF = document.getElementById('tipoPessoaCPF').checked

    document.getElementById('bloco_cpf').hidden = !selecionadoPF;
    document.getElementById('bloco_cnpj').hidden = selecionadoPF;
}



$(function() {

    $('#cpf_cnpj').blur(function() {
        elemento = this;

        qtdeCaracteres = elemento.value.replace(/\D/g, '').length
        console.log(qtdeCaracteres);

        label = 'CPF';
        // elemento.class = 'form-control mask-cpf';
        if (qtdeCaracteres === 0) {
            $('#cpf_cnpj').mask('');
        }


        if (qtdeCaracteres === 11) {
            // elemento.class = 'form-control';
            $('#cpf_cnpj').mask('999.999.999-99');
        }
        if (qtdeCaracteres > 11) {
            label = 'CNPJ';
            // elemento.class = 'form-control mask-cnpj';
            $('.mask-cnpj').mask('99.999.999/9999-99');
        }
    
        document.getElementById('label_cpf_cnpj').innerHTML = label;
    });
});