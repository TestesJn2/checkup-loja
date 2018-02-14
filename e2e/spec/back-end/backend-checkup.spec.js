/*back-end-checkup.spec.js
Esses testes visam simular o checkup feito para publicar uma loja. 
Os mesmos foram criados a partir da documentação http://wiki.jn2.xyz/sucessodocliente/publicacao*/

browser.ignoreSynchronization = true;

'use strict';
var autenticacaopo = require ('../../page-objects/autenticacao.po');
var geralpo = require ('../../page-objects/geral.po');
var blocosEstaticospo = require ('../../page-objects/blocos-estaticos.po');
var configuracaopo = require ('../../page-objects/configuracao.po');
var paginaspo = require ('../../page-objects/paginas.po');
var gerenciarProdutospo = require ('../../page-objects/gerenciar-produtos.po');


var helper = require ('../../helper/helper');

beforeEach(function() {
	browser.get('');
	browser.driver.sleep(1000);
});

afterEach(function() {
	browser.driver.sleep(200);
});

fdescribe ('Iniciar Checkup - Login', function() {

	it ('Efetua Login', function() {
		autenticacaopo.login('jn2', "5hqw}Gf}\'VPGuhsK");
		helper.waitElementVisibility(geralpo.titleHomePainel);
		expect(geralpo.titleHomePainel.isDisplayed()).toBe(true);
	});
});

describe ('1 - Verificar se o nome da loja foi alterado.', function() {
	it ('Verifica se o nome da loja foi alterado', function() {
		geralpo.acessaMenuConfiguracao();
		configuracaopo.selecionaNomeLojaGerenciarLoja();
		helper.waitElementVisibility(configuracaopo.linhaRefNomeLoja);
		expect (configuracaopo.linhaRefNomeLoja.getAttribute('label')).not.toEqual('Jn2 e-commerce');		
	});
});

describe ('2 - Verificar se os e-mails transacionais estão preenchidos em sistema-Configuração-Vendas-E-mails de vendas', function() {
	
	beforeEach(function() {
		geralpo.acessaMenuConfiguracao();
		configuracaopo.selecionaEmailDeVenda();
		browser.driver.sleep(1000);
		
		// Garantir que nenhum menu esteja acionado para não interferir na captura dos elementos durante os testes
		configuracaopo.divPedidoEmailVendaAtiva.getCssValue('display').then (function(propriedade) {
			if (propriedade !== 'none') {
				browser.driver.sleep(1000);
				configuracaopo.clickPedidoEmailVenda();
			} else {
				console.log('menu Pedido não está ativo');
			};
		});

		configuracaopo.divComentarioDoPedidoEmailVendaAtiva.getCssValue('display').then (function(propriedade) {
			if (propriedade !== 'none') {
				browser.driver.sleep(1000);
				configuracaopo.clickComentarioPedidoEmailVenda();
			} else {
				console.log('menu Comentário do Pedido não está ativo');
			};
		});

		configuracaopo.divfaturaEmailVendaAtiva.getCssValue('display').then (function(propriedade) {
			if (propriedade !== 'none') {
				browser.driver.sleep(1000);
				configuracaopo.clickFaturaEmailVenda();
			} else {
				console.log('menu Fatura não está ativo');
			};
		});

		configuracaopo.divComentariosEmailVendaAtiva.getCssValue('display').then (function(propriedade) {
			if (propriedade !== 'none') {
				browser.driver.sleep(1000);
				configuracaopo.clickComentariosEmailVenda();
			} else {
				console.log('menu Comentários não está ativo');
			};
		});

		configuracaopo.divEntregaEmailVendaAtiva.getCssValue('display').then (function(propriedade) {
			if (propriedade !== 'none') {
				browser.driver.sleep(1000);
				configuracaopo.clickEntregaEmailVenda();
			} else {
				console.log('menu Entregas não está ativo');
			};
		});

		configuracaopo.divComentariosEntregaEmailVenda.getCssValue('display').then (function(propriedade) {
			if (propriedade !== 'none') {
				browser.driver.sleep(1000);
				configuracaopo.clickComentariosEntregaEmailVenda();
			} else {
				console.log('menu Comentários da Entrega não está ativo');
			};
		});

		configuracaopo.divReembolsoEmailVendaAtiva.getCssValue('display').then (function(propriedade) {
			if (propriedade !== 'none') {
				browser.driver.sleep(1000);
				configuracaopo.clickReembolsoEmailVenda();
			} else {
				console.log('menu Reembolso não está ativo');
			};
		});

		configuracaopo.divComentariosReembolsoEmailVendaAtiva.getCssValue('display').then (function(propriedade) {
			if (propriedade !== 'none') {
				browser.driver.sleep(1000);
				configuracaopo.clickComentariosReembolsoEmailVenda();
			} else {
				console.log('menu Comentários de Reembolso não está ativo');
			};
		});
	});

	
	it ('2.1 _ Pedido _ Opcao Enviar Copia de Email de Pedido para', function() {
		helper.waitElementVisibility(configuracaopo.pedidoEmailVenda);
		browser.driver.sleep(1000);
		configuracaopo.clickPedidoEmailVenda();
		helper.waitElementVisibility(configuracaopo.emailCopiaPedidoPara);
		expect (configuracaopo.emailCopiaPedidoPara.getAttribute('value')).not.toEqual('');		
		configuracaopo.emailCopiaPedidoPara.getAttribute('value').then (function (value) {
			if (((value.indexOf('@')) > -1) && ((value.indexOf('.com')) > -1) ) {
				console.log ('e-mail informado possui @ e .com');
			} else {
				expect (configuracaopo.emailCopiaPedidoPara.getAttribute('value')).toContain('@');
				expect (configuracaopo.emailCopiaPedidoPara.getAttribute('value')).toContain('.com');
				};
		});	
	});

	it ('2.2 _ Comentários do Pedido _ Opção Enviar Cópia de Email de Comentário de Pedido para', function() {
		helper.waitElementVisibility(configuracaopo.comentarioDoPedidoEmailVenda);
		browser.driver.sleep(1000);
		configuracaopo.clickComentarioPedidoEmailVenda();
		helper.waitElementVisibility(configuracaopo.emailCopiaComentarioDoPedido);
		expect (configuracaopo.emailCopiaComentarioDoPedido.getAttribute('value')).not.toEqual('');
		configuracaopo.emailCopiaComentarioDoPedido.getAttribute('value').then (function (value) {
			if (((value.indexOf('@')) > -1) && ((value.indexOf('.com')) > -1)) {
				console.log('e-mail informado possui @ e .com');
			} else {
				expect (configuracaopo.emailCopiaPedidoPara.getAttribute('value')).toContain('@');
				expect (configuracaopo.emailCopiaPedidoPara.getAttribute('value')).toContain('.com');
			};
		});
	});

	it ('2.3 - Fatura - Opção Enviar Cópia de Email de Fatura Para', function() {
		helper.waitElementVisibility(configuracaopo.faturaEmailVenda);
		browser.driver.sleep(1000);
		configuracaopo.clickFaturaEmailVenda();
		helper.waitElementVisibility(configuracaopo.emailCopiafaturaEmailVenda);
		expect (configuracaopo.emailCopiafaturaEmailVenda.getAttribute('value')).not.toEqual('');
		configuracaopo.emailCopiafaturaEmailVenda.getAttribute('value').then (function (value) {
			if (((value.indexOf('@')) > -1) && ((value.indexOf('.com')) > -1)) {
				console.log('e-mail informado possui @ e .com');
			} else {
				expect (configuracaopo.emailCopiaPedidoPara.getAttribute('value')).toContain('@');
				expect (configuracaopo.emailCopiaPedidoPara.getAttribute('value')).toContain('.com');
			};
		});
	});

	it ('2.4 - Comentários - Opção Enviar Cópia de Email de Comentário de Fatura Para', function() {
		helper.waitElementVisibility(configuracaopo.comentariosEmailVenda);
		browser.driver.sleep(1000);
		configuracaopo.clickComentariosEmailVenda();
		helper.waitElementVisibility(configuracaopo.emailComentariosEmailVenda);
		expect (configuracaopo.emailComentariosEmailVenda.getAttribute('value')).not.toEqual('');
		browser.takeScreenshot();
		configuracaopo.emailComentariosEmailVenda.getAttribute('value').then (function (value) {
			if (((value.indexOf('@')) > -1) && ((value.indexOf('.com')) > -1)) {
				console.log('e-mail informado possui @ e .com');
			} else {
				expect (configuracaopo.emailCopiaPedidoPara.getAttribute('value')).toContain('@');
				expect (configuracaopo.emailCopiaPedidoPara.getAttribute('value')).toContain('.com');
			};
		});
	});

	it ('2.5 - Entrega - Opção Enviar Cópia de Email de Entrega Para', function() {
		helper.waitElementVisibility(configuracaopo.entregaEmailVenda);
		browser.driver.sleep(1000);
		configuracaopo.clickEntregaEmailVenda();
		helper.waitElementVisibility(configuracaopo.emailEntregaEmailVenda);
		expect (configuracaopo.emailEntregaEmailVenda.getAttribute('value')).not.toEqual('');
		configuracaopo.emailEntregaEmailVenda.getAttribute('value').then (function (value) {
			if (((value.indexOf('@')) > -1) && ((value.indexOf('.com')) > -1)) {
				console.log('e-mail informado possui @ e .com');
			} else {
				expect (configuracaopo.emailCopiaPedidoPara.getAttribute('value')).toContain('@');
				expect (configuracaopo.emailCopiaPedidoPara.getAttribute('value')).toContain('.com');
			};
		});
	});

	it ('2.6 - Comentários de Entrega - Opção Enviar Cópia de Email de Entrega Para', function() {
		helper.waitElementVisibility(configuracaopo.comentariosEntregaEmailVenda);
		browser.driver.sleep(1000);
		configuracaopo.clickComentariosEntregaEmailVenda();
		helper.waitElementVisibility(configuracaopo.emailComentariosEntregaEmailVenda);
		expect (configuracaopo.emailComentariosEntregaEmailVenda.getAttribute('value')).not.toEqual('');
		configuracaopo.emailComentariosEntregaEmailVenda.getAttribute('value').then (function (value) {
			if (((value.indexOf('@')) > -1) && ((value.indexOf('.com')) > -1)) {
				console.log('e-mail informado possui @ e .com');
			} else {
				expect (configuracaopo.emailCopiaPedidoPara.getAttribute('value')).toContain('@');
				expect (configuracaopo.emailCopiaPedidoPara.getAttribute('value')).toContain('.com');
			};
		});
	});

	it ('2.7 - Reembolso - Opção Enviar Cópia de Email de Reembolso Para', function() {
		helper.waitElementVisibility(configuracaopo.reembolsoEmailVenda);
		browser.driver.sleep(1000);
		configuracaopo.clickReembolsoEmailVenda();
		helper.waitElementVisibility(configuracaopo.emailReembolsoEmailVenda);
		expect (configuracaopo.emailReembolsoEmailVenda.getAttribute('value')).not.toEqual('');
		configuracaopo.emailReembolsoEmailVenda.getAttribute('value').then (function (value) {
			if (((value.indexOf('@')) > -1) && ((value.indexOf('.com')) > -1)) {
				console.log('e-mail informado possui @ e .com');
			} else {
				expect (configuracaopo.emailCopiaPedidoPara.getAttribute('value')).toContain('@');
				expect (configuracaopo.emailCopiaPedidoPara.getAttribute('value')).toContain('.com');
			};
		});
	});

	it ('2.8 - Comentários do Reembolso - Opção Enviar Cópia de Email de Comentários de Reembolso Para', function() {
		helper.waitElementVisibility(configuracaopo.comentariosReembolsoEmailVenda);
		browser.driver.sleep(1000);
		configuracaopo.clickComentariosReembolsoEmailVenda();
		helper.waitElementVisibility(configuracaopo.emailComentariosReembolsoEmailVenda);
		browser.driver.sleep(1500);
		expect (configuracaopo.emailComentariosReembolsoEmailVenda.getAttribute('value')).not.toEqual('');
		configuracaopo.emailComentariosReembolsoEmailVenda.getAttribute('value').then (function (value) {
			if (((value.indexOf('@')) > -1) && ((value.indexOf('.com')) > -1)) {
				console.log('e-mail informado possui @ e .com');
			} else {
				browser.driver.sleep(1500);
				expect (configuracaopo.emailCopiaPedidoPara.getAttribute('value')).toContain('@');
				expect (configuracaopo.emailCopiaPedidoPara.getAttribute('value')).toContain('.com');
			};
		});
	});
});

