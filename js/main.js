(function (){
	var app = angular.module('Base', []);
	//Single-page layout nav
	app.controller('BasePageNav', function(){
		this.page = 1;
		this.isSet = function(setPage){
			this.page = setPage;
		};
		this.checkPage = function(pageName){
			return this.page === pageName;
		};
	});
	//Different Course Information
	app.controller('BaseController', function(){
		this.course = courses;
		var courses = {
			//Store data hash for different course options
		}
	});
})();