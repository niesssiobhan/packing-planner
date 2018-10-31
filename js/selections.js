'use strict'

var climateForm = document.getElementById('climateForm');
var activityForm = document.getElementById('activityForm');
var itemsForm = document.getElementById('itemsForm');

function createCheckboxItem(elementId, item, checkedYN) {
  var activityFormContents = document.getElementById(elementId);

  var newCheck = document.createElement('input');
  newCheck.type = 'checkbox';
  newCheck.value = item;
  newCheck.checked = checkedYN;

  var newLabel = document.createElement('label');
  newLabel.textContent = item;

  activityFormContents.appendChild(newCheck);
  activityFormContents.appendChild(newLabel);
}

function handleClimateSubmit(e) {
  e.preventDefault();
  var activityList = [];

  console.warn('Climate Selected');
  console.info(e);

  for (var i = 0; i < e.target.length; i++) {
    console.log(e.target[i].value, e.target[i].checked);

    if (e.target[i].checked) {
      switch (e.target[i].value) {
      case 'hot':
        activityList = hotActivities;
        trip.addItems(hotMaster);
        break;
      case 'temperate':
        activityList = temperateActivities;
        trip.addItems(temperateMaster);
        break;
      case 'cold':
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
  console.log(trip);
}

function handleActivitySubmit(e) {
  e.preventDefault();

  console.warn('Activities Selected');
  console.info(e);

  for (var i = 0; i < e.target.length; i++) {
    console.log(e.target[i].value, e.target[i].checked);

    if (e.target[i].checked) {
      var activity = e.target[i].value;
      console.log(activity, activitiesMap.get(activity));
      trip.addItems(activitiesMap.get(activity));
    }
  }

  for (i = 0; i < trip.array.length; i++) {
    createCheckboxItem('items', trip.array[i], true);
  }

  activityForm.hidden = true;
  itemsForm.hidden = false;
  console.log(trip);
}

function handleItemsSubmit(e) {
  e.preventDefault();
  var removeList = [];
 
  console.warn('Items Selected');
  for (var i = 0; i < e.target.length; i++) {
    console.log(e.target[i].value, e.target[i].checked);
 
    if (e.target[i].checked !== true) {
      removeList.push(e.target[i].value);
    }
  }
  trip.removeArray(removeList);
 
  for (i = 0; i < trip.array.length; i++) {
    createCheckboxItem('items', trip.array[i], true);
  }

  localStorage.storedList = JSON.stringify(trip.array);
  
  window.location='packing-list.html';
}



climateForm.addEventListener('submit', handleClimateSubmit);
activityForm.addEventListener('submit', handleActivitySubmit);
itemsForm.addEventListener('submit', handleItemsSubmit);
