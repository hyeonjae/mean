angular.module('myapp')
.controller('ApplicationCtrl', function($scope) {
	$scope.$on('login', function(_, user) {
		$scope.currentUser = user;
	});
});
