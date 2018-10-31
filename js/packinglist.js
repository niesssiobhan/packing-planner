// 'use strict';

 
var listToRender = JSON.parse(localStorage.storedList);



// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderTrip() {

 showTrip();

// }

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showTrip() {
 // Find the table body
 var listBody = document.getElementById('finalSelection');

 // Iterate over the items in the cart
 for (var i = 0; i < listToRender.length; i++) {
   // Create a TR
  //  var tr = document.createElement('tr');

var checkbox = document.createElement('input');
checkbox.type = 'checkbox';



   // Create a TD for the item name
   var iLI = document.createElement('li');
   iLI.textContent = listToRender[i];



   // Add the TR to the TBODY and each TD to the TR
   //.appendChild(iLI);
   listBody.appendChild(checkbox);
   listBody.appendChild(iLI);



   
 }
}



// // This will initialize the page and draw the cart on screen
// renderTrip();