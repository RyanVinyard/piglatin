$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
  event.preventDefault();

  var userInput = $("input#phrase").val();
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

  if (userInput.length === 1) {
     userInput = (userInput + "ay");
   };
  // }
  //
  // for (i = 0; i = userInput.length - 1; i++) {
  //   if (userInput[i] === )
  // }



  $("#result").append(userInput);

  });
});
