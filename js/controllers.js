var myApp = angular.module('myApp', []);
myApp.controller('MyController', function ($scope) {
	$scope.author = {
		name: "Sandesh",
		title: "Web developer",
		company: "mQuotinet"
	};
});
