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

// thank you message 📧👇
// Get the button element and message container
const subscribeButton = document.getElementById("subscribeButton");
const messageContainer = document.getElementById("messageContainer");
const emailSection = document.getElementById("emailSection");
// Hide the message container by default
messageContainer.style.display = "none";

// Add a click event listener to the button
subscribeButton.addEventListener("click", function () {
  // Show the message container
  messageContainer.style.display = "block";

  // Hide the message container after 3 seconds
  setTimeout(function () {
    messageContainer.style.display = "none";
  }, 3000);
});
