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


  // This identifies your website in the createToken call below
  Stripe.setPublishableKey('pk_test_vXNldjlBZnauTG1OPxYDKJtD');
  // ...


Parse.initialize("HrQVtMtHNTg2ZCq1D03PyBqtScEL7f5ttRhV1YYh", "LhO8pkPR9uM1xkMTY3AWzBxQDvBY81wco0yArUfz");
var classesInList;
var Class = Parse.Object.extend("Class");
var query = new Parse.Query(Class);
query.find({
  success:function(response){
  	console.log(response);
  	classesInList = [];
  	for (var i = 0; i < response.length; i++) {
  		classesInList.push(response[i]);
  		$("#classList").append("<div class='individualClass' data-index='"+ i +"'><h2>" + response[i].attributes.title +"</h2></div>");
  	}

  	$(".individualClass").click(function(){

  		if ($("#register").length < 1) {
  			var currentClass =  classesInList[$(this).data("index")];

  			$(this).append('<h1>Sign Up</h1>' + 
  				'<div class="container" id="formContainer">' +
  					'<div class="row">' +
            '<div class="col-sm-6"><img src="images/withkids2.jpg" id="welcomeImage">  </div>'+  
  						'<div class="col-sm-6">' +
  							'<p class="copyParagraph">Music and dance has been bringing people together for generations; infants and toddlers are no exception. Children and parents will enjoy rhythms and melodies from around the world while dancing and singing along. Children will also practice playing various percussion instruments during the class.</p>'+ 
  						'</div>' +  

  					'</div>' + 
  				'</div>');
        $(this).after('<button id="register">Register</button>');
          

        $("#register").click(function(){

          if (Parse.User.current()) {
            //proceed with user
          } else {
            //if they don't have an account, or aren't logged in
            //create overlay 
            $("body").append("<div id='lightboxOverlay'></div>");
            $("body").append("<div id='accountSignup'></div>");
            $("#accountSignup").append(
              '<h1>Create Account</h1>'+
              '<form id="createAccount">'+

                "<input placeholder='Username' id='username'>"+
                "<input placeholder='Password' id='password'>"+
                '<input placeholder="Email Address" id="email">' +


                "<input placeholder='Child&#39s Name' id='childsName'>"+
                "<input placeholder='Date of Birth' id='dateOfBirth'>"+

                '<input placeholder="Parent&#39s Name" id="parentsName">' +
                '<input placeholder="Mailing Address" id="mailingAddress">' +
                
                '<input placeholder="Home Phone" id="homePhone">' +
                '<input placeholder="Work Phone" id="workPhone">' +
                '<input placeholder="Cell Phone" id="cellPhone">' +
                '<input placeholder="Caregiver&#39s Name" id="caregiversName">' +

                "<br>" +
                "<input placeholder='Child&#39s Name' id='childsName2'>"+
                '<input placeholder="Caregiver" id="caregiver2">' +
                "<input placeholder='Date of Birth' id='dateOfBirth2'>"+

                "<br>" +
                "<input placeholder='Child&#39s Name' id='childsName3'>"+
                '<input placeholder="Caregiver" id="caregiver3">' +
                "<input placeholder='Date of Birth' id='dateOfBirth3'>"+
                "<br>" +
                "<input placeholder='Child&#39s Name' id='childsName4'>"+
                '<input placeholder="Caregiver" id="caregiver4">' +
                "<input placeholder='Date of Birth' id='dateOfBirth4'>"+
                "<br>" +
                '<button id="signUp">Sign Up</button>'+
              
              '</form>');
$("#signUp").click(function(e){
            console.log("signup clicked");
            e.preventDefault();
            var username = $("#username").val();
            var password = $("#password").val();

            var childsName = $("#childsName").val();
            var dateOfBirth = $("#dateOfBirth").val();
            var parentsName = $("#parentsName").val();
            var mailingAddress = $("#mailingAddress").val();
            var emailAddress = $("#email").val();
            var homePhone = $("#homePhone").val();
            var workPhone = $("#workPhone").val();
            var cellPhone = $("#cellPhone").val();
            var caregiversName = $("#caregiversName").val();

            var childsName2 = $("#childsName2").val();
            var caregiver2 = $("#caregiver2").val();
            var dateOfBirth2 = $("#dateOfBirth2").val();

            var childsName3 = $("#childsName3").val();
            var caregiver3 = $("#caregiver3").val();
            var dateOfBirth3 = $("#dateOfBirth3").val();

            var childsName4 = $("#childsName4").val();
            var caregiver4 = $("#caregiver4").val();
            var dateOfBirth4 = $("#dateOfBirth4").val();

            var user = new Parse.User();

            user.set("username", username);
            user.set("password", password);
            user.set("email", emailAddress);

            user.set("childsName", childsName);
            user.set("dateOfBirth", dateOfBirth);
            user.set("parentsName", parentsName);
            user.set("mailingAddress", mailingAddress);
            
            user.set("homePhone", homePhone);
            user.set("workPhone", workPhone);
            user.set("cellPhone", cellPhone);
            user.set("caregiversName", caregiversName);

            user.set("childsName2", childsName2);
            user.set("caregiver2", caregiver2);
            user.set("dateOfBirth2", dateOfBirth2);

            user.set("childsName3", childsName3);
            user.set("caregiver3", caregiver3);
            user.set("dateOfBirth3", dateOfBirth3);

            user.set("childsName4", childsName4);
            user.set("caregiver4", caregiver4);
            user.set("dateOfBirth4", dateOfBirth4);

            user.signUp(null, {
              success: function(){
                console.log("new user created");
              },
              error: function(error){
                //oops
                console.log("no user created");
                debugger;
              }
            });



          });
          }
          });   
          //handle form submission

  	 } 
    }

  );
}, 
  error: function(error){
    console.log(error);
  }
});




