angular.module('myapp')
.controller('LoginCtrl', ['$scope', 'UserSvc', '$location', function($scope, UserSvc, $location) {
    
    $scope.login = function(username, password) {
        UserSvc.login(username, password)
            .then(function(user) {
                $scope.$emit('login', user.data);
                $location.path('/');
            });
    }
}]);
