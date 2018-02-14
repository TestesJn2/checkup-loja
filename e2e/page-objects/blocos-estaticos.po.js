//blocos-estaticos.po.js

'use strict';  
var helper = require('../helper/helper.js');

var blocosEstaticospo = function() {

	//Elementos Globais
	this.filtroPorTitulo = element(by.id('cmsBlockGrid_filter_title'));
	this.infoTopo = element(by.cssContainingText('.a-left', 'Cabeçalho - Informações topo'));
	this.tituloPagInfoGeral = element(by.cssContainingText('h4', 'Informações Gerais'));
	this.iFrameConteudo = element(by.id('block_content_ifr'));
	this.tinymceConteudo = element(by.id('tinymce'));
	this.valuetinymceConteudo = element(by.css('#tinymce > p'));



	//Métodos
	this.buscaPorTitulo = function(nmtitulo) {
		helper.waitElementVisibility(this.filtroPorTitulo);
		this.filtroPorTitulo.sendKeys(nmtitulo);
	};

	this.clickVerInfoTopo = function() {
		helper.waitElementVisibility(this.infoTopo);
		this.infoTopo.click();
		helper.waitElementVisibility(this.tituloPagInfoGeral);
	};
};

module.exports = new blocosEstaticospo();