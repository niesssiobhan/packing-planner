'use strict';

var listToRender = JSON.parse(localStorage.storedList);

function renderTrip() {
  var listBody = document.getElementById('finalSelection');

  for (var i = 0; i < listToRender.length; i++) {
    var newListItem = document.createElement('label');
    newListItem.className = 'container';

    var newCheck = document.createElement('input');
    newCheck.type = 'checkbox';

    var newDel = document.createElement('del');
    newDel.textContent = listToRender[i];

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

  var newitem = e.target.newItem.value;
  console.log(newitem);
  listToRender.push(newitem);
  document.getElementById('finalSelection').innerHTML='';
  renderTrip();
  e.target.newItem.value = null;
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
