angular.module("MyFirstApp", [])
	.controller("FirstController", function($scope) {
		$scope.nombre = 'Emi';
		$scope.nuevoComentario = {};
		$scope.comentarios = [
			{
				comentario: "Buen tutorial",
				username: "CF"
			},
			{
				comentario: "Malisimo el tutorial",
				username: "otro_usuario"
			}
		];
		$scope.agregarComentario = function() {
			$scope.comentarios.push($scope.nuevoComentario);
			$scope.nuevoComentario = {};
		}
	});
