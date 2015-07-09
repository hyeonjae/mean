var app = angular.module('myapp', []);

app.controller('PostsCtrl', function($scope, $http) {
    
    $http.get('http://localhost:3000/api/posts')
        .success(function(posts) {
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