import "./style.css";
import { natureImages, cityImages, animalImages } from "./Images.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Image Gallery</h1>
    
    <h2>Images: </h2>
    
    <div id="gallery"></div>
    
    <button class="nature-images-btn">Show Nature Images</button>
    
    <button class="city-images-btn">Show City Images</button>
    
    <button class="animal-images-btn">Show Animal Images</button>

    <div>
      <button class="all-images-btn">Show All Images</button>
    
    </div>
    

  </div>
`;

export function renderImages(images, containerId = "gallery") {
  const galleryContainer = document.getElementById(containerId);
  if (!galleryContainer) return;

  galleryContainer.innerHTML = "";
  images.forEach((img) => {
    const image = document.createElement("img");
    image.src = img.src;
    image.alt = img.alt;
    image.classList.add("gallery-img");

    galleryContainer.appendChild(image);
  });
}
const galleryContainer = document.getElementById("gallery");

const natureButton = document.querySelector(".nature-images-btn");
const cityButton = document.querySelector(".city-images-btn");
const animalButton = document.querySelector(".animal-images-btn");
const allButton = document.querySelector(".all-images-btn");

natureButton.addEventListener("click", () => {
  renderImages(natureImages);
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

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  // Your code to manipulate the DOM goes herer
  renderImages(allImages);
});

// renderImages(natureImages);
// renderImages(cityImages);
// renderImages(animalImages);

document.getElementsByClassName;
