angular.module("MyFirstApp", [])
	.controller("FirstController", ["$scope", function(m) {
		m.nombre = 'Emi';
		m.nuevoComentario = {};
		m.comentarios = [
			{
				comentario: "Buen tutorial",
				username: "CF"
			},
			{
				comentario: "Malisimo el tutorial",
				username: "otro_usuario"
			}
		];
		m.agregarComentario = function() {
			m.comentarios.push($scope.nuevoComentario);
			m.nuevoComentario = {};
		}
	}]);