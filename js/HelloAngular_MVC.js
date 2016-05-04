var myModule = angular.module("myModule",[]);

myModule.controller("HelloAngular", ['$scope',
	function HelloAngular($scope){
	$scope.greeting = {
			text : 'Hello'
	};
}
]);

