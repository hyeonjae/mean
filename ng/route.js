angular.module('myapp')
.config(function($routeProvider) {
	$routeProvider
		.when('/', {controller: 'PostsCtrl', templateUrl: 'posts.html'})
		.when('/register', {controller: 'RegisterCtrl', templateUrl: 'register.html'})
		.when('/login', {controller: 'LoginCtrl', templateUrl: 'login.html'})
		.when('/logout', {controller: 'LogoutCtrl', templateUrl: 'login.html'});
});