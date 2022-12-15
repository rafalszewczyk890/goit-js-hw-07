import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  gallery.insertAdjacentHTML(
    "afterbegin",
    `<div class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</div>`
  );
});

function clickHandler(event) {
  event.preventDefault();
  const instance = basicLightbox.create(
    `<img class="gallery__image" src=${event.target.dataset.source}>`
  );

  instance.show();

  if (instance.visible) {
    gallery.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    });
  }
}

gallery.addEventListener("click", clickHandler);
