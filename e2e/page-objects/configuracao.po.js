//configuracao.po.js

'use strict';  
var helper = require('../helper/helper.js');

var configuracaopo = function() {

	//Nome da Loja em Gerenciar Loja
	this.NomeLojaGerenciarLoja = element(by.id('store_switcher'));
	this.linhaRefNomeLoja = element(by.css('#store_switcher > optgroup'));

	this.selecionaNomeLojaGerenciarLoja = function() {
		helper.waitElementVisibility(this.NomeLojaGerenciarLoja);
		this.NomeLojaGerenciarLoja.click();
	};

	//Vendas > Forma de Pagamento
	this.menuVendasSubFormaPagamento = element(by.css('#system_config_tabs > li:nth-child(12) > dl > dd:nth-child(9) > a > span'));

	this.selecionaMenuVendasSubFormaPagamento = function() {
		helper.waitElementVisibility(this.menuVendasSubFormaPagamento);
		this.menuVendasSubFormaPagamento.click();
	};

	//Vendas > Forma de Pagamento >Bank Transfer Payment
	this.menuFormPagBankTransferPayment = element(by.id('payment_banktransfer-head'));
	this.divFormPagBankTransferPaymentAtiva = element(by.id('payment_banktransfer'));
	this.inputHabilitaFormPagBankTransferPayment = element(by.id('payment_banktransfer_active'));

	this.acessaMenuFormPagSubBankTransferPayment = function() {
		helper.waitElementVisibility(this.menuFormPagBankTransferPayment);
		this.menuFormPagBankTransferPayment.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > Dinheiro / Cheque
	this.menuFormPagDinheiroCheque = element(by.id('payment_checkmo-head'));
	this.divFormPagDinheiroChequeAtiva = element(by.id('payment_checkmo'));
	this.inputHabilitaFormPagDinheiroCheque = element(by.id('payment_checkmo_active'));

	this.acessaMenuFormPagSubDinheiroCheque = function() {
		helper.waitElementVisibility(this.menuFormPagDinheiroCheque);
		this.menuFormPagDinheiroCheque.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > Finalizar Compra com Subtotal Zero
	this.menuFormPagCompraSubtotalZero = element(by.id('payment_free-head'));
	this.divFormPagCompraSubtotalZeroAtiva = element(by.id('payment_free'));
	this.inputHabilitaFormPagCompraSubtotalZero = element(by.id('payment_free_active'));

	this.acessaMenuFormPagSubFinalizarCompraSubtotalZero = function() {
		helper.waitElementVisibility(this.menuFormPagCompraSubtotalZero);
		this.menuFormPagCompraSubtotalZero.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > Finalizar Cash On Delivery Payment
	this.menuFormPagCashOnDeliveryPayment = element(by.id('payment_cashondelivery-head'));
	this.divFormPagCashOnDeliveryPaymentAtiva = element(by.id('payment_cashondelivery'));
	this.inputHabilitaFormPagCashOnDeliveryPayment = element(by.id('payment_cashondelivery_active'));

	this.acessaMenuFormPagSubFinalizarCashOnDelivery = function() {
		helper.waitElementVisibility(this.menuFormPagCashOnDeliveryPayment);
		this.menuFormPagCashOnDeliveryPayment.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > Ordem de Compra
	this.menuFormPagOrdemCompra = element(by.id('payment_purchaseorder-head'));
	this.divFormPagOrdemCompraAtiva = element(by.id('payment_purchaseorder'));
	this.inputHabilitaFormPagOrdemCompra = element(by.id('payment_purchaseorder_active'));

	this.acessaMenuFormPagSubOrdemCompra = function() {
		helper.waitElementVisibility(this.menuFormPagOrdemCompra);
		this.menuFormPagOrdemCompra.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > Authorize.net Envio Direto
	this.menuFormPagAuthorizenetEnvioDireto = element(by.id('payment_authorizenet_directpost-head'));
	this.divFormPagAuthorizenetEnvioDiretoAtiva = element(by.id('payment_authorizenet_directpost'));
	this.inputHabilitaFormPagAuthorizenetEnvioDireto = element(by.id('payment_authorizenet_directpost_active'));
	this.apiLoginFormPagAuthorizenetEnvioDireto = element(by.id('payment_authorizenet_directpost_login'));
	this.chaveFormPagAuthorizenetEnvioDireto = element(by.id('payment_authorizenet_directpost_trans_key'));
	this.modoTesteFormPagAuthorizenetEnvioDireto = element(by.css('#payment_authorizenet_directpost_test > option:nth-child(1)'));
	this.vendedorFormPagAuthorizenetEnvioDireto = element(by.id('payment_authorizenet_directpost_trans_md5'));
	this.gatewayURLFormPagAuthorizenetEnvioDireto = element(by.id('payment_authorizenet_directpost_cgi_url'));

	this.menuFormPagSubAuthorizeNetEnvDireto = function() {
		helper.waitElementVisibility(this.menuFormPagAuthorizenetEnvioDireto);
		this.menuFormPagAuthorizenetEnvioDireto.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > Authorize.net
	this.menuFormPagAuthorizeNet = element(by.id('payment_authorizenet-head'));
	this.divFormPagAuthorizeNetAtiva = element(by.id('payment_authorizenet'));
	this.inputHabilitaFormPagAuthorizeNet = element(by.css('#payment_authorizenet_active > option:nth-child(1)'));
	this.apiLoginFormPagAuthorizeNet = element(by.id('payment_authorizenet_login'));
	this.emailVendedorFormPagAuthorizeNet = element(by.id('payment_authorizenet_merchant_email'));
	this.chaveFormPagAuthorizeNet = element(by.id('payment_authorizenet_trans_key'));
	this.gatewayURLFormPagAuthorizeNet = element(by.id('payment_authorizenet_cgi_url'));
	this.paymentURLFormPagAuthorizeNet = element(by.id('payment_authorizenet_cgi_url_td'));
	this.modoTesteFormPagAuthorizeNet = element(by.css('#payment_authorizenet_test > option:nth-child(1)'));

	this.menuFormPagSubAuthorizeNet = function() {
		helper.waitElementVisibility(this.menuFormPagAuthorizeNet);
		this.menuFormPagAuthorizeNet.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > Pagar.me - Configuração
	this.menuFormPagPagarMeConfiguracao = element(by.id('payment_pagarme_settings-head'));
	this.divFormPagPagarMeConfiguracaoAtiva = element(by.id('payment_pagarme_settings'));
	this.modoTesteFormPagPagarMeConfiguracao = element(by.css('#payment_pagarme_settings_mode > option:nth-child(1)'));
	this.chaveApiFormPagPagarMeConfiguracao = element(by.id('payment_pagarme_settings_apikey_test'));
	this.chaveCriptografiaFormPagPagarMeConfiguracao = element(by.id('payment_pagarme_settings_encryptionkey_test'));

	this.menuFormPagSubPagarMeConf = function() {
		helper.waitElementVisibility(this.menuFormPagPagarMeConfiguracao);
		this.menuFormPagPagarMeConfiguracao.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > Pagar.me - Boleto
	this.menuFormPagPagarMeBoleto = element(by.id('payment_pagarme_boleto-head'));
	this.divFormPagPagarMeBoletoAtiva = element(by.id('payment_pagarme_boleto'));
	this.inputHabilitaFormPagPagarMeBoleto = element(by.css('#payment_pagarme_boleto_active > option:nth-child(1)'));

	this.menuFormPagSubPagarMeBoleto = function() {
		helper.waitElementVisibility(this.menuFormPagPagarMeBoleto);
		this.menuFormPagPagarMeBoleto.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > Pagar.me - Cartão de Crédito
	this.menuFormPagPagarMeCC = element(by.id('payment_pagarme_cc-head'));
	this.divFormPagPagarMeCCAtiva = element(by.id('payment_pagarme_cc'));
	this.inputHabilitaFormPagPagarMeCC = element(by.css('#payment_pagarme_cc_active > option:nth-child(1)'));	

	this.menuFormPagSubPagarMeCC = function() {
		helper.waitElementVisibility(this.menuFormPagPagarMeCC);
		this.menuFormPagPagarMeCC.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > Pagar.me - Checkout
	this.menuFormPagPagarMeCheckout = element(by.id('payment_pagarme_checkout-head'));
	this.divFormPagPagarMeCheckoutAtiva = element(by.id('payment_pagarme_checkout'));
	this.inputHabilitaFormPagPagarMeCheckout = element(by.css('#payment_pagarme_checkout_active > option:nth-child(1)'));

	this.menuFormPagSubPagarMeCheckout = function() {
		helper.waitElementVisibility(this.menuFormPagPagarMeCheckout);
		this.menuFormPagPagarMeCheckout.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > API Cielo 3.0
	this.menuFormPagCielo3Nitro = element(by.id('payment_nitrocielo-head'));
	this.divFormPagCielo3NitroAtiva = element(by.id('payment_nitrocielo'));
	this.inputHabilitaFormPagCielo3Nitro = element(by.css('#payment_nitrocielo_active > option:nth-child(1)'));
	this.modoTesteFormPagCielo3Nitro = element(by.css('#payment_nitrocielo_ambiente > option:nth-child(1)'));
	this.idVendedorFormPagCielo3Nitro = element(by.id('payment_nitrocielo_merchant_id'));
	this.chaveFormPagCielo3Nitro = element(by.id('payment_nitrocielo_merchant_key'));

	this.menuFormPagSubCielo3Nitro = function() {
		helper.waitElementVisibility(this.menuFormPagCielo3Nitro);
		this.menuFormPagCielo3Nitro.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > PagSeguro - Ricardo Martins: Configuração
	this.menuFormPagPagSeguroConfig = element(by.id('payment_rm_pagseguro-head'));
	this.divFormPagPagSeguroConfigAtiva = element(by.id('payment_rm_pagseguro'));
	this.emailFormPagPagSeguroConfig = element(by.id('payment_rm_pagseguro_merchant_email'));
	this.tokenFormPagPagSeguroConfig = element(by.id('payment_rm_pagseguro_token'));
	this.modoTesteFormPagPagSeguroConfig = element(by.css('#payment_rm_pagseguro_sandbox > option:nth-child(1)'));

	this.menuFormPagSubPagSeguroConf = function() {
		helper.waitElementVisibility(this.menuFormPagPagSeguroConfig);
		this.menuFormPagPagSeguroConfig.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > PagSeguro - Cartão de Crédito - Ricardo Martins
	this.menuFormPagPagSeguroCC = element(by.id('payment_rm_pagseguro_cc-head'));
	this.divFormPagPagSeguroCCAtiva = element(by.id('payment_rm_pagseguro_cc'));
	this.inputHabilitaFormPagPagSeguroCC = element(by.css('#payment_rm_pagseguro_cc_active > option:nth-child(1)'));

	this.menuFormPagSubPagSeguroCC = function() {
		helper.waitElementVisibility(this.menuFormPagPagSeguroCC);
		this.menuFormPagPagSeguroCC.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > PagSeguro - Boleto - Ricardo Martins
	this.menuFormPagSeguroBoleto = element(by.id('payment_pagseguropro_boleto-head'));
	this.divFormPagSeguroBoletoAtiva = element(by.id('payment_pagseguropro_boleto'));
	this.inputHabilitaFormPagSeguroBoleto = element(by.css('#payment_pagseguropro_boleto_active > option:nth-child(1)'));

	this.menuFormPagSubPagSeguroBoleto = function() {
		helper.waitElementVisibility(this.menuFormPagSeguroBoleto);
		this.menuFormPagSeguroBoleto.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > PagSeguro - TEF - Ricardo Martins
	this.menuFormPagPagSeguroTEF = element(by.id('payment_pagseguropro_tef-head'));
	this.divFormPagPagSeguroTEFAtiva = element(by.id('payment_pagseguropro_tef'));
	this.inputHabilitaFormPagPagSeguroTEF = element(by.css('#payment_pagseguropro_tef_active > option:nth-child(1)'));

	this.menuFormPagSubPagSeguroTEF = function () {
		helper.waitElementVisibility(this.menuFormPagPagSeguroTEF);
		this.menuFormPagPagSeguroTEF.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > maxiPago! - Configurações Globais
	this.menuFormPagMaxiPagoConfig = element(by.id('payment_maxipagocheckoutapi_global_config-head'));
	this.divFormPagMaxiPagoConfigAtiva = element(by.id('payment_maxipagocheckoutapi_global_config'));
	this.idFormPagMaxiPagoConfig = element(by.id('payment_maxipagocheckoutapi_global_config_sellerId'));
	this.chaveLojaFormPagMaxiPagoConfig = element(by.id('payment_maxipagocheckoutapi_global_config_sellerKey'));
	this.chaveSecretaFormPagMaxiPagoConfig = element(by.id('payment_maxipagocheckoutapi_global_config_secretKey'));
	this.modoTesteFormPagMaxiPagoConfig = element(by.css('#payment_maxipagocheckoutapi_global_config_sandbox > option:nth-child(1)'));

	this.menuFormPagSubMaxiPagoConf = function() {
		helper.waitElementVisibility(this.menuFormPagMaxiPagoConfig);
		this.menuFormPagMaxiPagoConfig.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > maxiPago! - Cartões de Crédito
	this.menuFormPagMaxiPagoCC = element(by.id('payment_maxipagocheckoutapi_creditcard-head'));
	this.divFormPagMaxiPagoCCAtiva = element(by.id('payment_maxipagocheckoutapi_creditcard'));
	this.inputHabilitaFormPagMaxiPagoCC = element(by.css('#payment_maxipagocheckoutapi_creditcard_active > option:nth-child(1)'));

	this.menuFormPagSubMaxiPagCC = function() {
		helper.waitElementVisibility(this.menuFormPagMaxiPagoCC);
		this.menuFormPagMaxiPagoCC.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > maxiPago! - Boleto
	this.menuFormPagMaxiPagoBoleto = element(by.id('payment_maxipagocheckoutapi_bankslip-head'));
	this.divFormPagMaxiPagoBoletoAtiva = element(by.id('payment_maxipagocheckoutapi_bankslip'));
	this.inputHabilitaFormPagMaxiPagoBoleto = element(by.css('#payment_maxipagocheckoutapi_bankslip_active > option:nth-child(1)'));

	this.menuFormPagSubMaxiPagoBoleto = function() {
		helper.waitElementVisibility(this.menuFormPagMaxiPagoBoleto);
		this.menuFormPagMaxiPagoBoleto.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > maxiPago! - Transferência Online
	this.menuFormPagMaxiTransferencia = element(by.id('payment_maxipagocheckoutapi_tef-head'));
	this.divFormPagMaxiPagoTransferenciaAtiva = element(by.id('payment_maxipagocheckoutapi_tef'));
	this.inputHabilitaFormPagMaxiPagoTransferencia = element(by.css('#payment_maxipagocheckoutapi_tef_active > option:nth-child(1)'));

	this.menuFormPagSubMaxiPagoTransfOnline = function() {
		helper.waitElementVisibility(this.menuFormPagMaxiTransferencia);
		this.menuFormPagMaxiTransferencia.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > Stelo Transparente CC- Configurações de ATIVAÇÃO
	this.menuFormPagSteloTransp = element(by.id('payment_sub-head'));
	this.divFormPagSteloTranspAtiva = element(by.id('payment_sub'));
	this.inputHabilitaFormPagSteloTransp = element(by.css('#payment_sub_active > option:nth-child(1)'));
	this.modoTesteFormPagSteloTransp = element(by.css('#payment_sub_ambiente > option:nth-child(1)'));
	this.urlSteloFormPagSteloTransp = element(by.id('payment_sub_url_api'));
	this.urlStatusFormPagSteloTransp = element(by.id('payment_sub_url_status_api'));
	this.clientIdFormPagSteloTransp = element(by.id('payment_sub_clientId'));
	this.clientSecretoFormPagSteloTransp = element(by.id('payment_sub_clientSecret'));

	this.menuFormPagSubSteloTranspConfAtiva = function() {
		helper.waitElementVisibility(this.menuFormPagSteloTransp);
		this.menuFormPagSteloTransp.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > Stelo Transparente - Configuração de PAGAMENTO - Boleto
	this.menuFormPagSteloBoleto = element(by.id('payment_subBoleto-head'));
	this.divFormPagSteloBoletoAtiva = element(by.id('payment_subBoleto'));
	this.inputHabilitaFormPagSteloBoleto = element(by.css('#payment_subBoleto_active > option:nth-child(1)'));

	this.menuFormPagSubSteloTranspBoleto = function() {
		helper.waitElementVisibility(this.menuFormPagSteloBoleto);
		this.menuFormPagSteloBoleto.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > MundiPagg - Configuração
	this.menuFormPagMundiPaggConfig = element(by.id('payment_mundipagg_standard-head'));
	this.divmenuFormPagMundiPaggConfigAtiva = element(by.id('payment_mundipagg_standard'));
	this.modoTestemenuFormPagMundiPaggConfig = element(by.css('#payment_mundipagg_standard_environment > option:nth-child(1)'));
	this.apiUrlmenuFormPagMundiPaggConfig = element(by.id('payment_mundipagg_standard_apiUrlStaging'));
	this.chavemenuFormPagMundiPaggConfig = element(by.id('payment_mundipagg_standard_merchantKeyStaging'));

	this.menuFormPagSubMundiPaggConf = function() {
		helper.waitElementVisibility(this.menuFormPagMundiPaggConfig);
		this.menuFormPagMundiPaggConfig.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > MundiPagg - Cartão de Crédito 1
	this.menuFormPagMundiPaggCC1 = element(by.id('payment_mundipagg_creditcard-head'));
	this.divFormPagMundiPaggCC1Ativa = element(by.id('payment_mundipagg_creditcard'));
	this.inputHabilitaFormPagMundiPaggCC1 = element(by.css('#payment_mundipagg_creditcard_active > option:nth-child(1)'));

	this.menuFormPagSubMundiPaggCC1 = function() {
		helper.waitElementVisibility(this.menuFormPagMundiPaggCC1);
		this.menuFormPagMundiPaggCC1.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > MundiPagg - Cartão de Crédito 2
	this.menuFormPagMundiPaggCC2 = element(by.id('payment_mundipagg_twocreditcards-head'));
	this.divFormPagMundiPaggCC2Ativa = element(by.id('payment_mundipagg_twocreditcards'));
	this.inputHabilitaFormPagMundiPaggCC2 = element(by.css('#payment_mundipagg_twocreditcards_active > option:nth-child(1)'));

	this.menuFormPagSubMundiPaggCC2 = function() {
		helper.waitElementVisibility(this.menuFormPagMundiPaggCC2);
		this.menuFormPagMundiPaggCC2.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > MundiPagg - Boleto
	this.menuFormPagMundiPaggBoleto = element(by.id('payment_mundipagg_boleto-head'));
	this.divFormPagMundiPaggBoletoAtiva = element(by.id('payment_mundipagg_boleto'));
	this.inputHabilitaFormPagMundiPaggBoleto = element(by.css('#payment_mundipagg_boleto_active > option:nth-child(1)'));

	this.menuFormPagSubMundiPaggBoleto = function() {
		helper.waitElementVisibility(this.menuFormPagMundiPaggBoleto);
		this.menuFormPagMundiPaggBoleto.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > PagSeguro UOL
	this.menuFormPagPagSeguroUOL = element(by.id('payment_pagseguro-head'));
	this.divFormPagPagSeguroUOLAtiva = element(by.id('payment_pagseguro'));
	this.inputHabilitaFormPagPagSeguroUOL = element(by.css('#payment_pagseguro_active > option:nth-child(1)'));
	this.modoTesteFormPagPagSeguroUOL = element(by.css('#payment_pagseguro_environment > option:nth-child(2)'));
	this.emailFormPagPagSeguroUOL = element(by.id('payment_pagseguro_email'));
	this.tokenFormPagPagSeguroUOL = element(by.id('payment_pagseguro_token'));
	this.urlRedirecionamentoFormPagPagSeguroUOL = element(by.id('payment_pagseguro_url'));
	this.urlNotificacaoFormPagPagSeguroUOL = element(by.id('payment_pagseguro_notification'));

	this.menuFormPagSubPagSeguroUOL = function() {
		helper.waitElementVisibility(this.menuFormPagPagSeguroUOL);
		this.menuFormPagPagSeguroUOL.sendKeys(protractor.Key.ENTER);
	};

	//Vendas > Forma de Pagamento > Bcash - Somente Pagamentos à Vista
	this.menuFormPagBcash = element(by.id('payment_pagamentodigital_vista-head'));
	this.divFormPagBcashAtiva = element(by.id('payment_pagamentodigital_vista'));
	this.inputHabilitaFormPagBcashSim = element(by.css('#payment_authorizenet_directpost_active > option:nth-child(1)'));
	this.emailFormPagBcash = element(by.id('payment_pagamentodigital_vista_emailID'));
	this.codFormPagBcash = element(by.id('payment_pagamentodigital_vista_lojaID'));
	this.tokenFormPagBcash =  element(by.id('payment_pagamentodigital_vista_token'));


	this.menuFormPagSubBcash = function() {
		helper.waitElementVisibility(this.menuFormPagBcash);
		this.menuFormPagBcash.sendKeys(protractor.Key.ENTER);
	};

	//vendas > configurações de entrega > origem da entrega
	this.menuVendasSubConfEntrega = element(by.cssContainingText('span','Configurações de Entrega'));
	this.menuConfEntregaSubOrigemEntrega = element(by.id('shipping_origin-head'));
	this.divOrigemEntregaConfEntrega = element(by.id('shipping_origin'));
	this.inputCEPOrigemEntrega = element(by.id('shipping_origin_postcode'));

	this.acessaMenuVendasSubConfEntrega = function() {
		helper.waitElementVisibility(this.menuVendasSubConfEntrega);
		this.menuVendasSubConfEntrega.click();
	};

	this.acessaMenuVendasSubOrigemEntrega = function() {
		helper.waitElementVisibility(this.menuConfEntregaSubOrigemEntrega);
		this.menuConfEntregaSubOrigemEntrega.click();
	};

	//Vendas > E-mail de Venda
	this.emailDeVenda = element(by.linkText('Email de Vendas'));

	this.pedidoEmailVenda = element(by.id('sales_email_order-head'));
	this.divPedidoEmailVendaAtiva = element(by.id('sales_email_order'));
	this.emailCopiaPedidoPara = element(by.id('sales_email_order_copy_to'));
	this.comentarioDoPedidoEmailVenda = element(by.id('sales_email_order_comment-head'));
	this.emailCopiaComentarioDoPedido = element(by.id('sales_email_order_comment_copy_to'));
	this.divComentarioDoPedidoEmailVendaAtiva = element(by.id('sales_email_order_comment'));
	this.faturaEmailVenda = element(by.id('sales_email_invoice-head'));
	this.divfaturaEmailVendaAtiva = element(by.id('sales_email_invoice'));
	this.emailCopiafaturaEmailVenda = element(by.id('sales_email_invoice_copy_to'));
	this.comentariosEmailVenda = element(by.id('sales_email_invoice_comment-head'));
	this.divComentariosEmailVendaAtiva = element(by.id('sales_email_invoice_comment'));
	this.emailComentariosEmailVenda = element(by.id('sales_email_invoice_comment_copy_to'));
	this.entregaEmailVenda = element(by.id('sales_email_shipment-head'));
	this.divEntregaEmailVendaAtiva = element(by.id('sales_email_shipment'));
	this.emailEntregaEmailVenda = element(by.id('sales_email_shipment_copy_to'));
	this.comentariosEntregaEmailVenda = element(by.id('sales_email_shipment_comment-head'));
	this.divComentariosEntregaEmailVenda = element (by.id('sales_email_shipment_comment'));
	this.emailComentariosEntregaEmailVenda = element(by.id('sales_email_shipment_comment_copy_to'));
	this.reembolsoEmailVenda = element(by.id('sales_email_creditmemo-head'));
	this.divReembolsoEmailVendaAtiva = element(by.id('sales_email_creditmemo'));
	this.emailReembolsoEmailVenda = element(by.id('sales_email_creditmemo_copy_to'));
	this.comentariosReembolsoEmailVenda = element(by.id('sales_email_creditmemo_comment-head'));
	this.divComentariosReembolsoEmailVendaAtiva = element(by.id('sales_email_creditmemo_comment'));
	this.emailComentariosReembolsoEmailVenda = element(by.id('sales_email_creditmemo_comment_copy_to'));

	this.selecionaEmailDeVenda = function() {
		helper.waitElementVisibility(this.emailDeVenda);
		this.emailDeVenda.click();
	};

	this.clickPedidoEmailVenda = function() {
		helper.waitElementVisibility(this.pedidoEmailVenda);
		this.pedidoEmailVenda.click();
	};

	this.clickComentarioPedidoEmailVenda = function() {
		helper.waitElementVisibility(this.comentarioDoPedidoEmailVenda);
		this.comentarioDoPedidoEmailVenda.click();
	};

	this.clickFaturaEmailVenda = function() {
		helper.waitElementVisibility(this.faturaEmailVenda);
		this.faturaEmailVenda.click();
	};

	this.clickComentariosEmailVenda = function() {
		helper.waitElementVisibility(this.comentariosEmailVenda);
		this.comentariosEmailVenda.click();
	};

	this.clickEntregaEmailVenda = function() {
		helper.waitElementVisibility(this.entregaEmailVenda);
		this.entregaEmailVenda.click();
	};

	this.clickComentariosEntregaEmailVenda = function() {
		helper.waitElementVisibility(this.comentariosEntregaEmailVenda);
		this.comentariosEntregaEmailVenda.click();
	};

	this.clickReembolsoEmailVenda = function() {
		helper.waitElementVisibility(this.reembolsoEmailVenda);
		this.reembolsoEmailVenda.click();
	};

	this.clickComentariosReembolsoEmailVenda = function() {
		helper.waitElementVisibility(this.comentariosReembolsoEmailVenda);
		this.comentariosReembolsoEmailVenda.click();
	}

	// Geral > Geral
	this.menuGeralSubGeral = element(by.css('#system_config_tabs > li:nth-child(3) > dl > dd:nth-child(2) > a > span'));
	this.divInfoLojaAtiva = element(by.id('general_store_information'));
	this.subMenuInfoLoja = element(by.id('general_store_information-head'));
	this.inputtituloLoja = element(by.id('general_store_information_name'));
	this.inputTelContatoLoja = element(by.id('general_store_information_phone'));
	this.inputCNPJLoja = element(by.id('general_store_information_merchant_vat_number'));
	this.inputEnderecoLoja = element(by.id('general_store_information_address'));

	this.acessaMenuGeralSubGeral = function() {
		helper.waitElementVisibility(this.menuGeralSubGeral);
		this.menuGeralSubGeral.click();
	};

	this.acessaSubMenuInfoLoja = function() {
		helper.waitElementVisibility(this.subMenuInfoLoja);
		this.subMenuInfoLoja.click();
	};

	//Geral > E-mail de Contato
	this.menuGeralSubEmailContato = element(by.cssContainingText('span','Emails de Contato'));

	this.acessaMenuGeralSubEmailContato = function() {
		helper.waitElementVisibility(this.menuGeralSubEmailContato);
		this.menuGeralSubEmailContato.click();
	};

	this.divContatoGeralAtivaEmailCont= element(by.id('trans_email_ident_general'));
	this.menuContatoGeralEmailCont = element(by.id('trans_email_ident_general-head'));
	this.inputEmailContatoGeralEmailCont = element(by.id('trans_email_ident_general_email'));

	this.divVendasAtivaEmailCont = element(by.id('trans_email_ident_sales'));
	this.menuVendasEmailCont = element(by.id('trans_email_ident_sales-head'));
	this.inputEmailVendasEmailCont = element(by.id('trans_email_ident_sales_email'));

	this.divSuporteAtivaEmailCont = element(by.id('trans_email_ident_support'));
	this.menuSuporteEmailCont = element(by.id('trans_email_ident_support-head'));
	this.inputEmailSuporteEmailCont = element(by.id('trans_email_ident_support_email'));

	this.divPersonalizado1EmailCont = element(by.id('trans_email_ident_custom1'));
	this.menuPersonalizado1EmailCont = element(by.id('trans_email_ident_custom1-head'));
	this.inputEmailPersonalizado1EmailCont = element(by.id('trans_email_ident_custom1_email'));

	this.divPersonalizado2EmailCont = element(by.id('trans_email_ident_custom2'));
	this.menuPersonalizado2EmailCont = element(by.id('trans_email_ident_custom2-head'));
	this.inputEmailPersonalizado2EmailCont = element(by.id('trans_email_ident_custom2_email'));

	this.acessaMenuEmailContatoSubContatoGeral = function() {
		helper.waitElementVisibility(this.menuContatoGeralEmailCont);
		this.menuContatoGeralEmailCont.click();
	};

	this.acessaMenuEmailContatoSubVendas = function() {
		helper.waitElementVisibility(this.menuVendasEmailCont);
		this.menuVendasEmailCont.click();
	};

	this.acessaMenuEmailContatoSubSuporte = function() {
		helper.waitElementVisibility(this.menuSuporteEmailCont);
		this.menuSuporteEmailCont.click();
	};

	this.acessaMenuEmailContatoSubPersonalizado1 = function() {
		helper.waitElementVisibility(this.menuPersonalizado1EmailCont);
		this.menuPersonalizado1EmailCont.click();
	};

	this.acessaMenuEmailContatoSubPersonalizado2 = function() {
		helper.waitElementVisibility(this.menuPersonalizado2EmailCont);
		this.menuPersonalizado2EmailCont.click();
	};

	//Geral > Contato
	this.menuGeralSubContatos = element(by.cssContainingText('span','Contatos'));
	this.menuOpcoesEmailmenuContato = element(by.id('contacts_email-head'));
	this.inputEmailEnviarEmailParaMenuContato = element(by.id('contacts_email_recipient_email'));
	this.divOpcoesDeEmailmenuContato = element(by.id('contacts_email'));

	this.acessaMenuGeralSubContatos = function() {
		helper.waitElementVisibility(this.menuGeralSubContatos);
		this.menuGeralSubContatos.click();
	};

	this.acessaMenuOpcoesEmail = function() {
		helper.waitElementVisibility(this.menuOpcoesEmailmenuContato);
		this.menuOpcoesEmailmenuContato.click();
	};

	//Geral > Template
	this.menuGeralSubTemplate = element(by.css('#system_config_tabs > li:nth-child(3) > dl > dd:nth-child(3) > a > span'));
	this.menuTemplateSubCabecalhoHTML = element(by.id('design_head-head'));
	this.divCabecalhoHTMLAtiva = element(by.id('design_head'));
	this.inputFaviconCabecalhoHTML = element(by.id('design_head_shortcut_icon_image'));
	this.inputTituloPadraoCabecalhoHTML = element(by.id('design_head_default_title'));
	this.inputDescricaoPadraoCabecalhoHTML = element(by.id('design_head_default_description'));
	this.inputPalavrasChavesCabecalhoHTML = element(by.id('design_head_default_keywords'));

	this.acessaMenuGeralSubTemplate = function() {
		helper.waitElementVisibility(this.menuGeralSubTemplate);
		this.menuGeralSubTemplate.click();
	};

	this.acessaMenuTemplateSubCabecalhoHTML = function() {
		helper.waitElementVisibility(this.menuTemplateSubCabecalhoHTML);
		this.menuTemplateSubCabecalhoHTML.click();
	};
};

module.exports = new configuracaopo();