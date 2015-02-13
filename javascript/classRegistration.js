Parse.initialize("HrQVtMtHNTg2ZCq1D03PyBqtScEL7f5ttRhV1YYh", "LhO8pkPR9uM1xkMTY3AWzBxQDvBY81wco0yArUfz");
var classesInList;
var Class = Parse.Object.extend("Class");
var query = new Parse.Query(Class);
query.find({success:function(response){
	console.log(response);
	classesInList = [];
	for (var i = 0; i < response.length; i++) {
		classesInList.push(response[i]);
		$("#classList").append("<div date-index='"+ i +"'><h2>" + response[i].attributes.title +"</h2></div>");
	};


}, error: function(){
	console.log("Oops! " + error);
}})