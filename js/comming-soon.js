// Get the shop element
const shopElement = document.getElementById("shop");

const omOsElement = document.getElementById("omOs");

// Get the shop nav container
const shopNavContainer = document.getElementById("shop-nav-container");
// get the om os nav container
const omOsNavContainer = document.getElementById("om-os-nav-container");

// hiding containers
shopNavContainer.style.display = "none";
omOsNavContainer.style.display = "none";

// Add event listener for mouseover event on shop element or nav container
shopElement.addEventListener("mouseover", () => {
  // Show the shop nav container
  shopNavContainer.style.display = "block";
  shopNavContainer.style.display = "flex";
  // Hide the omOs nav container
  omOsNavContainer.style.display = "none";
});
shopNavContainer.addEventListener("mouseleave", () => {
  // Hide the shop nav container
  shopNavContainer.style.display = "none";
});

// Add event listener for mouseover event on omOs element or om os nav container
omOsElement.addEventListener("mouseover", () => {
  // Show the omOs nav container
  omOsNavContainer.style.display = "block";
  // Hide the shop nav container
  shopNavContainer.style.display = "none";
});
omOsNavContainer.addEventListener("mouseleave", () => {
  // Hide the omOs nav container
  omOsNavContainer.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const homePage = document.getElementById("homePage");
  homePage.addEventListener("click", function () {
    window.location.href = "../index.html";
  });
});

// count down

document.addEventListener("DOMContentLoaded", function () {
  const countdownElement = document.querySelector("#video-coming-soon h2");
  const initialTime = "07:07:24"; // Initial countdown time in HH:MM:SS format

  function parseTimeString(timeString) {
    const [hours, minutes, seconds] = timeString.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }

  function formatTime(seconds) {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  }

  function startCountdown(duration) {
    let timeRemaining = duration;
    const intervalId = setInterval(() => {
      countdownElement.textContent = formatTime(timeRemaining);
      if (timeRemaining === 0) {
        timeRemaining = duration;
      } else {
        timeRemaining -= 1;
      }
    }, 1000);
  }

  const countdownDuration = parseTimeString(initialTime);
  startCountdown(countdownDuration);
});
