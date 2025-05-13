/** @format */

const defaultPlayers = [
  "Stella",
  "Colette",
  "Reese",
  "Maddie",
  "Jolie",
  "Clara",
  "Norah",
  "Remi",
  "Cara",
  "London",
  "Maxie",
  "Lena",
];

window.onload = function () {
  // Generate the player list
  const playerList = document.getElementById("player-list");
  playerList.innerHTML = "";
  defaultPlayers.forEach((name) => {
    addPlayerToList(name);
  });

  // Print button handler
  const printBtn = document.getElementById("print-btn");
  if (printBtn) {
    printBtn.onclick = function () {
      window.print();
    };
  }

  // Allow Enter key to add names
  document
    .getElementById("new-name")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") addName();
    });

  // Enable drag-and-drop sorting for the player list
  if (window.Sortable) {
    Sortable.create(document.getElementById("player-list"), {
      animation: 150,
      ghostClass: "sortable-ghost",
    });
  }
};

function addName() {
  const nameInput = document.getElementById("new-name");
  const playerName = nameInput.value.trim();
  if (playerName) {
    addPlayerToList(playerName);
    nameInput.value = "";
  }
}

function addPlayerToList(name) {
  const playerList = document.getElementById("player-list");
  const li = document.createElement("li");
  li.className = "player-item";
  li.textContent = name;
  li.title = "Click to remove";
  li.onclick = function () {
    if (confirm(`Remove ${name}?`)) li.remove();
  };
  playerList.appendChild(li);
}

// Randomize the order
function generateOrder() {
  const playerList = document.getElementById("player-list");
  const items = Array.from(playerList.children);
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    playerList.insertBefore(items[j], items[i]);
    [items[i], items[j]] = [items[j], items[i]];
  }
}
