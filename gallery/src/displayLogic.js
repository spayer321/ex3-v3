const galleryContainer = document.getElementById("gallery");

function renderImages(images) {
  images.forEach((img) => {
    const image = document.createElement("img");

    image.src = img.src;

    image.alt = img.alt;

    galleryContainer.appendChild(image);
  });
}
