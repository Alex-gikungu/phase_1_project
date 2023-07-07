// let sendButton = document.getElementById('btns');
// sendButton.addEventListener('click', () => {
//   let nameInput = document.getElementById('name');
//   let emailInput = document.getElementById('email');
//   let messageInput = document.getElementById('message');

//   // Check if inputs are filled correctly
//   if (
//     nameInput.value.trim() !== '' &&
//     emailInput.value.trim() !== '' &&
//     messageInput.value.trim() !== ''
//   ) {
//     // Display success message
//     let confirmation = confirm('Submit successful. Do you want to delete the house?');

//     if (confirmation) {
//       // Delete the house from the server
//       deleteHouseFromServer(id);
//     }

//     // Reset the input values
//     nameInput.value = '';
//     emailInput.value = '';
//     messageInput.value = '';
//   } else {
//     // Prompt alert for incorrect details
//     alert('Fill all the inputs correctly');
//   }
// });

// function deleteHouseFromServer(id) {
//   fetch(`http://localhost:3000/houses/${id}`, {
//     method: "DELETE",
//   })
//     .then(response => response.json())
//     .then(data => {
//       // Handle the server response if needed
//       console.log("House deleted:", data);

//       // Remove the house element from the DOM
//       newHouse.remove();

//       // Redirect to contact.html
//       window.location.href = "contact.html";
//     })
//     .catch(error => console.log(error));
// }












