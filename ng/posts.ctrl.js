angular.module('myapp')
.controller('PostsCtrl', ['$scope', 'PostsSvc', 'UserSvc', function($scope, PostsSvc, UserSvc) {
    
    PostsSvc.fetch().success(function(posts) {
        $scope.posts = posts;
    });

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

