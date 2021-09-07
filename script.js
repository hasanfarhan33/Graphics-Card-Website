const gamesContainer = document.querySelector(".gamesContainer");

// Loading game containers separately
const gtaContainer = gamesContainer.querySelector(".gtaContainer");
const theWitcherThreeContainer = gamesContainer.querySelector(
  ".theWitcherThreeContainer"
);
const hitmanContainer = gamesContainer.querySelector(".hitmanContainer");
const skyrimContainer = gamesContainer.querySelector(".skyrimContainer");
const fifaContainer = gamesContainer.querySelector(".fifaContainer");
const fortniteContainer = gamesContainer.querySelector(".fortniteContainer");
const apexLegendsContainer = gamesContainer.querySelector(
  ".apexLegendsContainer"
);
const projectCarsContainer = gamesContainer.querySelector(
  ".projectCarsContainer"
);
const cyberpunkContainer = gamesContainer.querySelector(".cyberpunkContainer");

const gameContainers = [
  gtaContainer,
  theWitcherThreeContainer,
  hitmanContainer,
  skyrimContainer,
  fifaContainer,
  fortniteContainer,
  apexLegendsContainer,
  projectCarsContainer,
  cyberpunkContainer,
];

console.log(gameContainers);

// gameContainers.forEach(function (container) {
//   container.onclick = function () {
//     container.style.backgroundColor = "#285680";
//     container.style.color = "white";
//   };
// });

var clickCount = 0;
for (let i = 0; i < gameContainers.length; i++) {
  gameContainers[i].onclick = function () {
    clickCount++;
    gameContainers[i].style.backgroundColor = "#285680";
    gameContainers[i].style.color = "white";
    // console.log(clickCount);
  };
}
