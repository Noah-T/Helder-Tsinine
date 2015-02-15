Parse.initialize("HrQVtMtHNTg2ZCq1D03PyBqtScEL7f5ttRhV1YYh", "LhO8pkPR9uM1xkMTY3AWzBxQDvBY81wco0yArUfz");
var classesInList;
var Class = Parse.Object.extend("Class");
var query = new Parse.Query(Class);
query.find({success:function(response){
	console.log(response);
	classesInList = [];
	for (var i = 0; i < response.length; i++) {
		classesInList.push(response[i]);
		$("#classList").append("<div class='individualClass' date-index='"+ i +"'><h2>" + response[i].attributes.title +"</h2></div>");
	};

	$(".individualClass").click(function(){
		$(this).append('<h1>Sign Up</h1>' + 
			 '<form id="classSignup">' +
				'<input class="form-control" type="text" placeholder="First Name">' +
				'<input class="form-control" type="text" placeholder="Last Name">' +
				'<input class="form-control" type="text" placeholder="Email">' +
				'<select class="form-control" name="pickSession">' +
					'<option value="1">2/18/15</option>' +
					'<option value="2">2/28/15</option>' +
					'<option value="3">3/10/15</option>' +
					'<option value="4">3/17/15</option>' +
				'</select>' +
				'<button type="submit">Submit</button>' +
			"</form> ");
	});


}, error: function(){
	console.log("Oops! " + error);
}})