$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
  event.preventDefault();

  var userInput = $("input#phrase").val();
  var inputArray = userInput.split("");
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];


  if (userInput.length === 1) {
     userInput = (userInput + "ay");
   };

  // if (userInput[0] != vowels) {
  //   alert("works");
  //   var substring = userInput.substring(0, 1);


  //   userInput = (userInput.slice(1) + substring + "ay");
  // };

  for (var i = 0; i < vowels.length; i++) {
    for (var n = 0; n < userInput.length; n++) {


      if (userInput[n] === vowels[i]) {
        var slice = userInput.slice(0,n);
        var input = userInput.slice(n,100000);
        userInput = (input + slice + "ay");
        console.log(slice);
        console.log(input);
    };
  };
};
  // }
  //
  // for (i = 0; i = userInput.length - 1; i++) {
  //   if (userInput[i] === )
  // }



  $("#result").text(userInput);

  });
});


//var inputArray = userInput.split("");
