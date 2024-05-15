// Get the shop element
const shopElement = document.getElementById("shop");

// Get the shop nav container
const shopNavContainer = document.getElementById("shop-nav-container");

shopNavContainer.style.display = "none";

// Add event listener for mouseover event on shop element or nav container
shopElement.addEventListener("mouseover", () => {
  // Show the shop nav container
  shopNavContainer.style.display = "block";
  shopNavContainer.style.display = "flex";
});

shopNavContainer.addEventListener("mouseleave", () => {
  // Show the shop nav container
  shopNavContainer.style.display = "none";
});
