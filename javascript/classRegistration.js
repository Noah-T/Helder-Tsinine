var opts = {
  lines: 13, // The number of lines to draw
  length: 20, // The length of each line
  width: 10, // The line thickness
  radius: 30, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#000', // #rgb or #rrggbb or array of colors
  speed: 1, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: '100%', // Top position relative to parent
  left: '50%' // Left position relative to parent
};

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

			$(this).append('<h1>Sign Up</h1>' + 
				'<div class="container">' +
					'<div class="row">' +
						'<div class="col-md-6">' +
							'<p>This class is the absolute greatest.This class is the absolute greatest.This class is the absolute greatest.This class is the absolute greatest.</p>' +
						'</div>' +
					 '<div class="col-md-6">' +
						 '<form id="classSignup" data-classindex'+ $(this).data("index")+ '>' +
							'<input class="form-control" type="text" placeholder="First Name" id="firstName">' +
							'<input class="form-control" type="text" placeholder="Last Name" id="lastName">' +
							'<input class="form-control" type="text" placeholder="Email" id="email">' +
							'<button id="submit">Submit</button>' +
						  "</form>" +
					  '</div>' +	  
					'</div>' + 
				'</div>'	);
			$("#submit").click(function(e){
				e.preventDefault();
				var Atendee = Parse.Object.extend("Atendee");
				var atendee = new Atendee();
				var firstName = $("#firstName").val();
				var lastName = $("#lastName").val();
				var email = $("#email").val();
				var target = document.getElementById('submit');
				var spinner = new Spinner(opts).spin(target);

				atendee.save(null, {
				
					success: function(){
						console.log("atendee saved");
						var atendeesInCurrentClass = currentClass.relation("atendees"); 
						atendeesInCurrentClass.add(atendee);
						currentClass.save();
						spinner.stop();

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