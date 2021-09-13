function alterarTipoPessoa(tipoPessoa) {
    document.getElementById('bloco_cpf').hidden = (tipoPessoa === 'PJ');
    document.getElementById('bloco_cnpj').hidden = (tipoPessoa === 'PF');
}

function limpa_formulario_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('logadouro').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";
}

function meu_callback(conteudo) {

    logadouro = document.getElementById('logadouro');
    bairro = document.getElementById('bairro');
    cidade = document.getElementById('cidade');
    estado = document.getElementById('estado');

    if (!("erro" in conteudo)) {
        logadouro.value = conteudo.logradouro;
        bairro.value = conteudo.bairro;
        cidade.value = conteudo.localidade;
        estado.value = conteudo.uf;
    }
    else {
        limpa_formulario_cep();
        alert("CEP não encontrado.");
    }

    habilitarOuDesabilitarInput('logadouro', logadouro.value);
    habilitarOuDesabilitarInput('bairro', bairro.value);
    habilitarOuDesabilitarInput('cidade', cidade.value);
    habilitarOuDesabilitarInput('estado', estado.value);
}

function habilitarOuDesabilitarInput(idDoInput, valorDoInput) {
    document.getElementById(idDoInput).disabled = (valorDoInput !== '')
}

function pesquisaCep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('logadouro').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('estado').value="...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulario_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulario_cep();
    }
};