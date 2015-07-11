angular.module('myapp')
.controller('PostsCtrl', ['$scope', 'PostsSvc', 'UserSvc', '$location', function($scope, PostsSvc, UserSvc, $location) {
    
    if (!UserSvc.token) {
        $location.path('/login');
    } else {
        PostsSvc.fetch().success(function(posts) {
            $scope.posts = posts;
        }).error(function(err) {
            $location.path('/login');
        });
    }

    $scope.addPost = function () {
        var postBody = $scope.postBody;
        if (_.trim(postBody).length > 0) {

            PostsSvc.create({
                token: UserSvc.token,
                body: $scope.postBody
            })
            .success(function(post) {
                $scope.posts.unshift(post);
                $scope.postBody = '';
            });
        }
    };
}]);

