const gamesContainer = document.querySelector(".gamesContainer");
const downloadSection = document.querySelector(".downloadSection");
const chooseGamesText = document.querySelector(".chooseGamesText");
const downloadHeading = document.querySelector(".downloadHeading");
var progressBarWidth;
var progressIncrement = 20;
var incrementSlash = 0.2;

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

        // MOVING THE PROGRESS BAR
        progressBarWidth = 0;
        const interval = setInterval(function () {
          if (progressBarWidth < 100) {
            progressBarWidth += progressIncrement * incrementSlash;
            progressBar.style.width = progressBarWidth + "%";
            console.log(progressBarWidth);
            if (progressBarWidth > 0 && progressBarWidth <= 20) {
              chooseGamesText.innerHTML = "Finding slots...";
              incrementSlash = 0.15;
            } else if (progressBarWidth > 20 && progressBarWidth <= 50) {
              chooseGamesText.innerHTML = "Choosing shaders...";
              incrementSlash = 0.1;
              progressIncrement = 15;
            } else if (progressBarWidth > 50 && progressBarWidth <= 80) {
              chooseGamesText.innerHTML = "Generating VRAM...";
              incrementSlash = 0.05;
              progressIncrement = 10;
            } else if (progressBarWidth > 80 && progressBarWidth < 100) {
              chooseGamesText.innerHTML = "Almost done";
              incrementSlash = 0.02;
              progressIncrement = 5;
            }

            if (progressBarWidth > 0) {
              progressBar.style.left = "0";
              progressBar.style.top = "0";
              progressBar.style.height = "100%";
              progressBar.style.backgroundColor = "rgb(40, 86, 128)";
              progressBar.style.borderRadius = "10px";
              progressBarContainer.appendChild(progressBar);
            }
            progressDisplay.innerHTML = Math.floor(progressBarWidth) + "%";
          } else if (progressBarWidth >= 100) {
            clearInterval(interval);
            console.log("The progress bar has finished");
            const videoFrame = document.createElement("iframe");
            progressBar.style.display = "none";
            progressBarContainer.style.display = "none";
            videoFrame.style.width = "60vw";
            videoFrame.style.height = "60vh";
            videoFrame.style.marginLeft = "20vw";
            videoFrame.style.marginTop = "5vh";
            videoFrame.src =
              "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0";
            videoFrame.frameborder = "0";
            downloadSection.appendChild(videoFrame);
            chooseGamesText.innerHTML =
              "I am sorry that you fell for this. This was just a joke";
          }
        }, 500);

        const progressBar = document.createElement("div");

        //Display Progress
        const progressDisplay = document.createElement("p");
        progressDisplay.style.padding = "15px 10px";
        progressDisplay.style.textAlign = "end";
        progressDisplay.style.fontSize = "1.25em";
        progressDisplay.style.color = "white";
        progressBar.appendChild(progressDisplay);
      });
    }
  });
}
