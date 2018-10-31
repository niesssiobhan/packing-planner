'use strict';

var listToRender = JSON.parse(localStorage.storedList);

function renderTrip() {
  var listBody = document.getElementById('finalSelection');

  for (var i = 0; i < listToRender.length; i++) {
    var iLI = document.createElement('li');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    var iDEL  = document.createElement('del');

    iDEL.textContent = listToRender[i];

    iLI.appendChild(checkbox);
    iLI.appendChild(iDEL);
    listBody.appendChild(iLI);
  }
}

function handleSubmit(e) {
e.preventDefault();

var newitem = e.target.newItem.value;
console.log(newitem);
listToRender.push(newitem);
document.getElementById('finalSelection').innerHTML='';
renderTrip();
// document.getElementById('add').onclick = function() {
//   var text = document.getElementById('additions').value;
//   var li = '<li>' + text + '</li>';
//   document.getElementById('list').appendChild(li);
  // listToRender.push(li);
  // renderTrip();
  // 
}
var additionForm = document.getElementById('additionForm');
additionForm.addEventListener('submit', handleSubmit);

renderTrip();
