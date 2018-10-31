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

renderTrip();
