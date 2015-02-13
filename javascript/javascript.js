Parse.initialize("HrQVtMtHNTg2ZCq1D03PyBqtScEL7f5ttRhV1YYh", "LhO8pkPR9uM1xkMTY3AWzBxQDvBY81wco0yArUfz");

$("#pickStartDate").datepicker();
$("#pickEndDate").datepicker();

//create class object
var Class = function(title, location, capacity, price, startDate, endDate, timeOfDay){
	this.title = title;
	this.location = location;
	this.capacity = capacity;
	this.price = price;
	this.startDate = startDate;
	this.endDate = endDate;
	this.timeOfDay = timeOfDay;
}

$("#createClassButton").click(function(e){
	e.preventDefault();

	var title = $("#title").val();
	var location = $("#location").val();
	var capacity = $("#capacity").val();
	var price = $("#price").val();
	var startDate = $("#pickStartDate").val();
	var endDate = $("#pickEndDate").val();
	var timeOfDay = $("#timeOfDay").val();

	var newClass = new Class(title, location, capacity, price, startDate, endDate, timeOfDay);

	var ClassForParse = Parse.Object.extend("Class");
	var classForParse = new ClassForParse();
	classForParse.set("title", title);
	classForParse.set("location", location);
	classForParse.set("capacity", capacity);
	classForParse.set("price", price);
	classForParse.set("startDate", startDate);
	classForParse.set("endDate", endDate);
	classForParse.set("timeOfDay", timeOfDay);
	classForParse.save(null, {success: function(){
		console.log("successful save");
		
		$("body").append("<h1 id='successMessage'>Success! Would you like to create another class?</h1>"+
			"<button id='anotherClass'>Yes</button>" + "<button id='finished'>No</button>");

		$("#createClassHeader").hide();
		$("#createClass").hide();
		$("#anotherClass").click(function(){
			console.log("click");
			$("#anotherClass").remove();
			$("#finished").remove();
			$("#successMessage").remove();
			$("#createClass").show();
			$("#createClassHeader").show();	
		});

		//if done creating classes, go back out to home page
		$("#finished").click(function(){
			window.location.href = "index.html";
		});
		console.log("little later");
		document.getElementById("createClass").reset();
	},
	error: function(error){

		console.log("there was an error " + error);
	}
});

	
})
/* 

create events:
-description
-date
-location
-program capacity
-cost

sign up for event:
-fill out form
--select session
--pay

-receive confirmation



*/