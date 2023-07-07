let sendButton = document.getElementById('btns');
sendButton.addEventListener('click', () => {
  let nameInput = document.getElementById('name');
  let emailInput = document.getElementById('email');
  let messageInput = document.getElementById('message');

  // Check if inputs are filled correctly
  if (
    nameInput.value.trim() !== '' &&
    emailInput.value.trim() !== '' &&
    messageInput.value.trim() !== ''
  ) {
    // Display success message
    alert('Submit successful');

    // Reset the input values
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  } else {
    // Prompt alert for incorrect details
    alert('Fill all the inputs correctly');
  }
});
