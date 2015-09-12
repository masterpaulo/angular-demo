// angular.module('directoryApp',[])
//     .controller('directoryController', function($scope) {
//     	$scope.list = [
//     		{name:'master',age:20},
// 	    	{name:'Jackie',age:20},
// 	    	{name:'jackster',age:21}
// 	    ];	

// 	    $scope.addPerson = function(){
// 	    	$scope.list.push({name:$scope.name, age: $scope.age});
// 	    	$scope.name = '';
// 	    	$scope.age = '';
// 	    }
//     });


angular.module('directoryApp',['ngAnimate'])
    .controller('directoryController', function() {
    	var dirList = this;
    	dirList.toggle=true;
    	this.list = [
    		{name:'master',age:20, img:'img/google2.png'},
	    	{name:'Jackie',age:20, img:'img/google3.png'},
	    	{name:'jackster',age:31, img:'img/google4.png'}
	    ];	

	    this.addPerson = function(){
	    	this.list.push({name:this.name, age: this.age});
	    	this.name = '';
	    	this.age = '';
	    }

    });
