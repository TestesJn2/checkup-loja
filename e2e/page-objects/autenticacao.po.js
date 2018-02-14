//autenticacao.po.js

'use strict';  
var helper = require('../helper/helper.js');

var autenticacaopo = function() {

	this.userLogin = element(by.id('username'));
	this.passwordLogin = element(by.id('login'));
	this.btnEntrar = element(by.css('#loginForm > div.login-form > div.form-buttons > input'));

	this.login = function (user, password) {
		helper.waitElementVisibility(this.userLogin);
		this.userLogin.clear().sendKeys(user);
		this.passwordLogin.clear().sendKeys(password);
		this.btnEntrar.click();
	};
};
module.exports = new autenticacaopo();