describe ('3 - Verificar se o nome da página home foi alterado em CMS - Páginas - Home', function() {

	it ('Verifica se o nome informado está diferente de Agile Commerce - JN2 ou vazio', function() {
		geralpo.acessaTelaPaginas();
		paginaspo.buscaNomeURL('home');
		paginaspo.clickResultadoPagHome();
		paginaspo.tituloPagLoja.getAttribute('value').then (function(value) {
			if (value === 'Agile Commerce - JN2'){
				expect (paginaspo.tituloPagLoja.getAttribute('value')).not.toContain('Agile Commerce - JN2');
			} else if (value === '') {
				expect (paginaspo.tituloPagLoja.getAttribute('value')).not.toContain('');
			} else {
				console.log('nome da página foi alterado');
				expect (paginaspo.tituloPagLoja.getAttribute('value')).toContain(value);
			};
		});
	});
});

fdescribe ('4 - Verificar as configurações do método de pagamento em sistema - configuração - vendas - métodos de pagamento', function() {
	
	beforeEach(function() {
		geralpo.acessaMenuConfiguracao();
		configuracaopo.selecionaMenuVendasSubFormaPagamento();

		// Garantir que nenhum menu esteja acionado para não interferir na captura dos elementos durante os testes

		//Bank Transfer Payment
		configuracaopo.divFormPagBankTransferPaymentAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagBankTransferPaymentAtiva.getCssValue('display').then(function(propriedade) {
					if(propriedade !== 'none') {
						configuracaopo.acessaMenuFormPagSubBankTransferPayment();
						console.log('menu "Bank Transfer Payment" foi fechado');
					} else {
						console.log('menu "Bank Transfer Payment" não habilitado');
					}
				});
			} else {
				console.log('Menu não habilitado');
			};
		});


		//Dinheiro / Cheque
		configuracaopo.divFormPagDinheiroChequeAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagDinheiroChequeAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.acessaMenuFormPagSubDinheiroCheque();
						console.log('menu "Dinheiro / Cheque" foi fechado');
					} else {
						console.log('menu "Dinheiro / Cheque" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});

		//Finalizar Compra com Subtotal Zero
		configuracaopo.divFormPagCompraSubtotalZeroAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagCompraSubtotalZeroAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.acessaMenuFormPagSubFinalizarCompraSubtotalZero();
						console.log('menu "Finalizar Compra com Subtotal Zero" foi fechado');
					} else {
						console.log('menu "Finalizar Compra com Subtotal Zero" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});


		//Finalizar Cash On Delivery Payment
		configuracaopo.divFormPagCashOnDeliveryPaymentAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagCashOnDeliveryPaymentAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.acessaMenuFormPagSubFinalizarCashOnDelivery();
						console.log('menu "Finalizar Cash On Delivery Payment" foi fechado');
					} else {
						console.log('menu "Finalizar Cash On Delivery Payment" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});


		// Ordem de Compra
		configuracaopo.divFormPagOrdemCompraAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagOrdemCompraAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.acessaMenuFormPagSubOrdemCompra();
						console.log('menu "Ordem de Compra" foi fechado');
					} else {
						console.log('menu "Ordem de Compra" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});


		// Authorize.net Envio Direto
		configuracaopo.divFormPagAuthorizenetEnvioDiretoAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagAuthorizenetEnvioDiretoAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubAuthorizeNetEnvDireto();
						console.log('menu "Authorize.net Envio Direto" foi fechado');
					} else {
						console.log('menu "Authorize.net Envio Direto" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});


		//Authorize.net
		configuracaopo.divFormPagAuthorizeNetAtiva.isPresent().then (function (value) {
			if (value === true) {
				configuracaopo.divFormPagAuthorizeNetAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubAuthorizeNet();
						console.log('menu "Authorize.net" foi fechado');
					} else {
						console.log('menu "Authorize.net" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});


		//Pagar.me - Configuração
		configuracaopo.divFormPagPagarMeConfiguracaoAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagPagarMeConfiguracaoAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubPagarMeConf();
						console.log('menu "Pagar.me - Configuração" foi fechado');
					} else {
						console.log('menu "Pagar.me - Configuração" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});


		//Pagar.me - Boleto
		configuracaopo.divFormPagPagarMeBoletoAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagPagarMeBoletoAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubPagarMeBoleto();
						console.log('menu "Pagar.me - Boleto" foi fechado');
					} else {
						console.log('menu "Pagar.me - Boleto" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});


		//Pagar.me - Cartão de Crédito
		configuracaopo.divFormPagPagarMeCCAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagPagarMeCCAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubPagarMeCC();
						console.log('menu "Pagar.me - Cartão de Crédito" foi fechado');
					} else {
						console.log('menu "Pagar.me - Cartão de Crédito" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});


		//Pagar.me - Checkout
		configuracaopo.divFormPagPagarMeCheckoutAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagPagarMeCheckoutAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubPagarMeCheckout();
						console.log('menu "Pagar.me - Checkout" foi fechado');
					} else {
						console.log('menu "Pagar.me - Checkout" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});


		//API Cielo 3.0
		configuracaopo.divFormPagCielo3NitroAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagCielo3NitroAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						browser.driver.sleep(1500);
						configuracaopo.menuFormPagSubCielo3Nitro();
						console.log('menu "API Cielo 3.0" foi fechado');
					} else {
						console.log('menu "API Cielo 3.0" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});

		//PagSeguro - Ricardo Martins: Configuração
		configuracaopo.divFormPagPagSeguroConfigAtiva.isPresent().then(function(value) {
			if (value === true) {
				configuracaopo.divFormPagPagSeguroConfigAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubPagSeguroConf();
						console.log('menu "PagSeguro - Ricardo Martins: Configuração" foi fechado');
					} else {
						console.log('menu "PagSeguro - Ricardo Martins: Configuração" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});


		//PagSeguro - Cartão de Crédito - Ricardo Martins
		configuracaopo.divFormPagPagSeguroCCAtiva.isPresent().then(function(value){
			if (value === true) {
				configuracaopo.divFormPagPagSeguroCCAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubPagSeguroCC();
						console.log('menu "PagSeguro - Cartão de Crédito - Ricardo Martins" foi fechado');
					} else {
						console.log('menu "PagSeguro - Cartão de Crédito - Ricardo Martins" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});


		//PagSeguro - Boleto - Ricardo Martins
		configuracaopo.divFormPagSeguroBoletoAtiva.isPresent().then(function(value){
			if (value === true) {
				configuracaopo.divFormPagSeguroBoletoAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubPagSeguroBoleto();
						console.log('menu "PagSeguro - Boleto - Ricardo Martins" foi fechado');
					} else {
						console.log('menu "PagSeguro - Boleto - Ricardo Martins" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});


		//PagSeguro - TEF - Ricardo Martins
		configuracaopo.divFormPagPagSeguroTEFAtiva.isPresent().then(function(value){
			if (value === true) {
				configuracaopo.divFormPagPagSeguroTEFAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubPagSeguroTEF();
						console.log('menu "PagSeguro - TEF - Ricardo Martins" foi fechado');
					} else {
						console.log('menu "PagSeguro - TEF - Ricardo Martins" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});


		//maxiPago! - Configurações Globais
		configuracaopo.divFormPagMaxiPagoConfigAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagMaxiPagoConfigAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubMaxiPagoConf();
						console.log('menu "maxiPago! - Configurações Globais" foi fechado');
					} else {
						console.log('menu "maxiPago! - Configurações Globais" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});


		//maxiPago! - Cartões de Crédito
		configuracaopo.divFormPagMaxiPagoCCAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagMaxiPagoCCAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubMaxiPagCC();
						console.log('menu "maxiPago! - Cartões de Crédito" foi fechado');
					} else {
						console.log('menu "maxiPago! - Cartões de Crédito" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});

		//maxiPago! - Boleto
		configuracaopo.divFormPagMaxiPagoBoletoAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagMaxiPagoBoletoAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubMaxiPagoBoleto();
						console.log('menu "maxiPago! - Boleto" foi fechado');
					} else {
						console.log('menu "maxiPago! - Boleto" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});

		//maxiPago! - Transferência Online
		configuracaopo.divFormPagMaxiPagoTransferenciaAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagMaxiPagoTransferenciaAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubMaxiPagoTransfOnline();
						console.log('menu "maxiPago! - Transferência Online" foi fechado');
					} else {
						console.log('menu "maxiPago! - Transferência Online" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});

		//Stelo Transparente - Configurações de ATIVAÇÃO
		configuracaopo.divFormPagSteloTranspAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagSteloTranspAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubSteloTranspConfAtiva();
						console.log('menu "Stelo Transparente - Configurações de ATIVAÇÃO" foi fechado');
					} else {
						console.log('menu "Stelo Transparente - Configurações de ATIVAÇÃO" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});

		//Stelo Transparente - Configuração de PAGAMENTO - Boleto
		configuracaopo.divFormPagSteloBoletoAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagSteloBoletoAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubSteloTranspBoleto();
						console.log('menu "Stelo Transparente - Configuração de PAGAMENTO - Boleto" foi fechado');
					} else {
						console.log('menu "Stelo Transparente - Configuração de PAGAMENTO - Boleto" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});


		//MundiPagg - Configuração
		configuracaopo.divmenuFormPagMundiPaggConfigAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divmenuFormPagMundiPaggConfigAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubMundiPaggConf();
						console.log('menu "MundiPagg - Configuração" foi fechado');
					} else {
						console.log('menu "MundiPagg - Configuração" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});


		//MundiPagg - Cartão de Crédito 1
		configuracaopo.divFormPagMundiPaggCC1Ativa.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagMundiPaggCC1Ativa.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubMundiPaggCC1();
						console.log('menu "MundiPagg - Cartão de Crédito 1" foi fechado');
					} else {
						console.log('menu "MundiPagg - Cartão de Crédito 1" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});


		//MundiPagg - Cartão de Crédito 2
		configuracaopo.divFormPagMundiPaggCC2Ativa.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagMundiPaggCC2Ativa.getCssValue('display').then(function(propriedade) {
					if  (propriedade !== 'none') {
						configuracaopo.menuFormPagSubMundiPaggCC2();
						console.log('menu "MundiPagg - Cartão de Crédito 2" foi fechado');
					} else {
						console.log('menu "MundiPagg - Cartão de Crédito 2" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});


		//MundiPagg - Boleto
		configuracaopo.divFormPagMundiPaggBoletoAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagMundiPaggBoletoAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubMundiPaggBoleto();
						console.log('menu "MundiPagg - Boleto" foi fechado');
					} else {
						console.log('menu "MundiPagg - Boleto" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});

		//PagSeguro UOL
		configuracaopo.divFormPagPagSeguroUOLAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagPagSeguroUOLAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubPagSeguroUOL();
						console.log('menu "PagSeguro UOL" foi fechado');
					} else {
						console.log('menu "PagSeguro UOL" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});


		//Bcash - Somente Pagamentos à Vista
		configuracaopo.divFormPagBcashAtiva.isPresent().then (function(value) {
			if (value === true) {
				configuracaopo.divFormPagBcashAtiva.getCssValue('display').then(function(propriedade) {
					if (propriedade !== 'none') {
						configuracaopo.menuFormPagSubBcash();
						console.log('menu "Bcash - Somente Pagamentos à Vista" foi fechado');
					} else {
						console.log('menu "Bcash - Somente Pagamentos à Vista" não habilitado');
					};
				});
			} else {
				console.log('Menu não habilitado');
			};
		});

		browser.driver.sleep(1000);
	});
	

	it ('4.1 - AuthorizeNet Envio Direto - Verifica se foi informado Api login - chave de transação - vendedor MD5 - gateway URL - se está direcionado para o ambiente de produção', function() {
		configuracaopo.menuFormPagAuthorizenetEnvioDireto.isPresent().then (function(ativo) {
			if (ativo !== false) {
				configuracaopo.menuFormPagSubAuthorizeNetEnvDireto();
				helper.waitElementVisibility(configuracaopo.inputHabilitaFormPagBcashSim);
				configuracaopo.inputHabilitaFormPagBcashSim.getAttribute('selected').then(function(value) {
					if (value) {
						helper.waitElementVisibility(configuracaopo.apiLoginFormPagAuthorizenetEnvioDireto);
						expect (configuracaopo.apiLoginFormPagAuthorizenetEnvioDireto.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.chaveFormPagAuthorizenetEnvioDireto.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.vendedorFormPagAuthorizenetEnvioDireto.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.gatewayURLFormPagAuthorizenetEnvioDireto.getAttribute('value')).not.toEqual('');
						configuracaopo.modoTesteFormPagAuthorizenetEnvioDireto.getAttribute('selected').then(function(ambienteTeste) {
							if (ambienteTeste) {
								expect (configuracaopo.modoTesteFormPagAuthorizenetEnvioDireto.getAttribute('selected')).toEqual('Está direcionando para ambiente de Teste');
							} else {
								console.log('ambiente de produção foi selecionado');
							};
						});
					} else {
						console.log('A forma de pagamento "Authorize.net Envio Direto" não está sendo utilizada');
					};
				});
			} else {
				console.log('menu não habilitado e não será testado');
			};
		});
	});

	it ('4.2 - AuthorizeNet - Valida se está definido api login - email vendedor - chave - gateway url - Payment - se está direcionando para o ambiente de produção', function() {
		configuracaopo.menuFormPagAuthorizeNet.isPresent().then (function(ativo) {
			if (ativo !== false) {
				configuracaopo.menuFormPagSubAuthorizeNet();
				helper.waitElementVisibility(configuracaopo.inputHabilitaFormPagAuthorizeNet);
				configuracaopo.inputHabilitaFormPagAuthorizeNet.getAttribute('selected').then(function(value) {
					if (value) {
						helper.waitElementVisibility(configuracaopo.apiLoginFormPagAuthorizeNet);
						expect (configuracaopo.apiLoginFormPagAuthorizeNet.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.emailVendedorFormPagAuthorizeNet.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.chaveFormPagAuthorizeNet.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.gatewayURLFormPagAuthorizeNet.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.paymentURLFormPagAuthorizeNet.getAttribute('value')).not.toEqual('');
						configuracaopo.modoTesteFormPagAuthorizeNet.getAttribute('selected').then(function(ambienteTeste) {
							if (ambienteTeste) {
								expect (configuracaopo.modoTesteFormPagAuthorizeNet.getAttribute('selected')).toEqual('Está direcionando para ambiente de Teste');
							} else {
								console.log('ambiente de produção foi selecionado');
							};
						});
					} else {
						console.log('A forma de pagamento "Authorize.net" não está sendo utilizada');
					};
				});
			} else {
				console.log('menu não habilitado e não será testado');
			};
		});
	});

	it ('4.3 - PagarMe Boleto - Valida se está definido chave da api - chave criptografia  - se está direcionado para o ambiente de produção', function() {
		configuracaopo.menuFormPagPagarMeBoleto.isPresent().then (function(ativo) {
			if (ativo !== false) {
				configuracaopo.menuFormPagSubPagarMeBoleto();
				helper.waitElementVisibility(configuracaopo.inputHabilitaFormPagPagarMeBoleto);
				configuracaopo.inputHabilitaFormPagPagarMeBoleto.getAttribute('selected').then(function(value) {
					if (value) {
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubPagarMeBoleto();
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubPagarMeConf();
						helper.waitElementVisibility(configuracaopo.chaveApiFormPagPagarMeConfiguracao);
						expect (configuracaopo.chaveApiFormPagPagarMeConfiguracao.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.chaveCriptografiaFormPagPagarMeConfiguracao.getAttribute('value')).not.toEqual('');
						configuracaopo.modoTesteFormPagPagarMeConfiguracao.getAttribute('selected').then(function(ambienteTeste) {
							if (ambienteTeste) {
								expect (configuracaopo.modoTesteFormPagPagarMeConfiguracao.getAttribute('selected')).toEqual('Está direcionando para ambiente de Teste');
							} else {
								console.log('ambiente está pagar.me está direcionado para produção');
							};
						});
					} else {
						console.log('A forma de pagamento "Pagar.me - Boleto" não está sendo utilizada');
					};
				});
			} else {
				console.log('menu não habilitado e não será testado');
			};
		});
	});

	it ('4.4 - PagarMe Cartão de Crédito - Valida se está definido chave da api - chave criptografia - se está direcionado para o ambiente de produção', function() {
		configuracaopo.menuFormPagPagarMeCC.isPresent().then (function(ativo) {
			if (ativo !== false ) {
				configuracaopo.menuFormPagSubPagarMeCC();
				helper.waitElementVisibility(configuracaopo.inputHabilitaFormPagPagarMeCC);
				configuracaopo.inputHabilitaFormPagPagarMeCC.getAttribute('selected').then(function(value) {
					if (value) {
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubPagarMeCC();
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubPagarMeConf();
						helper.waitElementVisibility(configuracaopo.chaveApiFormPagPagarMeConfiguracao);
						expect (configuracaopo.chaveApiFormPagPagarMeConfiguracao.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.chaveCriptografiaFormPagPagarMeConfiguracao.getAttribute('value')).not.toEqual('');
						configuracaopo.modoTesteFormPagPagarMeConfiguracao.getAttribute('selected').then(function(ambienteTeste) {
							if (ambienteTeste) {
								browser.driver.sleep(1000);
								expect (configuracaopo.modoTesteFormPagPagarMeConfiguracao.getAttribute('selected')).toEqual('Está direcionando para ambiente de Teste');
							} else {
								console.log('ambiente está pagar.me está direcionado para produção');
							};
						});
					} else {
						console.log('A forma de pagamento "Pagar.me - Cartão de Crédito" não está sendo utilizada');
					};
				});
			} else {
				console.log('menu não habilitado e não será testado');
			};
		});
	});

	it ('4.5 - PagarMe Checkout - Valida se está definido chave da api - chave criptografia - se está direcionado para o ambiente de produção', function() {
		configuracaopo.menuFormPagPagarMeCheckout.isPresent().then (function(ativo) {
			if (ativo !== false) {
				configuracaopo.menuFormPagSubPagarMeCheckout();
				helper.waitElementVisibility(configuracaopo.inputHabilitaFormPagPagarMeCheckout);
				configuracaopo.inputHabilitaFormPagPagarMeCheckout.getAttribute('selected').then(function(value) {
					if (value) {
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubPagarMeCheckout();
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubPagarMeConf();
						helper.waitElementVisibility(configuracaopo.chaveApiFormPagPagarMeConfiguracao);
						expect (configuracaopo.chaveApiFormPagPagarMeConfiguracao.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.chaveCriptografiaFormPagPagarMeConfiguracao.getAttribute('value')).not.toEqual('');
						configuracaopo.modoTesteFormPagPagarMeConfiguracao.getAttribute('selected').then(function(ambienteTeste) {
							if (ambienteTeste) {
								expect (configuracaopo.modoTesteFormPagPagarMeConfiguracao.getAttribute('selected')).toEqual('Está direcionando para ambiente de Teste');
							} else {
								console.log('ambiente está pagar.me está direcionado para produção');
							};
						});
					} else {
						console.log('A forma de pagamento "Pagar.me - Checkout" não está sendo utilizada');
					};
				});
			} else {
				console.log('menu não habilitado e não será testado');
			};
		});
	});

	it ('4.6 - API Cielo 3.0 - Verifica se foi informado id do vendedor - chave - se está direcionado para o ambiente de produção', function() {
		configuracaopo.menuFormPagCielo3Nitro.isPresent().then (function(ativo) {
			if (ativo !== false) {
				configuracaopo.menuFormPagSubCielo3Nitro();
				helper.waitElementVisibility(configuracaopo.inputHabilitaFormPagCielo3Nitro);
				configuracaopo.inputHabilitaFormPagCielo3Nitro.getAttribute('selected').then(function(value) {
					if (value) {
						helper.waitElementVisibility(configuracaopo.idVendedorFormPagCielo3Nitro);
						expect (configuracaopo.idVendedorFormPagCielo3Nitro.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.chaveFormPagCielo3Nitro.getAttribute('value')).not.toEqual('');
						configuracaopo.modoTesteFormPagCielo3Nitro.getAttribute('selected').then(function(ambienteTeste) {
							if (ambienteTeste) {
								expect (configuracaopo.modoTesteFormPagCielo3Nitro.getAttribute('selected')).toEqual('Está direcionando para ambiente de Teste');
							} else {
								console.log('ambiente está pagar.me está direcionado para produção');
							};
						})
					} else {
						console.log('A forma de pagamento "API Cielo 3.0" não está sendo utilizada');
					};
				});
			} else {
				console.log('menu não habilitado e não será testado');
			};
		});
	});

	it ('4.7 - PagSeguro Cartão de Crédito Ricardo Martins - Valida se foi informado email - token - se está direcionado para o ambiente de Produção', function() {
		configuracaopo.menuFormPagPagSeguroCC.isPresent().then (function(ativo) {
			if (ativo !== false) {
				configuracaopo.menuFormPagSubPagSeguroCC();
				helper.waitElementVisibility(configuracaopo.inputHabilitaFormPagPagSeguroCC);
				configuracaopo.inputHabilitaFormPagPagSeguroCC.getAttribute('selected').then(function(habilitado) {
					if (habilitado) {
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubPagSeguroCC();
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubPagSeguroConf()
						helper.waitElementVisibility(configuracaopo.emailFormPagPagSeguroConfig);
						expect (configuracaopo.emailFormPagPagSeguroConfig.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.tokenFormPagPagSeguroConfig.getAttribute('value')).not.toEqual('');
						configuracaopo.modoTesteFormPagPagSeguroConfig.getAttribute('selected').then(function(ambienteTeste) {
							if (ambienteTeste) {
								expect (configuracaopo.modoTesteFormPagPagSeguroConfig.getAttribute('selected')).toEqual('Está direcionando para ambiente de Teste');
							} else {
								console.log('ambiente está pagSeguro está direcionado para produção');
							};
						});
					} else {
						console.log('A forma de pagamento "PagSeguro - Cartão de Crédito - Ricardo Martins" não está sendo utilizada');
					};
				});
			} else {
				console.log('menu não habilitado e não será testado');
			}
		});
	});

	it ('4.8 - PagSeguro Boleto Ricardo Martins - Valida se foi informado email - token - se está direcionado para o ambiente de Produção', function() {
		configuracaopo.menuFormPagSeguroBoleto.isPresent().then (function(ativo) {
			if (ativo !== false) {
				configuracaopo.menuFormPagSubPagSeguroBoleto();
				helper.waitElementVisibility(configuracaopo.inputHabilitaFormPagSeguroBoleto);
				configuracaopo.inputHabilitaFormPagSeguroBoleto.getAttribute('selected').then(function(habilitado) {
					if (habilitado) {
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubPagSeguroBoleto();
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubPagSeguroConf()
						helper.waitElementVisibility(configuracaopo.emailFormPagPagSeguroConfig);
						expect (configuracaopo.emailFormPagPagSeguroConfig.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.tokenFormPagPagSeguroConfig.getAttribute('value')).not.toEqual('');
						configuracaopo.modoTesteFormPagPagSeguroConfig.getAttribute('selected').then(function(ambienteTeste) {
							if (ambienteTeste) {
								expect (configuracaopo.modoTesteFormPagPagSeguroConfig.getAttribute('selected')).toEqual('Está direcionando para ambiente de Teste');
							} else {
								console.log('ambiente está pagSeguro está direcionado para produção');
							};
						});
					} else {
						console.log('A forma de pagamento "PagSeguro - Boleto - Ricardo Martins" não está sendo utilizada');
					};
				});
			} else {
				console.log('menu não habilitado e não será testado');
			};
		});
	});

	it ('4.9 - PagSeguro TEF Ricardo Martins -  Valida se foi informado email - token - se está direcionado para o ambiente de Produção', function() {
		configuracaopo.menuFormPagPagSeguroTEF.isPresent().then (function(ativo) {
			if (ativo !== false ) {
				configuracaopo.menuFormPagSubPagSeguroTEF();
				helper.waitElementVisibility(configuracaopo.inputHabilitaFormPagPagSeguroTEF);
				configuracaopo.inputHabilitaFormPagPagSeguroTEF.getAttribute('selected').then(function(habilitado) {
					if (habilitado) {
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubPagSeguroTEF();
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubPagSeguroConf()
						helper.waitElementVisibility(configuracaopo.emailFormPagPagSeguroConfig);
						expect (configuracaopo.emailFormPagPagSeguroConfig.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.tokenFormPagPagSeguroConfig.getAttribute('value')).not.toEqual('');
						configuracaopo.modoTesteFormPagPagSeguroConfig.getAttribute('selected').then(function(ambienteTeste) {
							if (ambienteTeste) {
								expect (configuracaopo.modoTesteFormPagCielo3Nitro.getAttribute('selected')).toEqual('Está direcionando para ambiente de Teste');
							} else {
								console.log('ambiente está pagSeguro está direcionado para produção');
							};
						});
					} else {
						console.log('A forma de pagamento "PagSeguro - TEF - Ricardo Martins" não está sendo utilizada');
					};
				});
			} else {
				console.log('menu não habilitado e não será testado');
			};
		});
	});

	it ('4.10 - maxiPago Cartões de Crédito - válida se foi informado id - chave loja - chave secreta - se foi direcionado para ambiente de produção', function() {
		configuracaopo.menuFormPagMaxiPagoCC.isPresent().then (function(ativo) {
			if (ativo !== false) {
				configuracaopo.menuFormPagSubMaxiPagCC();
				helper.waitElementVisibility(configuracaopo.inputHabilitaFormPagMaxiPagoCC);
				configuracaopo.inputHabilitaFormPagMaxiPagoCC.getAttribute('selected').then(function(habilitado) {
					if (habilitado) {
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubMaxiPagCC();
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubMaxiPagoConf()
						helper.waitElementVisibility(configuracaopo.idFormPagMaxiPagoConfig);
						expect (configuracaopo.idFormPagMaxiPagoConfig.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.chaveLojaFormPagMaxiPagoConfig.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.chaveSecretaFormPagMaxiPagoConfig.getAttribute('value')).not.toEqual('');
						configuracaopo.modoTesteFormPagMaxiPagoConfig.getAttribute('selected').then(function(ambienteTeste) {
							if (ambienteTeste) {
								expect (configuracaopo.modoTesteFormPagMaxiPagoConfig.getAttribute('selected')).toEqual('Está direcionando para ambiente de Teste');
							} else {
								console.log('ambiente está pagSeguro está direcionado para produção');
							};
						});

					} else {
						console.log('A forma de pagamento "maxiPago! - Cartões de Crédito" não está sendo utilizada');
					};
				});
			} else {
				console.log('menu não habilitado e não será testado');
			};
		});
	});

	it ('4.11 - maxiPago Boleto - válida se foi informado id - chave loja - chave secreta - se foi direcionado para ambiente de produção', function() {
		configuracaopo.menuFormPagMaxiPagoBoleto.isPresent().then (function(ativo) {
			if (ativo !== false) {
				configuracaopo.menuFormPagSubMaxiPagoBoleto();
				helper.waitElementVisibility(configuracaopo.inputHabilitaFormPagMaxiPagoBoleto);
				configuracaopo.inputHabilitaFormPagMaxiPagoBoleto.getAttribute('selected').then(function(habilitado) {
					if (habilitado) {
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubMaxiPagoBoleto();
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubMaxiPagoConf()
						helper.waitElementVisibility(configuracaopo.idFormPagMaxiPagoConfig);
						expect (configuracaopo.idFormPagMaxiPagoConfig.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.chaveLojaFormPagMaxiPagoConfig.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.chaveSecretaFormPagMaxiPagoConfig.getAttribute('value')).not.toEqual('');
						configuracaopo.modoTesteFormPagMaxiPagoConfig.getAttribute('selected').then(function(ambienteTeste) {
							if (ambienteTeste) {
								expect (configuracaopo.modoTesteFormPagMaxiPagoConfig.getAttribute('selected')).toEqual('Está direcionando para ambiente de Teste');
							} else {
								console.log('ambiente está pagSeguro está direcionado para produção');
							};
						});

					} else {
						console.log('A forma de pagamento "maxiPago! - Boleto" não está sendo utilizada');
					};
				});
			} else {
				console.log('menu não habilitado e não será testado');
			};
		});
	});

	it ('4.12 - maxiPago Transferência Online - válida se foi informado id - chave loja - chave secreta - se foi direcionado para ambiente de produção', function() {
		configuracaopo.menuFormPagMaxiTransferencia.isPresent().then(function(ativo) {
			if (ativo !== false) {
				configuracaopo.menuFormPagSubMaxiPagoTransfOnline();
				helper.waitElementVisibility(configuracaopo.inputHabilitaFormPagMaxiPagoTransferencia);
				configuracaopo.inputHabilitaFormPagMaxiPagoTransferencia.getAttribute('selected').then(function(habilitado) {
					if (habilitado) {
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubMaxiPagoTransfOnline();
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubMaxiPagoConf()
						helper.waitElementVisibility(configuracaopo.idFormPagMaxiPagoConfig);
						expect (configuracaopo.idFormPagMaxiPagoConfig.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.chaveLojaFormPagMaxiPagoConfig.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.chaveSecretaFormPagMaxiPagoConfig.getAttribute('value')).not.toEqual('');
						configuracaopo.modoTesteFormPagMaxiPagoConfig.getAttribute('selected').then(function(ambienteTeste) {
							if (ambienteTeste) {
								expect (configuracaopo.modoTesteFormPagMaxiPagoConfig.getAttribute('selected')).toEqual('Está direcionando para ambiente de Teste');
							} else {
								console.log('ambiente está pagSeguro está direcionado para produção');
							};
						});

					} else {
						console.log('A forma de pagamento "maxiPago! - Transferência Online" não está sendo utilizada');
					};
				});
			} else {
				console.log('menu não habilitado e não será testado');
			};
		});
	});

	it ('4.13 - Stelo Transparente CC - Válida se foi definido url stelo - url status - id cliente - cliente secreto - se foi direcionado para ambiente de produção', function() {
		configuracaopo.menuFormPagSteloTransp.isPresent().then(function(ativo) {
			if (ativo !== false) {
				configuracaopo.menuFormPagSubSteloTranspConfAtiva();
				helper.waitElementVisibility(configuracaopo.inputHabilitaFormPagSteloTransp);
				configuracaopo.inputHabilitaFormPagSteloTransp.getAttribute('selected').then(function(habilitado) {
					if (habilitado) {
						helper.waitElementVisibility(configuracaopo.urlSteloFormPagSteloTransp);
						expect (configuracaopo.urlSteloFormPagSteloTransp.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.urlStatusFormPagSteloTransp.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.clientIdFormPagSteloTransp.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.clientSecretoFormPagSteloTransp.getAttribute('value')).not.toEqual('');
						configuracaopo.modoTesteFormPagSteloTransp.getAttribute('selected').then(function(ambienteTeste) {
							if (ambienteTeste) {
								expect (configuracaopo.modoTesteFormPagSteloTransp.getAttribute('selected')).toEqual('Está direcionando para ambiente de Teste');
							} else {
								console.log('ambiente está pagSeguro está direcionado para produção');
							};
						});

					} else {
						console.log('A forma de pagamento "Stelo Transparente CC" não está sendo utilizada');
					};
				});
			} else {
				console.log('menu não habilitado e não será testado');
			};
		});
	});

	it ('4.14 - Stelo Transparente Boleto: Válida se foi definido url stelo - url status - id cliente - cliente secreto - se foi direcionado para ambiente de produção', function() {
		configuracaopo.menuFormPagSteloBoleto.isPresent().then (function(ativo) {
			if (ativo !== false) {
				configuracaopo.menuFormPagSubSteloTranspBoleto();
				helper.waitElementVisibility(configuracaopo.inputHabilitaFormPagSteloBoleto);
				configuracaopo.inputHabilitaFormPagSteloBoleto.getAttribute('selected').then(function(habilitado) {
					if (habilitado) {
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubSteloTranspBoleto();
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubSteloTranspConfAtiva();
						helper.waitElementVisibility(configuracaopo.urlSteloFormPagSteloTransp);
						expect (configuracaopo.urlSteloFormPagSteloTransp.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.urlStatusFormPagSteloTransp.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.clientIdFormPagSteloTransp.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.clientSecretoFormPagSteloTransp.getAttribute('value')).not.toEqual('');
						configuracaopo.modoTesteFormPagSteloTransp.getAttribute('selected').then(function(ambienteTeste) {
							if (ambienteTeste) {
								expect (configuracaopo.modoTesteFormPagSteloTransp.getAttribute('selected')).toEqual('Está direcionando para ambiente de Teste');
							} else {
								console.log('ambiente está pagSeguro está direcionado para produção');
							};
						});
					} else {
						console.log('A forma de pagamento "Stelo Transparente Boleto" não está sendo utilizada');
					};
				});
			} else {
				console.log('menu não habilitado e não será testado');
			};
		});
	});

	it ('4.15 - MundiPagg Cartão de Crédito 1 - Válida api URL - chave - se está direcionado para o ambiente de produção', function() {
		configuracaopo.menuFormPagMundiPaggCC1.isPresent().then (function(ativo) {
			if (ativo !== false) {
				configuracaopo.menuFormPagSubMundiPaggCC1();
				helper.waitElementVisibility(configuracaopo.inputHabilitaFormPagMundiPaggCC1);
				configuracaopo.inputHabilitaFormPagMundiPaggCC1.getAttribute('selected').then(function(habilitado) {
					if (habilitado) {
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubMundiPaggCC1();
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubMundiPaggConf();
						helper.waitElementVisibility(configuracaopo.apiUrlmenuFormPagMundiPaggConfig);
						expect (configuracaopo.apiUrlmenuFormPagMundiPaggConfig.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.chavemenuFormPagMundiPaggConfig.getAttribute('value')).not.toEqual('');
						configuracaopo.modoTestemenuFormPagMundiPaggConfig.getAttribute('selected').then(function(ambienteTeste) {
							if (ambienteTeste) {
								expect (configuracaopo.modoTestemenuFormPagMundiPaggConfig.getAttribute('selected')).toEqual('Está direcionando para ambiente de Teste');
							} else {
								console.log('ambiente está pagSeguro está direcionado para produção');
							};
						});
					} else {
						console.log('A forma de pagamento "MundiPagg - Cartão de Crédito 1" não está sendo utilizada');
					};
				});
			} else {
				console.log('menu não habilitado e não será testado');
			};
		});
	});

	it ('4.16 - MundiPagg Cartão de Crédito 2 - Válida api URL - chave e se está direcionado para o ambiente de produção', function() {
		configuracaopo.menuFormPagMundiPaggCC2.isPresent().then (function(ativo) {
			if (ativo !== false) {
				configuracaopo.menuFormPagSubMundiPaggCC2();
				helper.waitElementVisibility(configuracaopo.inputHabilitaFormPagMundiPaggCC2);
				configuracaopo.inputHabilitaFormPagMundiPaggCC2.getAttribute('selected').then(function(habilitado) {
					if (habilitado) {
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubMundiPaggCC2();
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubMundiPaggConf();
						helper.waitElementVisibility(configuracaopo.apiUrlmenuFormPagMundiPaggConfig);
						expect (configuracaopo.apiUrlmenuFormPagMundiPaggConfig.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.chavemenuFormPagMundiPaggConfig.getAttribute('value')).not.toEqual('');
						configuracaopo.modoTestemenuFormPagMundiPaggConfig.getAttribute('selected').then(function(ambienteTeste) {
							if (ambienteTeste) {
								expect (configuracaopo.modoTestemenuFormPagMundiPaggConfig.getAttribute('selected')).toEqual('Está direcionando para ambiente de Teste');
							} else {
								console.log('ambiente está pagSeguro está direcionado para produção');
							};
						});
					} else {
						console.log('A forma de pagamento "MundiPagg - Cartão de Crédito 2" não está sendo utilizada');
					};
				});
			} else {
				console.log('menu não habilitado e não será testado');
			};
		});
	});

	it ('4.17 - MundiPagg Boleto - Válida api URL - chave - se está direcionado para o ambiente de produção.', function() {
		configuracaopo.menuFormPagMundiPaggBoleto.isPresent().then (function(ativo) {
			if (ativo !== false) {
				configuracaopo.menuFormPagSubMundiPaggBoleto();
				helper.waitElementVisibility(configuracaopo.inputHabilitaFormPagMundiPaggBoleto);
				configuracaopo.inputHabilitaFormPagMundiPaggBoleto.getAttribute('selected').then(function(habilitado) {
					if (habilitado) {
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubMundiPaggBoleto();
						browser.driver.sleep(1000);
						configuracaopo.menuFormPagSubMundiPaggConf();
						helper.waitElementVisibility(configuracaopo.apiUrlmenuFormPagMundiPaggConfig);
						expect (configuracaopo.apiUrlmenuFormPagMundiPaggConfig.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.chavemenuFormPagMundiPaggConfig.getAttribute('value')).not.toEqual('');
						configuracaopo.modoTestemenuFormPagMundiPaggConfig.getAttribute('selected').then(function(ambienteTeste) {
							if (ambienteTeste) {
								expect (configuracaopo.modoTestemenuFormPagMundiPaggConfig.getAttribute('selected')).toEqual('Está direcionando para ambiente de Teste');
							} else {
								console.log('ambiente está pagSeguro está direcionado para produção');
							};
						});
					} else {
						console.log('A forma de pagamento "MundiPagg Boleto" não está sendo utilizada');
					};
				});
			} else {
				console.log('menu não habilitado e não será testado');
			};
		});
	});

	it ('4.18 - PagSeguro UOL - Verifica se foi informado e-mail - token - url redirecionamento - url notificação - se está direcionado para o ambiente de produção', function() {
		configuracaopo.menuFormPagPagSeguroUOL.isPresent().then (function(ativo) {
			if (ativo !== false) {
				configuracaopo.menuFormPagSubPagSeguroUOL();
				helper.waitElementVisibility(configuracaopo.inputHabilitaFormPagPagSeguroUOL);
				configuracaopo.inputHabilitaFormPagPagSeguroUOL.getAttribute('selected').then(function(habilitado) {
					if (habilitado) {
						helper.waitElementVisibility(configuracaopo.emailFormPagPagSeguroUOL);
						expect (configuracaopo.emailFormPagPagSeguroUOL.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.tokenFormPagPagSeguroUOL.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.urlRedirecionamentoFormPagPagSeguroUOL.getAttribute('value')).not.toEqual('');
						expect (configuracaopo.urlNotificacaoFormPagPagSeguroUOL.getAttribute('value')).not.toEqual('');
						configuracaopo.modoTesteFormPagPagSeguroUOL.getAttribute('selected').then(function(ambienteTeste) {
							if (ambienteTeste) {
								expect (configuracaopo.modoTesteFormPagPagSeguroUOL.getAttribute('selected')).toEqual('Está direcionando para ambiente de Teste');
							} else {
								console.log('ambiente está pagSeguro está direcionado para produção');
							};
						});
					} else {
						console.log('A forma de pagamento "PagSeguro UOL" não está sendo utilizada');
					};
				});
			} else {
				console.log('menu não habilitado e não será testado');
			};
		});
	});

});

describe ('5 - Verificar se as informações gerais sobre a loja estão preenchidas em sistema - configuração - geral - geral - informações sobre a loja', function() {
	it ('Verifica se foi informado dados nos campos - Titulo da Loja - Telefone de Contato - CNPJ e Endereço', function() {
		geralpo.acessaMenuConfiguracao();
		configuracaopo.acessaMenuGeralSubGeral();
		configuracaopo.divInfoLojaAtiva.getCssValue('display').then (function(propriedade) {
			if(propriedade =='none') {
				configuracaopo.acessaSubMenuInfoLoja();
				helper.waitElementVisibility(configuracaopo.inputtituloLoja);
				helper.waitElementVisibility(configuracaopo.inputTelContatoLoja);
				helper.waitElementVisibility(configuracaopo.inputCNPJLoja);
				helper.waitElementVisibility(configuracaopo.inputEnderecoLoja);
				expect (configuracaopo.inputtituloLoja.getAttribute('value')).not.toEqual('');
				expect (configuracaopo.inputTelContatoLoja.getAttribute('value')).not.toEqual('');
				expect (configuracaopo.inputCNPJLoja.getAttribute('value')).not.toEqual('');
				expect (configuracaopo.inputEnderecoLoja.getAttribute('value')).not.toEqual('');
			} else {
				helper.waitElementVisibility(configuracaopo.inputtituloLoja);
				helper.waitElementVisibility(configuracaopo.inputTelContatoLoja);
				helper.waitElementVisibility(configuracaopo.inputCNPJLoja);
				helper.waitElementVisibility(configuracaopo.inputEnderecoLoja);
				expect (configuracaopo.inputtituloLoja.getAttribute('value')).not.toEqual('');
				expect (configuracaopo.inputTelContatoLoja.getAttribute('value')).not.toEqual('');
				expect (configuracaopo.inputCNPJLoja.getAttribute('value')).not.toEqual('');
				expect (configuracaopo.inputEnderecoLoja.getAttribute('value')).not.toEqual('');
			};
		});
	});
});

describe ('6 - Verificar se os e-mails de contato estão preenchidos em sistema - configuração - geral - e-mails de contato. Será visto se consta o domínio padrão ou se o campo está vazio.', function() {

	beforeEach(function() {
		geralpo.acessaMenuConfiguracao();
		configuracaopo.acessaMenuGeralSubEmailContato();
		browser.driver.sleep(1000);

		//Garante que nenhum menu esteja ativo ao iniciar os testes e não impactar na captura dos elementos.
		configuracaopo.divContatoGeralAtivaEmailCont.getCssValue('display').then(function(propriedade) {
			if(propriedade !== 'none') {
				browser.driver.sleep(500);
				configuracaopo.acessaMenuEmailContatoSubContatoGeral();
			} else {
				console.log('menu Contato Geral fechado');
			};
		});

		configuracaopo.divVendasAtivaEmailCont.getCssValue('display').then(function(propriedade) {
			if (propriedade !== 'none') {
				browser.driver.sleep(500);
				configuracaopo.acessaMenuEmailContatoSubVendas();
			} else {
				console.log('menu Vendas fechado');
			}
		});

		configuracaopo.divSuporteAtivaEmailCont.getCssValue('display').then(function(propriedade) {
			if (propriedade !== 'none') {
				browser.driver.sleep(500);
				configuracaopo.acessaMenuEmailContatoSubSuporte();
			} else {
				console.log('menu Suporte fechado');
			};
		});

		configuracaopo.divPersonalizado1EmailCont.getCssValue('display').then(function(propriedade) {
			if (propriedade !== 'none') {
				browser.driver.sleep(500);
				configuracaopo.acessaMenuEmailContatoSubPersonalizado1();
			} else {
				console.log('menu Personalizado 1 fechado');
			};
		});

		configuracaopo.divPersonalizado2EmailCont.getCssValue('display').then(function(propriedade) {
			if (propriedade !== 'none') {
				browser.driver.sleep(500);
				configuracaopo.acessaMenuEmailContatoSubPersonalizado2();
			} else {
				console.log('menu Personalizado 2 fechado');
			};
		});
	});

	it ('6.1 - Contato Geral - Verifica se o e-mail não tem a informação seudominio ou se está vazio', function() {
		browser.driver.sleep(1000);
		configuracaopo.acessaMenuEmailContatoSubContatoGeral();
		helper.waitElementVisibility(configuracaopo.inputEmailContatoGeralEmailCont);
		expect (configuracaopo.inputEmailContatoGeralEmailCont.getAttribute('value')).not.toEqual('contato@seudominio.com.br');		
		configuracaopo.inputEmailContatoGeralEmailCont.getAttribute('value').then (function (value) {
			if (((value.indexOf('@')) > -1) && ((value.indexOf('.com')) > -1) ) {
				console.log ('e-mail informado possui @ e .com');
			} else {
				expect (configuracaopo.inputEmailContatoGeralEmailCont.getAttribute('value')).toContain('@');
				expect (configuracaopo.inputEmailContatoGeralEmailCont.getAttribute('value')).toContain('.com');
			};
		});	
	});

	it ('6.2 - Vendas - Verifica se o e-mail não tem a informação seudominio ou se está vazio', function() {
		browser.driver.sleep(1000);
		configuracaopo.acessaMenuEmailContatoSubVendas();
		helper.waitElementVisibility(configuracaopo.inputEmailVendasEmailCont);
		expect (configuracaopo.inputEmailVendasEmailCont.getAttribute('value')).not.toEqual('vendas@seudominio.com.br');		
		configuracaopo.inputEmailVendasEmailCont.getAttribute('value').then (function (value) {
			if (((value.indexOf('@')) > -1) && ((value.indexOf('.com')) > -1) ) {
				console.log ('e-mail informado possui @ e .com');
			} else {
				expect (configuracaopo.inputEmailVendasEmailCont.getAttribute('value')).toContain('@');
				expect (configuracaopo.inputEmailVendasEmailCont.getAttribute('value')).toContain('.com');
			};
		});	
	});

	it ('6.3 - Suporte - Verifica se o e-mail não tem a informação seudominio ou se está vazio', function() {
		browser.driver.sleep(1000);
		configuracaopo.acessaMenuEmailContatoSubSuporte();
		helper.waitElementVisibility(configuracaopo.inputEmailSuporteEmailCont);
		expect (configuracaopo.inputEmailSuporteEmailCont.getAttribute('value')).not.toEqual('suporte@seudominio.com.br');		
		configuracaopo.inputEmailSuporteEmailCont.getAttribute('value').then (function (value) {
			if (((value.indexOf('@')) > -1) && ((value.indexOf('.com')) > -1) ) {
				console.log ('e-mail informado possui @ e .com');
			} else {
				expect (configuracaopo.inputEmailSuporteEmailCont.getAttribute('value')).toContain('@');
				expect (configuracaopo.inputEmailSuporteEmailCont.getAttribute('value')).toContain('.com');
			};
		});	
	});

	it ('6.4 - Personalizado 1 - Verifica se o e-mail não tem a informação seudominio ou se está vazio', function() {
		browser.driver.sleep(1000);
		configuracaopo.acessaMenuEmailContatoSubPersonalizado1();
		helper.waitElementVisibility(configuracaopo.inputEmailPersonalizado1EmailCont);
		expect (configuracaopo.inputEmailPersonalizado1EmailCont.getAttribute('value')).not.toEqual('personalizado1@seudominio.com.br');		
		configuracaopo.inputEmailPersonalizado1EmailCont.getAttribute('value').then (function (value) {
			if (((value.indexOf('@')) > -1) && ((value.indexOf('.com')) > -1) ) {
				console.log ('e-mail informado possui @ e .com');
			} else {
				expect (configuracaopo.inputEmailPersonalizado1EmailCont.getAttribute('value')).toContain('@');
				expect (configuracaopo.inputEmailPersonalizado1EmailCont.getAttribute('value')).toContain('.com');
			};
		});	
	});

	it ('6.5 - Personalizado 2 - Verifica se o e-mail não tem a informação seudominio ou se está vazio', function() {
		browser.driver.sleep(1000);
		configuracaopo.acessaMenuEmailContatoSubPersonalizado2();
		helper.waitElementVisibility(configuracaopo.inputEmailPersonalizado2EmailCont);
		expect (configuracaopo.inputEmailPersonalizado2EmailCont.getAttribute('value')).not.toEqual('personalizado2@seudominio.com.br');		
		configuracaopo.inputEmailPersonalizado2EmailCont.getAttribute('value').then (function (value) {
			if (((value.indexOf('@')) > -1) && ((value.indexOf('.com')) > -1) ) {
				console.log ('e-mail informado possui @ e .com');
			} else {
				expect (configuracaopo.inputEmailPersonalizado2EmailCont.getAttribute('value')).toContain('@');
				expect (configuracaopo.inputEmailPersonalizado2EmailCont.getAttribute('value')).toContain('.com');
			};
		});	
	});
});

describe ('7 - Verificar o remetente dos e-mails do fale conosco e qual e-mail deve receber cópia dos mesmos em sistema - configuração - geral  contato', function() {
	it ('Verifica se o campo de e-mail não contém a informação seudominio ou está vazio', function() {
		geralpo.acessaMenuConfiguracao();
		configuracaopo.acessaMenuGeralSubContatos();
		browser.driver.sleep(1000);

		configuracaopo.divOpcoesDeEmailmenuContato.getCssValue('display').then(function(propriedade) {
			if(propriedade === 'none') {
				configuracaopo.acessaMenuOpcoesEmail();
				helper.waitElementVisibility(configuracaopo.inputEmailEnviarEmailParaMenuContato);
				expect (configuracaopo.inputEmailEnviarEmailParaMenuContato.getAttribute('value')).not.toEqual('faleconosco@seudominio.com.br');		
				configuracaopo.inputEmailEnviarEmailParaMenuContato.getAttribute('value').then (function (value) {
					if (((value.indexOf('@')) > -1) && ((value.indexOf('.com')) > -1) ) {
						console.log ('e-mail informado possui @ e .com');
					} else {
						expect (configuracaopo.inputEmailEnviarEmailParaMenuContato.getAttribute('value')).toContain('@');
						expect (configuracaopo.inputEmailEnviarEmailParaMenuContato.getAttribute('value')).toContain('.com');
					};
				});
			} else {
				helper.waitElementVisibility(configuracaopo.inputEmailEnviarEmailParaMenuContato);
				expect (configuracaopo.inputEmailEnviarEmailParaMenuContato.getAttribute('value')).not.toEqual('faleconosco@seudominio.com.br');		
				configuracaopo.inputEmailEnviarEmailParaMenuContato.getAttribute('value').then (function (value) {
					if (((value.indexOf('@')) > -1) && ((value.indexOf('.com')) > -1) ) {
						console.log ('e-mail informado possui @ e .com');
					} else {
						expect (configuracaopo.inputEmailEnviarEmailParaMenuContato.getAttribute('value')).toContain('@');
						expect (configuracaopo.inputEmailEnviarEmailParaMenuContato.getAttribute('value')).toContain('.com');
					};
				});
			};
		});
	});
});

describe('8 - Verificar dados de origem de entrega da loja em sistema - configuração - vendas - configurações de entrega - origem da entrega', function() {
	it ('Verificar se o campo CEP não está vazio ou não está com o CEP padrão 30120070', function() {
		geralpo.acessaMenuConfiguracao();
		configuracaopo.acessaMenuVendasSubConfEntrega();
		browser.driver.sleep(1000);
		configuracaopo.divOrigemEntregaConfEntrega.getCssValue('display').then(function(propriedade) {
			if (propriedade === 'none') {
				configuracaopo.acessaMenuVendasSubOrigemEntrega();
				helper.waitElementVisibility(configuracaopo.inputCEPOrigemEntrega);
				configuracaopo.inputCEPOrigemEntrega.getAttribute('value').then(function(cep) {
					if (cep === '') {
						expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toEqual('');
					} else if (cep === '30120070') {
						expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toEqual('30120070');
						var digitosCPF = cep.length;
						console.log('teste digitos :' + digitosCPF);
					} else {
						if (digitosCPF >= 8) {
							if (((cep.indexOf('.')) > -1) || ((cep.indexOf(' ')) > -1) 
								|| ((cep.indexOf('-')) > -1) || ((cep.indexOf('/')) > -1)) {
								expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toContain('.');
								expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toContain(' ');
								expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toContain('-');
								expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toContain('/');
							} else {
								console.log('cep informado é igual ou maior que 8 digitos e não possui caracteres: ., espaço, - ou /');
								expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toContain('Cep válido');
							}
						} else {
							expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toContain('.');
							expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toContain(' ');
							expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toContain('-');
							expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toContain('/');
							expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toContain('não contém 8 digitos');
						};
					};
				});
			} else {
				helper.waitElementVisibility(configuracaopo.inputCEPOrigemEntrega);
				configuracaopo.inputCEPOrigemEntrega.getAttribute('value').then(function(cep) {
					if (cep === '') {
						expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toEqual('');
					} else if (cep === '30120070') {
						expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toEqual('30120070');
					} else {
						if (digitosCPF >= 8) {
							if (((cep.indexOf('.')) > -1) || ((cep.indexOf(' ')) > -1) 
								|| ((cep.indexOf('-')) > -1) || ((cep.indexOf('/')) > -1)) {
								expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toContain('.');
								expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toContain(' ');
								expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toContain('-');
								expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toContain('/');
							} else {
								console.log('cep informado é igual ou maior que 8 digitos e não possui caracteres: ., espaço, - ou /');
								expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toContain('Cep válido');
							}
						} else {
							expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toContain('.');
							expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toContain(' ');
							expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toContain('-');
							expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toContain('/');
							expect (configuracaopo.inputCEPOrigemEntrega.getAttribute('value')).not.toContain('não contém 8 digitos');
						};
					};
				});
			};
		});
	});
});

describe('9 - Verificar configuração geral de SEO em sistema - configuração - geral - template - cabeçalho HTML', function() {
	it ('9.1 - Verifica se foi informado imagem favicon', function() {
		geralpo.acessaMenuConfiguracao();
		configuracaopo.acessaMenuGeralSubTemplate();
		browser.driver.sleep(1000);
		configuracaopo.divCabecalhoHTMLAtiva.getCssValue('display').then(function(propriedade) {
			if (propriedade === 'none') {
				configuracaopo.acessaMenuTemplateSubCabecalhoHTML();
				browser.driver.sleep(1000);
				expect (configuracaopo.inputFaviconCabecalhoHTML.isDisplayed()).toBe(true);
			} else {
				browser.driver.sleep(1000);
				expect (configuracaopo.inputFaviconCabecalhoHTML.isDisplayed()).toBe(true);
			};
		});
	});

	it ('9.2 - Verifica se o título padrão não está vazio e diferente de Magento Commerce', function() {
		geralpo.acessaMenuConfiguracao();
		configuracaopo.acessaMenuGeralSubTemplate();
		browser.driver.sleep(1000);
		configuracaopo.divCabecalhoHTMLAtiva.getCssValue('display').then(function(propriedade) {
			if (propriedade === 'none') {
				configuracaopo.acessaMenuTemplateSubCabecalhoHTML();
				helper.waitElementVisibility(configuracaopo.inputTituloPadraoCabecalhoHTML);
				configuracaopo.inputTituloPadraoCabecalhoHTML.getAttribute('value').then(function(propriedade) {
					if (propriedade === '') {
						expect (configuracaopo.inputTituloPadraoCabecalhoHTML.getAttribute('value')).not.toEqual('');
					} else if (propriedade === 'Magento Commerce') {
						expect (configuracaopo.inputTituloPadraoCabecalhoHTML.getAttribute('value')).not.toEqual('Magento Commerce');
					} else {
						console.log ('foi informado um título que é diferente do padrão do setup');
						expect (configuracaopo.inputTituloPadraoCabecalhoHTML.getAttribute('value')).toEqual(propriedade);
					};
				});
			} else {
				helper.waitElementVisibility(configuracaopo.inputTituloPadraoCabecalhoHTML);
				configuracaopo.inputTituloPadraoCabecalhoHTML.getAttribute('value').then(function(propriedade) {
					if (propriedade === '') {
						expect (configuracaopo.inputTituloPadraoCabecalhoHTML.getAttribute('value')).not.toEqual('');
					} else if (propriedade === 'Magento Commerce') {
						expect (configuracaopo.inputTituloPadraoCabecalhoHTML.getAttribute('value')).not.toEqual('Magento Commerce');
					} else {
						console.log ('foi informado um título que é diferente do padrão do setup');
						expect (configuracaopo.inputTituloPadraoCabecalhoHTML.getAttribute('value')).toEqual(propriedade);
					};
				});
			};
		});
	});

	it ('9.3 - Verifica se a Descrição Padrão não está vazia e diferente da descrição padrão Default Description', function() {
		geralpo.acessaMenuConfiguracao();
		configuracaopo.acessaMenuGeralSubTemplate();
		browser.driver.sleep(1000);
		configuracaopo.divCabecalhoHTMLAtiva.getCssValue('display').then(function(propriedade) {
			if (propriedade === 'none') {
				configuracaopo.acessaMenuTemplateSubCabecalhoHTML();
				helper.waitElementVisibility(configuracaopo.inputDescricaoPadraoCabecalhoHTML);
				configuracaopo.inputDescricaoPadraoCabecalhoHTML.getText().then(function(texto) {
					if (texto === '') {
						expect (configuracaopo.inputDescricaoPadraoCabecalhoHTML.getText()).not.toEqual('');
					} else if (texto === 'Default Description') {
						expect (configuracaopo.inputDescricaoPadraoCabecalhoHTML.getText()).not.toEqual('Default Description');
					} else {
						console.log ('foi informado uma Descrição diferente do padrão do setup');
						expect (configuracaopo.inputDescricaoPadraoCabecalhoHTML.getText()).toEqual(texto);
					};
				});
			} else {
				helper.waitElementVisibility(configuracaopo.inputDescricaoPadraoCabecalhoHTML);
				configuracaopo.inputDescricaoPadraoCabecalhoHTML.getText().then(function(texto) {
					if (texto === '') {
						expect (configuracaopo.inputDescricaoPadraoCabecalhoHTML.getText()).not.toEqual('');
					} else if (texto === 'Default Description') {
						expect (configuracaopo.inputDescricaoPadraoCabecalhoHTML.getText()).not.toEqual('Default Description');
					} else {
						console.log ('foi informado uma Descrição diferente do padrão do setup');
						expect (configuracaopo.inputDescricaoPadraoCabecalhoHTML.getText()).toEqual(texto);
					};
				});
			};
		});
	});

	it ('9.4 - Verifica se o campo palavras-chaves não está vazio e diferente do padrão - Magento, Varien, E-commerce', function() {
		geralpo.acessaMenuConfiguracao();
		configuracaopo.acessaMenuGeralSubTemplate();
		browser.driver.sleep(1000);
		configuracaopo.divCabecalhoHTMLAtiva.getCssValue('display').then(function(propriedade) {
			if (propriedade === 'none') {
				configuracaopo.acessaMenuTemplateSubCabecalhoHTML();
				browser.driver.sleep(1000);
				helper.waitElementVisibility(configuracaopo.inputPalavrasChavesCabecalhoHTML);
				configuracaopo.inputPalavrasChavesCabecalhoHTML.getText().then(function(texto) {
					if (texto === '') {
						expect (configuracaopo.inputPalavrasChavesCabecalhoHTML.getText()).not.toEqual('');
					} else if (texto === 'Magento, Varien, E-commerce') {
						expect (configuracaopo.inputPalavrasChavesCabecalhoHTML.getText()).not.toEqual('Magento, Varien, E-commerce');
					} else {
						console.log ('foram informadas palavras-chaves diferente do padrão do setup'+  texto);
						expect (configuracaopo.inputPalavrasChavesCabecalhoHTML.getText()).toEqual(texto);
					};
				});
			} else {
				browser.driver.sleep(1000);
				helper.waitElementVisibility(configuracaopo.inputPalavrasChavesCabecalhoHTML);
				configuracaopo.inputPalavrasChavesCabecalhoHTML.getText().then(function(texto) {
					if (texto === '') {
						expect (configuracaopo.inputPalavrasChavesCabecalhoHTML.getText()).not.toEqual('');
					} else if (texto === 'Magento, Varien, E-commerce') {
						expect (configuracaopo.inputPalavrasChavesCabecalhoHTML.getText()).not.toEqual('Magento, Varien, E-commerce');
					} else {
						console.log ('foram informadas palavras-chaves diferente do padrão do setup ' +  texto);
						expect (configuracaopo.inputPalavrasChavesCabecalhoHTML.getText()).toEqual(texto);
					};
				});
			};
		});
	});
});


/*describe ('10 - Verificar se existe algum produto habilitado e que está vinculado a uma categoria, disponível em estoque e que não possui imagem', function() {
	it ('Verificar se tem imagem e se alguma está parametrizada como base image', function() {
		geralpo.selecionaTelaGerenciarProdutos();

		gerenciarProdutospo.listaTabelaProdutos.getText().filter (function (element, index) {
			console.log('elemento: ' + element);
			console.log('index: ' + index);
		});
		gerenciarProdutospo.qtdeTotalDeProdutos.getAttribute('span').then (function (qtdeProdutos) {
			console.log('Quantidade de Produtos: ' + qtdeProdutos);
			for (var i = 0; i = qtdeProdutos-1; ++i ) {
				gerenciarProdutospo.listaDeProdutos.get(i).getAttribute('value').then (function (codProduto) {
					console.log('Código do Elemento: ' + codProduto);
				});
			};
		});
	});
});*/
