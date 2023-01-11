
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryArr = document.querySelector(".gallery");


const images = galleryItems.map(({ preview, original, description }) =>
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>`).join("")

galleryArr.insertAdjacentHTML('beforeend', images)

let gallery = new SimpleLightbox('.gallery a', {fadeSpeed: 250});
    gallery.on('show.simplelightbox', function () {
});

   