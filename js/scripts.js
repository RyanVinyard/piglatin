$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
  event.preventDefault();

  var userInput = $("input#phrase").val();
  var inputArray = userInput.split("");
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

//This one catches single letters
  if (userInput.length === 1) {
     userInput = (userInput + "ay");
   };

//This one catches non single letter words starting with vowels
   if (userInput.charAt(0) === "a" || "e" || "i" || "o" || "u" || "A" || "E" || "I" || "O" || "U") {
     var result = userInput + "ay";


//This one catches words starting with multiple consonants and then a vowel
   } else {
      for (var i = 0; i < vowels.length; i++) {
      for (var n = 0; n < userInput.length; n++) {
      if (userInput[n] === vowels[i]) {
      var slice = userInput.slice(0,n);
      var input = userInput.slice(n,userInput.length);
      // if (slice.charAt(1) === "q" && (input.charAt(0) === "u") {
      //   var u = input.slice(1);
      //   alert(input);
      //
      // }
      var result = (input + slice + "ay");
      }
    }
  }
}

//And this prints out the result
  $("#result").text(result);

  });
});
