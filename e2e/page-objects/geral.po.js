//geral.po.js

'use strict';  
var helper = require('../helper/helper.js');

var geralpo = function() {
	//Home
	this.titleHomePainel = element(by.cssContainingText('.head-dashboard','Painel'));
	//Catalogo
	this.menuCatalogo = element(by.linkText('Catálogo'));
	this.menuGerenciarProdutos = element (by.linkText('Gerenciar Produtos'));
	this.menuGerenciarAnexos = element(by.linkText('Gerenciar Anexos'));
	this.menuGerenciarCategorias = element(by.linkText('Gerenciar Categorias'));
	this.menuAtributos = element(by.linkText('Atributos'));
	this.menuGerenciarAtributos = element(by.linkText('Gerenciar Atributos'));
	this.menuGerenciarGrupoAtributos = element(by.linkText('Gerenciar Grupo de Atributos'));
	//CMS
	this.menuCMS = element(by.linkText('CMS'));
	this.menuPaginas = element(by.linkText('Páginas'));
	this.menuBlocosEstaticos = element(by.linkText('Blocos Estáticos'));
	this.menuWidgets = element(by.linkText('Widgets'));
	this.menuiBanners = element(by.linkText('iBanners'));
	//Sistema
	this.menuSistema = element(by.linkText('Sistema'));
	this.menuConfiguracao = element(by.cssContainingText('span','Configuração'));

	this.url = function() {
		browser.driver.sleep(1500);
		browser.get('');
		browser.driver.sleep(1500);
	};

	this.clickMenuCMS = function() {
		helper.waitElementVisibility(this.menuCMS);
		this.menuCMS.click();
	};

	this.acessaTelaBlocosEstaticos = function() {
		this.clickMenuCMS();
		helper.waitElementVisibility(this.menuBlocosEstaticos);
		this.menuBlocosEstaticos.click();
	};

	this.acessaTelaPaginas = function() {
		this.clickMenuCMS();
		helper.waitElementVisibility(this.menuPaginas);
		this.menuPaginas.click();
	};

	this.selecionaMenuCatalogo = function() {
		helper.waitElementVisibility(this.menuCatalogo);
		this.menuCatalogo.click();
	};

	this.selecionaTelaGerenciarProdutos = function() {
		this.selecionaMenuCatalogo();
		helper.waitElementVisibility(this.menuGerenciarProdutos);
		this.menuGerenciarProdutos.click();
	};

	this.acessaTelaCategoria = function() {
		this.selecionaMenuCatalogo();
	};

	this.clickMenuSistema = function() {
		helper.waitElementVisibility(this.menuSistema);
		this.menuSistema.click();
	};

	this.acessaMenuConfiguracao = function() {
		this.clickMenuSistema();
		helper.waitElementVisibility(this.menuConfiguracao);
		this.menuConfiguracao.click();
	};
};

module.exports = new geralpo();