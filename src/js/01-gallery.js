import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const  galleryContainer = document.querySelector('.gallery')

const createGalleryMarkup = galleryItems.map(item => {
    const { preview, original, description } = item
    return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`
}).join("");

galleryContainer.insertAdjacentHTML('afterbegin', createGalleryMarkup)
 
var lightbox = new SimpleLightbox('.gallery .gallery__item', {captionsData:'alt',captionDelay:250});

// const refs = {
//     galleryContainer: document.querySelector(".gallery"),
// }

// const galleryItemsMarkup = galleryItems.map(item => {
//     const {preview, original, description} = item
//     return `
// <a class="gallery__item" href="${original}">
//   <img class="gallery__image" src="${preview}" alt="${description}" />
// </a>
// `
// }).join("")


// refs.galleryContainer.insertAdjacentHTML('afterbegin', galleryItemsMarkup)

// var lightbox = new SimpleLightbox('.gallery .gallery__item', {captionsData:'alt',captionDelay:250});
