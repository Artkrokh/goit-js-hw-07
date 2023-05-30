import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector('.gallery');

function createMarkup(arr) {
    const markup = arr.map(({ description, original, preview }) => `
    <li class="gallery__item">
        <a class="gallery__link" href= "${original}" >
         <img
             class="gallery__image"
             src="${preview}"
                data-source="${original}"
             alt="${description}"
         />
         </a >
    </li > `).join('');
     return markup
}
 gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems))
 gallery.addEventListener('click', handlerClick);

 