describe('Testes de Validação de Formulário de Esporte', function() {

    describe('Fução de Validar Nome', function() {

        it('Tem que me retornar True se o nome for válido (sem número)', function() {
            expect(validarNome('Fernando', false)).toBeTruthy();
        })

        it('Tem que me retornar False se o nome for inválido (com número)', function() {
            expect(validarNome('1234', false)).toBeFalsy();
        })
    })

})