Parse.initialize("HrQVtMtHNTg2ZCq1D03PyBqtScEL7f5ttRhV1YYh", "LhO8pkPR9uM1xkMTY3AWzBxQDvBY81wco0yArUfz");
var classesInList;
var Class = Parse.Object.extend("Class");
var query = new Parse.Query(Class);
query.find({success:function(response){
	console.log(response);
	classesInList = [];
	for (var i = 0; i < response.length; i++) {
		classesInList.push(response[i]);
		$("#classList").append("<div class='individualClass' data-index='"+ i +"'><h2>" + response[i].attributes.title +"</h2></div>");
	};

	$(".individualClass").click(function(){
		if ($("#classSignup").length < 1) {
			var currentClass =  classesInList[$(this).data("index")];
			debugger;
			$(this).append('<h1>Sign Up</h1>' + 
			 '<form id="classSignup" data-classindex'+ $(this).data("index")+ '>' +
				'<input class="form-control" type="text" placeholder="First Name" id="firstName">' +
				'<input class="form-control" type="text" placeholder="Last Name" id="lastName">' +
				'<input class="form-control" type="text" placeholder="Email" id="email">' +
				'<button id="submit">Submit</button>' +
			"</form> ");
			$("#submit").click(function(e){
				e.preventDefault();
				debugger;
				var Atendee = Parse.Object.extend("Atendee");
				var atendee = new Atendee();
				var firstName = $("#firstName").val();
				var lastName = $("#lastName").val();
				var email = $("#email").val();
				atendee.save(null, {
					beforeSend: function(){
						var spinner = new Spinner().spin();
						$("#classSignup").appendChild(spinner.el);
						console.log("beforeSend called");
						debugger;
					},
					success: function(){
					console.log("atendee saved");
					var atendeesInCurrentClass = currentClass.relation("atendees"); 
					atendeesInCurrentClass.add(atendee);
					currentClass.save();

					},
					error:function(error){
						console.log(error);
					}
				});
			});
		};
		
	});


}, error: function(){
	console.log("Oops! " + error);
}})