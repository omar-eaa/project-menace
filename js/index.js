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
});
shopNavContainer.addEventListener("mouseleave", () => {
  // Show the shop nav container
  shopNavContainer.style.display = "none";
});

// Add event listener for mouseover event on omOs element or  om os nav container
omOsElement.addEventListener("mouseover", () => {
  // Show the shop nav container
  omOsNavContainer.style.display = "block";
  //   shopNavContainer.style.display = "flex";
});
omOsNavContainer.addEventListener("mouseleave", () => {
  // Show the shop nav container
  omOsNavContainer.style.display = "none";
});
