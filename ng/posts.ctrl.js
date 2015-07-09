angular.module('myapp')
.controller('PostsCtrl', function($scope, PostsSvc) {
    
    PostsSvc.fetch().success(function(posts) {
        $scope.posts = posts;
    });

    $scope.addPost = function () {
        var postBody = $scope.postBody;
        if (_.trim(postBody).length > 0) {

            PostsSvc.create({
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

