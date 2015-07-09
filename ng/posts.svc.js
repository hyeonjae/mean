angular.module('myapp')
.service('PostsSvc', ['$http', function($http) {
    this.fetch = function () {
        return $http.get('/api/posts');
    }
console.error('error!');
    this.create = function (post) {
        return $http.post('/api/posts', post);
    }
}]);

