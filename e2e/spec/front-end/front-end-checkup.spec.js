	it ('1 - Confira se os dados do cabeçalho da loja: telefone, redirecionamento dos ícones de redes sociais. Obs.: A execução verifica se o texto no bloco de título "cabeçalho - Informações topo" é diferente do texto padrão, ou vazio.', function() {
		geralpo.acessaTelaBlocosEstaticos();
		blocosEstaticospo.buscaPorTitulo('cabeçalho - Informações topo');
		blocosEstaticospo.clickVerInfoTopo();
        //browser.switchTo().frame(blocosEstaticospo.iFrameConteudo).getWebElement();
		//expect (blocosEstaticospo.tinymceConteudo.getText()).toEqual(blocosEstaticospo.valuetinymceConteudo);
		//driver.switchTo().defaultContent();
	});

	it ('2.1 - Navega por todas as categorias e verifica se tem pelo menos um produto vinculado', function() {

	});

	it ('4 - Validar páginas criadas para o rodapé - estudar uma forma de mapear a rota do site por meio dos links do backend', function() {

	});


	it ('8 - Valide se existe pelo menos uma forma de pagamento definida e se os campos mínimos foram inputados', function() {

	});