var app = angular.module('myapp', []);

app.controller('PostsCtrl', function($scope, $http, PostsSvc) {
    
    PostsSvc.fetch().success(function(posts) {
        $scope.posts = posts;
    });

    $scope.addPost = function () {
        var postBody = $scope.postBody;
        if (_.trim(postBody).length > 0) {
            $http.post('/api/posts', {
                username: 'hyeonjae',
                body: $scope.postBody
            })
            .success(function(post) {
                $scope.posts.unshift(post);
                $scope.postBody = '';
            });
        }
    };
});

app.service('PostsSvc', function($http) {
    this.fetch = function () {
        return $http.get('/api/posts');
    }
});
