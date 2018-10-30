'use strict'

var climatePicker = document.getElementById('climates');
var activityForm = document.getElementById('activityForm');

var hotActivityActivities = ['Swim', 'Water Ski', 'Golf'];
var temperateActivities = ['Hike', 'Fishing', 'Biking'];
var coldActivities = ['Ice Fishing', 'Skiing', 'Snowshoeing'];

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

function handleClimateSelection(e) {
  console.log(e.target.textContent + ' clicked');
  console.log(e);

  activityForm.hidden = false;

  var activityList = [];
  switch (e.target.textContent) {
  case 'Hot':
    activityList = hotActivityActivities;
    break;
  case 'Temperate':
    activityList = temperateActivities;
    break;
  case 'Cold':
    activityList = coldActivities;
    break;
  }

  for (var i = 0; i < activityList.length; i++) {
    createCheckboxItem('activities', activityList[i]);
  }
}

function handleActivitySubmit(e) {
  e.preventDefault();
  console.log(e);

  for (var i = 0; i < e.target.length; i++) {
    console.log(e.target[i].value, e.target[i].checked);
  }
}

climatePicker.addEventListener('click', handleClimateSelection);
activityForm.addEventListener('submit', handleActivitySubmit);

var activities = new Map();
activities.set('swim', [1,2,3,4]);
activities.set('golf', [5,6,7,8]);

var shitlist  = [];
for (var i = 0; i < activities.get('swim').length; i++) {
  shitlist.push(activities.get('swim')[i]);
}
