/** @format */

function generateOrder() {
  var playerList = Array.from(document.querySelectorAll("#player-list li"));
  shuffleArray(playerList);

  var ulElement = document.getElementById("player-list");
  while (ulElement.firstChild) {
    ulElement.removeChild(ulElement.firstChild);
  }

  playerList.forEach(function (player) {
    var li = document.createElement("li");
    li.textContent = player.textContent;
    ulElement.appendChild(li);
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

document.getElementById("print-btn").addEventListener("click", function () {
  window.print();
});

// Function to add a new name
function addName() {
    var newName = document.getElementById('new-name').value;
    if (newName) {
        var li = document.createElement('li');
        li.textContent = newName;
        li.onclick = makeEditable;
        document.getElementById('player-list').appendChild(li);
        document.getElementById('new-name').value = '';
    }
}

// Function to make an element editable
function makeEditable() {
    var input = document.createElement('input');
    input.value = this.textContent;
    this.textContent = '';
    this.appendChild(input);
    input.focus();
    input.onblur = function() {
        this.parentNode.textContent = this.value;
    };
    input.onkeydown = function(e) {
        if (e.key === 'Enter') {
            this.blur();
        }
    };
}

// Add the onclick event to existing list items
var listItems = document.getElementById('player-list').getElementsByTagName('li');
for (var i = 0; i < listItems.length; i++) {
    listItems[i].onclick = makeEditable;
}

document.getElementById("logo-upload").addEventListener("change", function (e) {
  var reader = new FileReader();
  reader.onload = function (event) {
    document.getElementById("roster-logo").src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
});

document.getElementById("primary-color").addEventListener("input", function () {
  var color = this.value;
  document.querySelector("h1").style.backgroundColor = color;
  var playerListItems = document.querySelectorAll("#player-list li");
  playerListItems.forEach(function (item) {
    item.style.backgroundColor = color;
  });
  var buttons = document.querySelectorAll("button");
  buttons.forEach(function (button) {
    button.style.backgroundColor = color;
  });
});


  document
    .getElementById("secondary-color")
    .addEventListener("input", function () {
      var color = this.value;
      document.querySelector("h1").style.color = color;
      var playerListItems = document.querySelectorAll("#player-list li");
      playerListItems.forEach(function (item) {
        item.style.color = color;
      });
      var buttons = document.querySelectorAll("button");
      buttons.forEach(function (button) {
        button.style.color = color;
      });
    });
    // Add an event listener to handle the Enter key
document.getElementById('new-name').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addName();
    }
});

function addName() {
    const nameInput = document.getElementById('new-name');
    const playerName = nameInput.value.trim();

    if (playerName) {
        const playerList = document.getElementById('player-list');
        const listItem = document.createElement('li');
        listItem.textContent = playerName;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            deleteName(listItem);
        };

        listItem.appendChild(deleteButton);
        playerList.appendChild(listItem);

        // Clear the input field
        nameInput.value = '';
    } else {
        alert('Please enter a valid name.');
    }
}

function deleteName(listItem) {
    listItem.remove();
}
function addName() {
  const nameInput = document.getElementById("new-name");
  const playerName = nameInput.value.trim();

  if (playerName) {
    const playerList = document.getElementById("player-list");
    const listItem = document.createElement("li");
    listItem.textContent = playerName;

    // Add a click event to delete the player when their name is clicked
    listItem.onclick = function () {
      deleteName(listItem);
    };

    playerList.appendChild(listItem);

    // Clear the input field
    nameInput.value = "";
  } else {
    alert("Please enter a valid name.");
  }
}

function deleteName(listItem) {
  if (confirm("Are you sure you want to delete this player?")) {
    listItem.remove();
  }
}