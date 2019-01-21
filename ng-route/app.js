angular.module("CustomDirective", ["ngRoute"])
	.config(function($routeProvider)) {
		$routeProvider
			.when("/", {
				controller: "ReposController",
				templateUrl: "templates/home.html"
			})
			.when("/repo/:name", {
				controller: "RepoController",
				templateUrl: "templates/repo.html"
			})
			// Sirve para cuando se pone alguna cosa que no existe en la url de la pagina
			// y lo que hace es cargar una pagina por defecto
			.otherwise("/");
	}