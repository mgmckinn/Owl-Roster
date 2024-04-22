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