// jQuery(function($) {
//   $('#payment-form').submit(function(event) {
//     var $form = $(this);

//     // Disable the submit button to prevent repeated clicks
//     $form.find('button').prop('disabled', true);

//     Stripe.card.createToken($form, stripeResponseHandler);

//     // Prevent the form from submitting with the default action
//     return false;
//   });
// });

// function stripeResponseHandler(status, response) {
//   var $form = $('#payment-form');

  
//   //stripe
//   if (response.error) {
//     // Show the errors on the form
//     $form.find('.payment-errors').text(response.error.message);
//     $form.find('button').prop('disabled', false);
//     debugger;
//   } else {
//     console.log(response);
//     debugger;
//     // response contains id and card, which contains additional card details
//     var token = response.id;
//     // Insert the token into the form so it gets submitted to the server
//     $form.append($('<input type="hidden" name="stripeToken" />').val(token));
//     // and submit
//     $form.get(0).submit();
//   }
// };

//payment form
// $("#formColumn").append(
//               '<form action="" method="POST" id="payment-form">' +
//   '<span class="payment-errors"></span>' +

//   '<div class="form-row">' +
//     '<label>' +
//       '<span>Card Number</span>' +
//       '<input type="text" size="20" data-stripe="number"/>' +
//     '</label>' +
//   '</div>' +

//   '<div class="form-row">' +
//     '<label>' +
//       '<span>CVC</span>' +
//       '<input type="text" size="4" data-stripe="cvc"/>' +
//     '</label>' +
//   '</div>' +

//   '<div class="form-row">' +
//     '<label>' +
//       '<span>Expiration (MM/YYYY)</span>' +
//       '<input type="text" size="2" data-stripe="exp-month"/>' +
//     '</label>' +
//     '<span> / </span>' +
//     '<input type="text" size="4" data-stripe="exp-year"/>' +
//   '</div>' +

//   '<button type="submit">Submit Payment</button>' +
// '</form>');