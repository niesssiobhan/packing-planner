'use strict'

var climateForm = document.getElementById('climateForm');
var activityForm = document.getElementById('activityForm');
var itemsForm = document.getElementById('itemsForm');

var userSelections = '';

function renderUserSelections(text) {
  userSelections += text;
  var currentSelections = document.getElementById('currentSelections');
  currentSelections.innerHTML = userSelections;
}

function createCheckboxItem(elementId, item, checkedYN) {
  var formContents = document.getElementById(elementId);

  var newLabel = document.createElement('label');
  newLabel.className = 'container';

  var labelText = document.createTextNode(item);

  var newCheck = document.createElement('input');
  newCheck.type = 'checkbox';
  newCheck.value = item;
  newCheck.checked = checkedYN;

  var newSpan = document.createElement('span');
  newSpan.className = 'checkmark';

  newLabel.appendChild(newCheck);
  newLabel.appendChild(labelText);
  newLabel.appendChild(newSpan);
  formContents.appendChild(newLabel);
}

function handleClimateSubmit(e) {
  e.preventDefault();
  var activityList = [];

  for (var i = 0; i < e.target.length; i++) {

    if (e.target[i].checked) {
      renderUserSelections(`Climate: ${e.target[i].value} > `);

      switch (e.target[i].value) {
      case 'Hot':
        activityList = hotActivities;
        trip.addItems(hotMaster);
        break;
      case 'Temperate':
        activityList = temperateActivities;
        trip.addItems(temperateMaster);
        break;
      case 'Cold':
        activityList = coldActivities;
        trip.addItems(coldMaster);
        break;
      }
    }
  }

  for (i = 0; i < activityList.length; i++) {
    createCheckboxItem('activities', activityList[i], false);
  }

  climateForm.hidden = true;
  activityForm.hidden = false;
}

function handleActivitySubmit(e) {
  e.preventDefault();
  var activitySelections = [];
  renderUserSelections('Activities: ')

  for (var i = 0; i < e.target.length; i++) {
    if (e.target[i].checked) {
      var activity = e.target[i].value;

      trip.addItems(activitiesMap.get(activity));
      activitySelections.push(activity);
    }
  }

  for (i = 0; i < trip.array.length; i++) {
    createCheckboxItem('items', trip.array[i], true);
  }

  if (activitySelections.length > 1) {
    for (i = 0; i < activitySelections.length - 1; i++){
      renderUserSelections(`${activitySelections[i]}, `);
    }
    renderUserSelections(activitySelections[activitySelections.length - 1]);
  } else {
    renderUserSelections(activitySelections[0]);
  }

  activityForm.hidden = true;
  itemsForm.hidden = false;
}

function handleItemsSubmit(e) {
  e.preventDefault();

  for (var i = 1; i < (e.target.length - 1); i++) { // [0] and [-1] are undefined
    if (e.target[i].checked !== true ) {
      trip.removeItem(e.target[i].value);
    }
  }

  for (i = 0; i < trip.array.length; i++) {
    createCheckboxItem('items', trip.array[i], true);
  }

  trip.saveToLocalStorage();

  var selectionForms = document.getElementById('selectionForms');
  selectionForms.innerHTML = ''; // So you don't see the list flash double before leaving page

  window.location='packing-list.html';
}

climateForm.addEventListener('submit', handleClimateSubmit);
activityForm.addEventListener('submit', handleActivitySubmit);
itemsForm.addEventListener('submit', handleItemsSubmit);
