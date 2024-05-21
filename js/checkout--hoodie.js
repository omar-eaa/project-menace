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

const subscribeButton = document.getElementById("subscribeButton");
const messageContainer = document.getElementById("messageContainer");
const emailSection = document.getElementById("emailSection");

messageContainer.style.display = "none";

subscribeButton.addEventListener("click", function () {
  messageContainer.style.display = "block";
  emailSection.style.display = "none";

  setTimeout(function () {
    messageContainer.style.display = "none";
    emailSection.style.display = "block";
  }, 3000);
});

// link connection area 👇

// link to heavyweightHoodie
document.addEventListener("DOMContentLoaded", function () {
  const heavyweightHoodie = document.getElementById("heavyweightHoodie");
  heavyweightHoodie.addEventListener("click", function () {
    window.location.href = "../html/havyhoodies.html";
  });
});
// link to bæredygtighed
document.addEventListener("DOMContentLoaded", function () {
  const bæredygtighed = document.getElementById("bæredygtighed");
  bæredygtighed.addEventListener("click", function () {
    window.location.href = "../html/bearedygtighed.html";
  });
});

// link to vision mision vædier
document.addEventListener("DOMContentLoaded", function () {
  const vMv = document.getElementById("vMv");
  vMv.addEventListener("click", function () {
    window.location.href = "../html/Om-os.html";
  });
});

// link to coming zoon
document.addEventListener("DOMContentLoaded", function () {
  const comingSoon = document.getElementById("comingSoon");
  comingSoon.addEventListener("click", function () {
    window.location.href = "../html/comming-soon.html";
  });
});

// link to t-shirt
document.addEventListener("DOMContentLoaded", function () {
  const tShirt = document.getElementById("tShirt");
  tShirt.addEventListener("click", function () {
    window.location.href = "../html/t-shirt.html";
  });
});

// link to jackets
document.addEventListener("DOMContentLoaded", function () {
  const jackets = document.getElementById("jackets");
  jackets.addEventListener("click", function () {
    window.location.href = "../html/jackets.html";
  });
});

// link to jeans
document.addEventListener("DOMContentLoaded", function () {
  const jeans = document.getElementById("jeans");
  jeans.addEventListener("click", function () {
    window.location.href = "../html/jeans.html";
  });
});

// link to jerseys
document.addEventListener("DOMContentLoaded", function () {
  const jerseys = document.getElementById("jerseys");
  jerseys.addEventListener("click", function () {
    window.location.href = "../html/jerseys.html";
  });
});

// link to sweatshirts
document.addEventListener("DOMContentLoaded", function () {
  const sweatshirts = document.getElementById("sweatshirts");
  sweatshirts.addEventListener("click", function () {
    window.location.href = "../html/sweatshirts.html";
  });
});
