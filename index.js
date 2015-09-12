var app = angular.module('app', []);


function SampleController(){
    this.name = "Names";
    this.person =[ {name:"John", age:20, location:"Legazpi"},
    			{name:"Jones", age:21, location:"Ligao"},
    			{name:"James", age:45, location:"Tabaco"},
    			{name:"Justin", age:22, location:"Cebu"}  ];
    this.limit = 3;
    this.searchStr = "";
    this.sortProperty = 'name';
    this.reverseSort = true;

};

SampleController.prototype.addPerson = function (){
	this.person.push(this.newData);
	this.newData = "";
};

SampleController.prototype.sort = function (property){
	this.sortProperty = property
	this.reverseSort = !this.reverseSort;
};



app.controller('sampleController',  SampleController );
