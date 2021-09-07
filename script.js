const gamesContainer = document.querySelector(".gamesContainer");
const downloadSection = document.querySelector(".downloadSection");
const chooseGamesText = document.querySelector(".chooseGamesText");
const downloadHeading = document.querySelector(".downloadHeading");

// Loading game containers separately
const gameContainers = document.querySelectorAll(
  ".gtaContainer, .theWitcherThreeContainer, .hitmanContainer, .skyrimContainer, .fifaContainer, .fortniteContainer, .apexLegendsContainer, .projectCarsContainer, .cyberpunkContainer"
);
console.log(gameContainers);

// Why does my if loop still works after clickCount > 5?
for (let i = 0; i < gameContainers.length; i++) {
  var clickCount = 0;
  gameContainers[i].addEventListener("click", function () {
    clickCount++;
    gameContainers[i].style.backgroundColor = "rgb(40, 86, 128)";
    gameContainers[i].style.color = "white";
    // console.log("you clicked " + clickCount + " times");
    if (clickCount === 4) {
      chooseGamesText.innerHTML =
        "Just one more game remaining! Choose wisely.";
    }

    if (clickCount === 5) {
      const downloadButton = document.createElement("button");
      gamesContainer.style.display = "none";
      chooseGamesText.innerHTML =
        "Your integrated graphics has been generated!";
      downloadButton.innerHTML = "Download & Install";
      downloadButton.style.padding = "10px 20px";
      downloadButton.style.borderRadius = "20px";
      downloadButton.style.border = "none";
      downloadButton.style.backgroundColor = "rgb(40, 86, 128)";
      downloadButton.style.color = "white";
      downloadButton.style.marginTop = "5vh";
      downloadButton.style.marginBottom = "5vh";
      downloadButton.style.fontSize = "1.5em";
      downloadButton.style.marginLeft = "42.5vw";
      downloadButton.style.cursor = "pointer";
      downloadSection.appendChild(downloadButton);
    }
  });
}

// const gtaContainer = gameContainers[0];
// const theWitcherThreeContainer = gameContainers[1];
// const hitmanContainer = gameContainers[2];
// const skyrimContainer = gameContainers[3];
// const fifaContainer = gameContainers[4];
// const fortniteContainer = gameContainers[5];
// const apexLegendsContainer = gameContainers[6];
// const projectCarsContainer = gameContainers[7];
// const cyberpunkContainer = gameContainers[8];

// var clickCount = 0;
// gtaContainer.addEventListener("click", function () {
//   gtaContainer.style.backgroundColor = "rgb(40, 86, 128)";
//   gtaContainer.style.color = "white";
//   clickCount++;
//   console.log(clickCount);
// });
// theWitcherThreeContainer.addEventListener("click", function () {
//   theWitcherThreeContainer.style.backgroundColor = "rgb(40, 86, 128)";
//   theWitcherThreeContainer.style.color = "white";
//   clickCount++;
//   console.log(clickCount);

//   if (clickCount >= 5) {
//     console.log("This is working");
//   }
// });
