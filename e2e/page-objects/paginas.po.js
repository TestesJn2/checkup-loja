//paginas.po.js

'use strict';  
var helper = require('../helper/helper.js');

var paginaspo = function() {

	this.filtroNomeURL = element(by.id('cmsPageGrid_filter_identifier'));
	this.tituloPagLoja = element(by.id('page_title'));
	this.visualizarPagHome = element(by.cssContainingText('td', 'home'));

	this.buscaNomeURL = function(nomeURL) {
		helper.waitElementVisibility(this.filtroNomeURL);
		this.filtroNomeURL.sendKeys(nomeURL).sendKeys(protractor.Key.ENTER);
		browser.driver.sleep(800);
	};

	this.clickResultadoPagHome = function() {
		helper.waitElementVisibility(this.visualizarPagHome);
		this.visualizarPagHome.click();
	};
};

module.exports = new paginaspo();