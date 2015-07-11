angular.module('myapp')
.controller('LogoutCtrl', ['$scope', 'UserSvc', '$location', function($scope, UserSvc, $location) {
	UserSvc.token = null;
	$scope.$emit('logout');
	$location.path('/');
}]);
