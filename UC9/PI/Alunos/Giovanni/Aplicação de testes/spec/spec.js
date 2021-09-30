// DESCRIBE - conjunto de teste
// IT - caso de teste
// EXPECT- asserção - pergunta sobre o que está sendo enviado e recebido
// exemplo. expect(10).toBe(10)  
// **********************************************************************************
// Matchers - pontos para perguntar sobre o expect
// toBe, toBeGreaterThan , not.toBe , not.toBeGreaterThan
// No livro digital página e no material web página 152 SA2 Etapa 2 página 100
// Saiba mais sobre matchers em https://imasters.com.br/front-end/jasmine-entendendo-os-matchers



   
describe("Teste de validação de nome INVALIDOS", function() {

	it("Validar Nome", function () {
		expect(validarNome('lasajs28382783', false)).toBeFalsy();
	});
});

describe("Teste de validação de e-mail INVALIDOS", function() {

	it("Validar E-mail", function () {
		expect(validarEmail('lasajs28382783', false)).toBeFalsy();
	});
});

describe("Teste de validação de CPF INVALIDOS", function() {

	it("Validar CPF", function () {
		expect(validarCPF('lasajs', false)).toBeFalsy();
	});
});

describe("Teste de validação de Nascimento INVALIDOS", function() {

	it("Validar Nascimento", function () {
		expect(validarNascimento('lasajs', false)).toBeFalsy();
	});
});

describe("Teste de validação de Celular INVALIDOS", function() {

	it("Validar Celular", function () {
		expect(validarCelular('lasajs', false)).toBeFalsy();
	});
});

describe("Teste de validação de CEP INVALIDOS", function() {

	it("Validar CEP", function () {
		expect(validarCEP('lasajs', false)).toBeFalsy();
	});
});

describe("Teste de validação de Numero INVALIDOS", function() {

	it("Validar Numero", function () {
		expect(validarNumero('lasajs', false)).toBeFalsy();
	});
});