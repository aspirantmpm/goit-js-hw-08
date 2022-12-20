// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join('');
}

gallery.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
    let gallery = new SimpleLightbox('.gallery');
    gallery.on('show.simplelightbox', function () {
      // Do something…
        `<img class="gallery__image" src="${evt.target.dataset.source}" alt="${evt.target.description}" width="800" height="600"/>`;
    });

    gallery.on('error.simplelightbox', function (e) {
      console.log(e); // Some usefull information
    });

//   const originalSize = simplelightbox.create(`<img class="gallery__image" src="${evt.target.dataset.source}" alt="${evt.target.description}" width="800" height="600"/>`);

  document.addEventListener('keydown', onClickClose);
  originalSize.show();
  console.log(evt.target);
}
// console.log(simplelightbox);
function onClickClose(evt) {
  if (evt.code === 'Escape') {
    originalSize.close();
    documents.removeEventListener('keydown', onClickClose);
  }
}
