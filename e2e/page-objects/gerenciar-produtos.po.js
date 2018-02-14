//gerenciarProdutos.po.js

'use strict';  
var helper = require('../helper/helper.js');

var gerenciarProdutospo = function() {

	this.qtdeTotalDeProdutos = element(by.id('productGrid-total-count'));
	this.listaTabelaProdutos = element.all(by.css('#productGrid_table > tbody > tr'));


};

module.exports = new gerenciarProdutospo(); 