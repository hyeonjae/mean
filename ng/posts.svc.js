angular.module('myapp')
.service('PostsSvc', ['$http', 'UserSvc', function($http, UserSvc) {
    this.fetch = function () {
        return $http.get('/api/posts', {
			headers: { 'X-Auth': UserSvc.token }
        });
    }

	this.create = function (post) {
        return $http.post('/api/posts', post);
    }
}]);

