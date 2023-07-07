let houseListings = document.querySelector(".house-listings");
let house = document.querySelector(".house");
let head = document.querySelector(".heading");
// Fetch data from the server
fetch("http://localhost:3000/houses")
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      let houseData = data[i];
      //adding mouserover to the house div 
      let newHouse = document.createElement("div");
      newHouse.className = "house";
      newHouse.addEventListener("mouseover", ()=>{
        newHouse.style.background="lightgray";
      })
      newHouse.addEventListener("mouseout", ()=>{
        newHouse.style.background="#f5f5f5";
      })


//       let image = document.createElement("img");
//       image.src = houseData.images;
//       image.alt = "House Image";
//       newHouse.appendChild(image);

//       let houseInfo = document.createElement("div");
//       houseInfo.className = "house-info";

//       let heading = document.createElement("h2");
//       heading.textContent = houseData.name;
//       houseInfo.appendChild(heading);

//       let price = document.createElement("p");
//       price.className = "price";
//       price.textContent = `price:${houseData.amount}`;
//       price.style.textAlign="center";


//       houseInfo.appendChild(price);

//       let location = document.createElement("p");
//       location.className = "location";
//       location.textContent = `location:${houseData.location}`;

//       // `Run Time: ${film.runtime} minutes`;
//       location.style.textAlign="center";


//       houseInfo.appendChild(location);

//       let description = document.createElement("p");
//       description.className = "description";
//       description.textContent = houseData["Read More"];

//       description.style.display="none";
//       houseInfo.appendChild(description);
      
//       let button = document.createElement("button");
// button.textContent = "Read More";
// button.style.marginLeft = "35%";
// button.style.cursor = "pointer";
// houseInfo.appendChild(button);
// button.addEventListener("click", () => {
//   description.style.display = "block";
// });  

// let buttons = document.createElement("button");
// buttons.textContent = "Delete";
// buttons.style.marginLeft = "35%";
// buttons.style.marginTop = "30px";
// buttons.style.cursor = "pointer";
// houseInfo.appendChild(buttons);

// buttons.addEventListener("click", () => {
//   // Display a confirmation alert
//   if (confirm("Are you sure you want to delete the details?")) {
//     deleteHouseFromServer(houseData.id);
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
//     })
//     .catch(error => console.log(error));
// }
//  newHouse.appendChild(houseInfo);
//  houseListings.appendChild(newHouse);
// }

//   })
//   .catch(error => console.log(error));

// // Get the "Add Appartment" button element
// const addButton = document.querySelector('button');
//       addButton.style.width="150px";
//       addButton.style.height="30px";
//       addButton.style.cursor="pointer";

// // Add event listener to the button
// addButton.addEventListener('click', () => {
//   // Display the container
//   container.style.display = 'block';
// });

//   // Get the container element
// const container = document.querySelector('.container');

// // Create a div for the input section
// const inputSection = document.createElement('div');
// inputSection.className = 'input-section';

// // Create the name input field
// const nameInput = document.createElement('input');
// nameInput.type = 'text';
// nameInput.placeholder = 'Enter Appartment name';
// inputSection.appendChild(nameInput);

// // Create the image URL input field
// const imageInput = document.createElement('input');
// imageInput.type = 'text';
// imageInput.placeholder = 'Enter image URL';
// inputSection.appendChild(imageInput);

// // Create the cost input field
// const costInput = document.createElement('input');
// costInput.type = 'text';
// costInput.placeholder = 'Enter cost';
// inputSection.appendChild(costInput);

// // Create the location input field
// const locationInput = document.createElement('input');
// locationInput.type = 'text';
// locationInput.placeholder = 'Enter location';
// inputSection.appendChild(locationInput);


// //create description input field

// const descriptions = document.createElement("input");
// descriptions.type = "text";
// descriptions.placeholder ="Descriptions"
// inputSection.appendChild(descriptions);

// // Create the submit button
// const submitButton = document.createElement('button');
// submitButton.textContent = 'Add';
// submitButton.addEventListener("mouseover",()=>{
//   submitButton.style.backgroundColor="white";
// });



// submitButton.addEventListener("mouseout",()=>{
//   submitButton.style.backgroundColor="";
// });


// submitButton.style.width="80px";
// submitButton.style.height="30px";
// submitButton.style.cursor = "pointer";


// inputSection.appendChild(submitButton);



// // Append the input section to the container
// container.appendChild(inputSection);

// // Event listener for the submit button
// submitButton.addEventListener('click', () => {
//   // Get the values from the input fields
//   const nameValue = nameInput.value;
//   const imageValue = imageInput.value;
//   const costValue = costInput.value;
//   const locationValue = locationInput.value;
//   const descriptionsValue  = descriptions.value;

  
//   // Check if all input fields are filled
//   if (nameValue.trim() !== '' && imageValue.trim() !== '' && costValue.trim() !== '' && locationValue.trim() !== '' && descriptionsValue.trim() !== '') {
//     // Create a new house object with the input values
//     const newHouse = {
//       name: nameValue,
//       images: imageValue,
//       amount: costValue,
//       location: locationValue,
//       description:descriptionsValue,
//     };
//     // Send the new house object to the server
//     fetch('http://localhost:3000/houses', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newHouse),
//     })
//       .then(response => response.json())
//       .then(data => {


        
//         // Display the new house in the browser
//         const newHouseElement = document.createElement('div');
// newHouseElement.className = 'house';

// const imageElement = document.createElement('img');
// imageElement.src = data.images;
// imageElement.alt = 'House Image';
// newHouseElement.appendChild(imageElement);

// const houseInfoElement = document.createElement('div');
// houseInfoElement.className = 'house-info';

// const headingElement = document.createElement('h2');
// headingElement.textContent = data.name;
// houseInfoElement.appendChild(headingElement);

// const priceElement = document.createElement('p');
// priceElement.className = 'price';
// priceElement.textContent = `Price: ${data.amount}`;
// houseInfoElement.appendChild(priceElement);

// const locationElement = document.createElement('p');
// locationElement.className = 'location';
// locationElement.textContent = `Location: ${data.location}`;
// houseInfoElement.appendChild(locationElement);

// const descriptionElement = document.createElement('p');
// descriptionElement.className = 'description';
// descriptionElement.textContent = `Description: ${data.description}`;
// houseInfoElement.appendChild(descriptionElement);

// let button = document.createElement("button");
// button.textContent = "Read More";
// button.style.marginLeft = "35%";
// button.style.cursor = "pointer";
// houseInfoElement.appendChild(button);
// button.addEventListener("click", () => {
// descriptionElement.style.display = "block";
// });
// newHouseElement.appendChild(houseInfoElement);
// houseListings.appendChild(newHouseElement);
//       })
//       .catch(error => console.log(error));

//     // Reset the input fields
//     nameInput.value = '';
//     imageInput.value = '';
//     costInput.value = '';
//     locationInput.value = '';
//   } else {
//     alert('Fill all sections');
//   }

// });


















