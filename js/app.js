'use strict';

//global variables
var masterItems = ['toiletry bag', 'camera', 'phone charger', 'sunglasses', 'wallet/ ID', 'water bottle', 'medication', 'headphones', 'sunscreen'];

var coldActivities = ['sledding', 'skiing', 'ice fishing', 'snowshoeing'];
var hotActivities = ['swimming', 'snorkeling', 'fishing', 'golfing', 'hiking'];
var temperateActivities = ['golfing', 'hiking', 'fishing'];

var coldMaster = ['heavy jacket', 'gloves', 'warm boots', 'knitted cap', 'warm/thick socks', 'thermal underwear', 'scarf'];
var hotMaster = ['bathing suit', 'beach towel', 'sandles/ flip-flops', 'hat', 'bug spray', 'aloe vera/ after sun lotion', 'light rain proof jacket'];
var temperateMaster = ['light rain proof jacket', 'hat', 'bug spray', 'rain boots', 'rubber sole shoes/ water-resistant', 'umberella'];


var activitiesMap = new Map();

activitiesMap.set('swimming', ['water goggles', 'floaties', 'nose plug']);
activitiesMap.set('snorkeling', ['snorkel mask', 'flippers', 'underwater camera gear', 'snorkel', 'water shoes', 'rash guard', 'float vest', 'wet suit']);
activitiesMap.set('fishing', ['fishing pole and reel', 'tackle box', 'first aid kit', 'tip up', 'life vest', 'extra line', 'needle nose pliers', 'waders']);
activitiesMap.set('golfing', ['golf shoes', 'golf bag', 'collared shirt', 'golf balls', 'tees']);
activitiesMap.set('hiking', ['tent', 'backpack', 'hiking boots', 'hiking poles', 'compass/ map', 'food', 'cooking pots/ pans', 'water filter', 'lighter', 'utensils', 'sleeping bag', 'pillow', 'first aid kit', 'multi-purpose tool', 'trash bag']);
activitiesMap.set('sledding', ['gaiters', 'inner tube', 'boogie board']);
activitiesMap.set('skiing', ['skiis', 'snowboard', 'helmet', 'boots', 'poles', 'goggles', 'heavy gloves', 'heavy jacket', 'heavy pants']);
activitiesMap.set('ice fishing', ['ice auger', 'tape measure', 'ice pick',]);
activitiesMap.set('snowshoeing', ['snowshoes', 'poles', 'weather proof boots', 'gaiters']);

// var vacationList = [];

var Trip = function(array) {
  this.array = array;
}

var trip = new Trip(masterItems);
// console.log(trip);

Trip.prototype.addItems = function(itemArray) {
  for (var i = 0; i < itemArray.length; i++) {
    this.array.push(itemArray[i]);
  }
}

Trip.prototype.removeArray = function(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array);
    this.array.splice(this.array.indexOf(array[i]), 1);
  }
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = 'block';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
