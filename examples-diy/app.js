var app = angular.module('app', ['ngAnimate']);

app.controller('MainController', ['$scope', '$http', function MainController( $scope, $http ) {
    
    $scope.courses = [];
    $scope.searchName = "";

    $scope.search = function() {
     	$http.get("http://localhost:3333/?prof=" + $scope.searchName).success(function(data, status) {
     		
     	}).error(function(data, err, headers) {
     		alert("A network error occured. " + err);
     	});
    }
}, ]);

