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
      const generateGraphicsButton = document.createElement("button");
      gamesContainer.style.display = "none";
      chooseGamesText.innerHTML =
        "The games will be added to your integrated graphics";
      generateGraphicsButton.innerHTML = "Generate & Install Graphics";
      generateGraphicsButton.style.padding = "10px 20px";
      generateGraphicsButton.style.borderRadius = "20px";
      generateGraphicsButton.style.border = "none";
      generateGraphicsButton.style.backgroundColor = "rgb(40, 86, 128)";
      generateGraphicsButton.style.color = "white";
      generateGraphicsButton.style.marginTop = "5vh";
      generateGraphicsButton.style.marginBottom = "5vh";
      generateGraphicsButton.style.fontSize = "1.5em";
      generateGraphicsButton.style.marginLeft = "40vw";
      generateGraphicsButton.style.cursor = "pointer";
      downloadSection.appendChild(generateGraphicsButton);

      // DOWNLOAD BUTTON CLICKED HERE
      generateGraphicsButton.addEventListener("click", function () {
        generateGraphicsButton.style.display = "none";
        const progressBarContainer = document.createElement("div");
        progressBarContainer.style.padding = "10px";
        progressBarContainer.style.borderRadius = "10px";
        progressBarContainer.style.width = "70vw";
        progressBarContainer.style.height = "10vh";
        progressBarContainer.style.backgroundColor = "#CDDADD";
        progressBarContainer.style.margin = "10vh 15vw";
        progressBarContainer.style.display = "relative";
        progressBarContainer.style.overflow = "hidden";
        downloadSection.appendChild(progressBarContainer);

        const progressBar = document.createElement("div");
        var progressBarWidth = 15;
        progressBar.style.left = "0";
        progressBar.style.top = "0";
        progressBar.style.height = "100%";
        progressBar.style.width = progressBarWidth + "%";
        progressBar.style.backgroundColor = "rgb(40, 86, 128)";
        progressBar.style.borderRadius = "10px";
        progressBarContainer.appendChild(progressBar);
      });
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
