'use strict'

var climateForm = document.getElementById('climateForm');
var activityForm = document.getElementById('activityForm');
var itemsForm = document.getElementById('itemsForm');

function createCheckboxItem(elementId, item) {
  var activityFormContents = document.getElementById(elementId);

  var newCheck = document.createElement('input');
  newCheck.type = 'checkbox'
  newCheck.value = item;

  var newLabel = document.createElement('label');
  newLabel.textContent = item;

  activityFormContents.appendChild(newCheck);
  activityFormContents.appendChild(newLabel);
}

function handleClimateSubmit(e) {
  e.preventDefault();

  console.warn('Climate Selected');
  console.info(e);

  for (var i = 0; i < e.target.length; i++) {
    console.log(e.target[i].value, e.target[i].checked);

    if (e.target[i].checked) {
      var activityList = [];
      switch (e.target[i].value) {
      case 'hot':
        activityList = hotActivities;
        break;
      case 'temperate':
        activityList = temperateActivities;
        break;
      case 'cold':
        activityList = coldActivities;
        break;
      }
    }
  }

  for (i = 0; i < activityList.length; i++) {
    createCheckboxItem('activities', activityList[i]);
  }

  climateForm.hidden = true;
  activityForm.hidden = false;
}

function handleActivitySubmit(e) {
  e.preventDefault();
  console.warn('Activities Selected')
  console.info(e);

  for (var i = 0; i < e.target.length; i++) {
    console.log(e.target[i].value, e.target[i].checked);
  }
  activityForm.hidden = true;
}

function handleItemsSubmit(e) {
  e.preventDefault();
}

climateForm.addEventListener('submit', handleClimateSubmit);
activityForm.addEventListener('submit', handleActivitySubmit);
itemsForm.addEventListener('submit', handleItemsSubmit);

// var activities = new Map();

// activities.set('swimming', ['water goggles', 'floaties', 'nose plug']);
// activities.set('snorkeling', ['snorkel mask', 'flippers', 'underwater camera gear', 'snorkel', 'water shoes', 'rash guard', 'float vest', 'wet suit']);
// activities.set('fishing', ['fishing pole and reel', 'tackle box', 'first aid kit', 'tip up', 'life vest', 'extra line', 'needle nose pliers', 'waders']);
// activities.set('golfing', ['golf shoes', 'golf bag', 'collared shirt', 'golf balls', 'tees']);
// activities.set('hiking', ['tent', 'backpack', 'hiking boots', 'hiking poles', 'compass/ map', 'food', 'cooking pots/ pans', 'water filter', 'lighter', 'utensils', 'sleeping bag', 'pillow', 'first aid kit', 'multi-purpose tool', 'trash bag']);
// activities.set('sledding', ['gaiters', 'inner tube', 'boogie board']);
// activities.set('skiing', ['skiis', 'snowboard', 'helmet', 'boots', 'poles', 'goggles', 'heavy gloves', 'heavy jacket', 'heavy pants']);
// activities.set('ice fishing', ['ice auger', 'tape measure', 'ice pick',]);
// activities.set('showshoeing', ['snowshoes', 'poles', 'weather proof boots', 'gaiters']);


// var shitlist  = [];
// for (var i = 0; i < activities.get('swim').length; i++) {
//   shitlist.push(activities.get('swim')[i]);
// }
