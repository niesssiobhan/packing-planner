 // Create a TD for the delete link, should be rendered along with list elements//
 var removeTD = document.createElement('td');
 removeTD.textContent = 'x';
 removeTD.classList.add('remover');
 removeTD.id = i;



//
function removeItemFromTrip(event) {
    // add table ID 
    if (event.target.??????.contains('remover')) {
      // Remove that item from the cart, based on the ID we set when we created the button.
     ???.removeItem(parseInt(event.target.id));
      // Save the cart back to local storage.
     ???.saveToLocalStorage();
      // Redraw the cart.
      renderCart();
    }
  }

  //create variable and event listener
  var table = document.getElementById('???');
  table.addEventListener('click', removeItemFromCart);
  var ???;


//app.js stuff 

Trip.prototype.removeItem = function("") {
 //this finds the string and replaces it with nothing i
    this.???????.splice("", 1);
  };
  