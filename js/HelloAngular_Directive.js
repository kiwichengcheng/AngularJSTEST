var myModule = angular.module("myModule",[]);

myModule.directive("hello", function(){

	return{
		restrict :'E',
		template : '<div> Hi Everyone!</div>',
		replace: true
	}
});
