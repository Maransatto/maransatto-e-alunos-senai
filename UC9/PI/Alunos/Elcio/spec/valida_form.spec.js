describe("Teste de validação de formulário de cadastro ", function() {

	describe("Função para validação do nome ", function() {
		it("Retorna True se o campo nome for preenchido com caracteres alfabeticos ", function() {
			expect(validarNome('Elcio', false)).toBe(true);
		});

		it("Retorna False se o campo nome for preenchido com caracteres Numéricos ", function() {
			expect(validarNome('1236', false)).toBe(false);
		});
	});

    describe("Função para validação quantidade de caractere do campo nome ", function() {
		it("Retorna True se a quantidade de caractere for maior que 10", function() {
			expect(validarQtdeCaractereNome('elcio dos Santos Oliveira', false)).toBe(true);
		});

		it("Retorna false se a quantidade de caractere for menor que 10", function() {
			expect(validarQtdeCaractereNome('elcio', false)).toBe(false);
		});

	});

	describe("Função para validação quantidade de caractere do campo empresa ", function() {
		it("Retorna True se a quantidade de caractere for maior que 11", function() {
			expect(validarQtdeCaractereEmpresa('elcio', false)).toBe(true);
		});

		it("Retorna false se a quantidade de caractere for menor que 11", function() {
			expect(validarQtdeCaractereEmpresa('elcio', false)).toBe(false);
		});

	});


	describe("Função para validação quantidade de caractere do campo especialidade ", function() {
		it("Retorna True se a quantidade de caractere for maior que 12", function() {
			expect(validarQtdeCaractereEspecialidade('elcio', false)).toBe(true);
		});

		it("Retorna false se a quantidade de caractere for menor que 12", function() {
			expect(validarQtdeCaractereEspecialidade('elcio', false)).toBe(false);
		});

	});




});