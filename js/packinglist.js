'use strict';

var listToRender = trip.retrieveFromLocalStorage();
var additionForm = document.getElementById('additionForm');
var trip = new Trip(listToRender);

function renderTrip() {
  var listBody = document.getElementById('finalSelection');

  for (var i = 0; i < trip.array.length; i++) {
    var newListItem = document.createElement('label');
    newListItem.className = 'container';

    var newCheck = document.createElement('input');
    newCheck.type = 'checkbox';

    var newDel = document.createElement('del');
    newDel.textContent = trip.array[i];

    var newSpan = document.createElement('span');
    newSpan.className = 'checkmark';

    newListItem.appendChild(newCheck);
    newListItem.appendChild(newDel);
    newListItem.appendChild(newSpan);
    listBody.appendChild(newListItem);
  }
}

function handleSubmit(e) {
  e.preventDefault();

  var newitem = [e.target.newItem.value];
  trip.addItems(newitem);
  document.getElementById('finalSelection').innerHTML='';
  trip.saveToLocalStorage();
  renderTrip();
  e.target.newItem.value = null;
}

additionForm.addEventListener('submit', handleSubmit);

renderTrip();
