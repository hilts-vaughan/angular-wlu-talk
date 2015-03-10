var app = angular.module('app', ['ngAnimate']);

app.controller('MainController', ['$scope', '$http', function MainController( $scope, $http ) {
    
    $scope.courses = [];
    $scope.searchName = "";

    $scope.search = function() {
     	$http.get("http://localhost:3333/?prof=" + $scope.searchName).success(function(data, status) {
     		$scope.courses = data;
     	}).error(function(data, err, headers) {
     		alert("A network error occured. " + err + headers);
     	});
    }
}, ]);

app.filter('dayFormatter', function() {

	return function(dayCodes) {
		
		dayCodes = dayCodes.replace("M", "Monday, ");
		dayCodes = dayCodes.replace("T", "Tuesday, ");
		dayCodes = dayCodes.replace("W", "Wednesday, ");
		dayCodes = dayCodes.replace("R", "Thursday, ");
		dayCodes = dayCodes.replace("F", "Friday, ");

		return dayCodes.substring(0, dayCodes.length - 2);

	};

});