import { natureImages, cityImages, animalImages } from "./Images.js";
import { renderImages } from "./main.js";

const natureButton = document.getElementByclass("nature-images-btn");
const cityButton = document.getElementByclass("city-images-btn");
const animalButton = document.getElementByclass("animal-images-btn");
const allButton = document.getElementByclass("all-images-btn");

natureButton.addEventListener("click", () => {
  renderImages(natureImages);
  np;
  console.log("Nature images button clicked");
});

cityButton.addEventListener("click", function () {
  renderImages(cityImages);
  console.log("City images button clicked");
});

animalButton.addEventListener("click", function () {
  renderImages(animalImages);
  console.log("Animal images button clicked");
});

allButton.addEventListener("click", function () {
  renderImages(allImages);
});

export { natureButton, cityButton, animalButton, allButton };
const allImages = [...natureImages, ...cityImages, ...animalImages];
