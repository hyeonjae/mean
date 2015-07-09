var app = angular.module('myapp', []);

// PostsCtrl 모듈 생성
// $scope 의존성 주입
app.controller('PostsCtrl', function($scope) {
    
		$http.get('http://localhost:3000/api/posts')
			.success(function(posts) {
				$scope.posts = posts;
		});

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
