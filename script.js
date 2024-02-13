document.getElementById("noButton").addEventListener("click", function() {
    var confirmations = [
      "Are you sure?",
      "Phir se soch lo!",
      "Man jao?",
      "Last chance!"
    ];
  
    var confirmationIndex = 0;
  
    function askConfirmation() {
      if (confirmationIndex < confirmations.length) {
        var confirmation = confirmations[confirmationIndex];
        var userResponse = confirm(confirmation);
        if (!userResponse) {
          confirmationIndex++;
          askConfirmation();
        }
      } else {
        alert("Okay, maybe next time!");
      }
    }
  
    askConfirmation();
  });
  