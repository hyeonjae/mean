var app = angular.module('myapp', []);

// PostsCtrl 모듈 생성
// $scope 의존성 주입
app.controller('PostsCtrl', function($scope) {
    $scope.posts = [
        {
            username: 'dickeyxxx',
            body: 'node rules!'
        },
        {
            username: 'jeffdickey',
            body: 'trying out angular.js...'
        }
    ];
    
    $scope.addPost = function () {
        var postBody = $scope.postBody;
        if (_.trim(postBody).length > 0) {
            $scope.posts.unshift({
                username: 'dickeyxxx',
                body: $scope.postBody
            });
            $scope.postBody = '';
        }
    };
});