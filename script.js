document.getElementById("noButton").addEventListener("click", function() {
  var confirmations = [
    "Are you sure?",
    "Phir se soch lo!",
    "Man jao?",
    "Last chance!"
  ];

  var rejectionMessages = [
    "Okay, maybe next time!",
    "You'll regret it!",
    "You're missing out!",
    "I'll find someone else!"
  ];

  var confirmationIndex = 0;

  function askConfirmation() {
    if (confirmationIndex < confirmations.length) {
      var confirmation = confirmations[confirmationIndex];
      var userResponse = confirm(confirmation);
      if (!userResponse) {
        confirmationIndex++;
        askConfirmation();
      } else {
        displayRejectionMessage();
      }
    } else {
      displayRejectionMessage();
    }
  }

  function displayRejectionMessage() {
    var rejectionMessageIndex = Math.floor(Math.random() * rejectionMessages.length);
    var rejectionMessage = rejectionMessages[rejectionMessageIndex];
    var rejectionMessageElement = document.getElementById("rejectionMessage");
    rejectionMessageElement.textContent = rejectionMessage;
    rejectionMessageElement.classList.add("animate__shakeX");
  }

  askConfirmation();
});
