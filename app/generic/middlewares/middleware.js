var Middleware = function(module) {
	this.model = require("./../models/model");
	this.modulesFolder = "./../../modules/";
	this.helper = require("./../../others/helpers/string");
	this.currentModule =  module == null ? "core" : module ;
}

/**
* @params MiddlewareName String the name of the Middleware (example : MiddlewareFoo => foo)
*/
Middleware.prototype.getInstanceOf = function(MiddlewareName) {
	return require(this.modulesFolder+this.currentModule+"/middlewares/middleware"+this.helper.capitalize(MiddlewareName));
};

module.exports = Middleware;