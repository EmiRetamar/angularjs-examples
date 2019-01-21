angular.module("MyFirstApp", [])
	.run(function($rootScope) {
		$rootScope.nombre = "Root Scope";
	})
	.controller("FirstController", function($scope) {
		$scope.nombre = "Emi";
		setTimeout(function() {
			$scope.$apply(function() {
				$scope.nombre = ":3";
			});
		}, 1000);
	})
	.controller("ChildController", function($scope) {

	});