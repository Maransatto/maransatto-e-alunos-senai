// DESCRIBE - conjunto de teste
// IT - caso de teste
// EXPECT- asserção - pergunta sobre o que está sendo enviado e recebido
// exemplo. expect(10).toBe(10)  
// **********************************************************************************
// Matchers - pontos para perguntar sobre o expect
// toBe, toBeGreaterThan , not.toBe , not.toBeGreaterThan
// No livro digital página e no material web página 152 SA2 Etapa 2 página 100
// Saiba mais sobre matchers em https://imasters.com.br/front-end/jasmine-entendendo-os-matchers




describe("Teste de validação valor_do_jogo ", function() {

  it("Valores Sorteio do Placar ", function() {

	//Com base nas opções de Matchers acima, complete os testes abaixo
	
	expect( sorteio() ).toBeGreaterThan (-1);
	
	expect( sorteio() ).not.toBeGreaterThan (5);
	
	expect( sorteio() ).not.toBe (6);
    
  });


});


describe("Teste de validação validar_pontos ", function() {

  it("Validar Campeões ", function() {

	expect( validar_pontos(0,1) ).toBe ("Vitória do Time 2");
	expect( validar_pontos(0,2) ).toBe ("Vitória do Time 2");
	expect( validar_pontos(0,3) ).toBe ("Vitória do Time 2");
	expect( validar_pontos(0,4) ).toBe ("Vitória do Time 2");

	expect( validar_pontos(1,2) ).toBe ("Vitória do Time 2");
	expect( validar_pontos(1,3) ).toBe ("Vitória do Time 2");
	expect( validar_pontos(1,4) ).toBe ("Vitória do Time 2");

	expect( validar_pontos(2,3) ).toBe ("Vitória do Time 2");
	expect( validar_pontos(2,4) ).toBe ("Vitória do Time 2");

	expect( validar_pontos(3,4) ).toBe ("Vitória do Time 2");


	expect( validar_pontos(1,0) ).toBe ("Vitória do Time 1");
	expect( validar_pontos(2,0) ).toBe ("Vitória do Time 1");
	expect( validar_pontos(3,0) ).toBe ("Vitória do Time 1");
	expect( validar_pontos(4,0) ).toBe ("Vitória do Time 1");

	expect( validar_pontos(2,1) ).toBe ("Vitória do Time 1");
	expect( validar_pontos(3,1) ).toBe ("Vitória do Time 1");
	expect( validar_pontos(4,1) ).toBe ("Vitória do Time 1");

	expect( validar_pontos(3,2) ).toBe ("Vitória do Time 1");
	expect( validar_pontos(4,2) ).toBe ("Vitória do Time 1");

	expect( validar_pontos(4,3) ).toBe ("Vitória do Time 1");


	expect( validar_pontos(0,0) ).toBe ("Empate");
	expect( validar_pontos(1,1) ).toBe ("Empate");
	expect( validar_pontos(2,2) ).toBe ("Empate");
	expect( validar_pontos(3,3) ).toBe ("Empate");
	expect( validar_pontos(4,4) ).toBe ("Empate");
	
    
  });


});
 


describe("Teste de validação validar_pontos INVALIDOS", function() {

  it("Validar Campeões ", function() {

	expect( validar_pontos(0,1) ).not.toBe ("Vitória do Time 1");
	expect( validar_pontos(0,2) ).not.toBe ("Vitória do Time 1");
	expect( validar_pontos(0,3) ).not.toBe ("Vitória do Time 1");
	expect( validar_pontos(0,4) ).not.toBe ("Vitória do Time 1");

	expect( validar_pontos(1,2) ).not.toBe ("Vitória do Time 1");
	expect( validar_pontos(1,3) ).not.toBe ("Vitória do Time 1");
	expect( validar_pontos(1,4) ).not.toBe ("Vitória do Time 1");

	expect( validar_pontos(2,3) ).not.toBe ("Vitória do Time 1");
	expect( validar_pontos(2,4) ).not.toBe ("Vitória do Time 1");

	expect( validar_pontos(3,4) ).not.toBe ("Vitória do Time 1");



	expect( validar_pontos(1,0) ).not.toBe ("Vitória do Time 2");
	expect( validar_pontos(2,0) ).not.toBe ("Vitória do Time 2");
	expect( validar_pontos(3,0) ).not.toBe ("Vitória do Time 2");
	expect( validar_pontos(4,0) ).not.toBe ("Vitória do Time 2");

	expect( validar_pontos(2,1) ).not.toBe ("Vitória do Time 2");
	expect( validar_pontos(3,1) ).not.toBe ("Vitória do Time 2");
	expect( validar_pontos(4,1) ).not.toBe ("Vitória do Time 2");

	expect( validar_pontos(3,2) ).not.toBe ("Vitória do Time 2");
	expect( validar_pontos(4,2) ).not.toBe ("Vitória do Time 2");

	expect( validar_pontos(4,3) ).not.toBe ("Vitória do Time 2");

	
	
	expect( validar_pontos(0,1) ).not.toBe ("Empate");
	expect( validar_pontos(0,2) ).not.toBe ("Empate");
	expect( validar_pontos(0,3) ).not.toBe ("Empate");
	expect( validar_pontos(0,4) ).not.toBe ("Empate");
	expect( validar_pontos(1,0) ).not.toBe ("Empate");
	expect( validar_pontos(2,0) ).not.toBe ("Empate");
	expect( validar_pontos(3,0) ).not.toBe ("Empate");
	expect( validar_pontos(4,0) ).not.toBe ("Empate");
	expect( validar_pontos(1,2) ).not.toBe ("Empate");
	expect( validar_pontos(1,3) ).not.toBe ("Empate");
	expect( validar_pontos(1,4) ).not.toBe ("Empate");
	expect( validar_pontos(2,1) ).not.toBe ("Empate");
	expect( validar_pontos(2,3) ).not.toBe ("Empate");
	expect( validar_pontos(2,4) ).not.toBe ("Empate");
	expect( validar_pontos(3,1) ).not.toBe ("Empate");
	expect( validar_pontos(3,2) ).not.toBe ("Empate");
	expect( validar_pontos(3,4) ).not.toBe ("Empate");
	expect( validar_pontos(4,1) ).not.toBe ("Empate");
	expect( validar_pontos(4,2) ).not.toBe ("Empate");
	expect( validar_pontos(4,3) ).not.toBe ("Empate");
	
    
  });


});