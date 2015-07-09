var app = angular.module('myapp', []);


var app = angular.module('myapp', []);

app.controller('PostsCtrl', function($scope, PostsSvc) {
    
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

app.service('PostsSvc', function($http) {
    this.fetch = function () {
        return $http.get('/api/posts');
    }

    this.create = function (post) {
        return $http.post('/api/posts', post);
    }
});

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


angular.module('myapp', [])
.service('PostsSvc', function($http) {
    this.fetch = function () {
        return $http.get('/api/posts');
    }

    this.create = function (post) {
        return $http.post('/api/posts', post);
    }
});

