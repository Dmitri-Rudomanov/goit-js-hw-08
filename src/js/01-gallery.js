// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";

// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallery = document.querySelector(".gallery")

const markup=galleryItems
.map(item=>
    `<a class="gallery__item" href=${item.original}>
    <img class="gallery__image" src=${item.preview} alt="${item.description}" />
    </a>`)
.join("")
console.log(markup)

function createImg(markup) {
gallery.insertAdjacentHTML("beforeend",markup)
}
createImg(markup)

console.log(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

