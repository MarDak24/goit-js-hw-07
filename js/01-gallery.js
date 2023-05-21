import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".js-gallery");

const markup = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link js-target" href="${original}">
    <img
      class="gallery__image js-target"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
);

container.insertAdjacentHTML("beforeend", markup.join(""));
container.addEventListener("click", onClick);

let instance;

function onClick(evt) {
  evt.preventDefault();
  const { target } = evt;
  if (!target.classList.contains("js-target")) {
    return;
  }

  instance = basicLightbox.create(
    `<div class="modal">
      <img src="${target.dataset.source}" alt="${target.alt}">
    </div>`
  );
  instance.show();
}

container.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && instance) {
    instance.close();
  }
});
