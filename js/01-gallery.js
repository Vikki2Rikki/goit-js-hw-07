import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const galleryItemsMarcup = createGalleryItems(galleryItems);

function createGalleryItems(galleryItems){
   return galleryItems.map(({ preview, original, description }) => {
      return  `
      <li class="gallery__item">
   <a class="gallery__link"${ original }">
   <img
      class="gallery__image"
      src="${ preview }"
       data-source="${ preview }"
      alt="${ description }"
     />
   </a>
 </li> 
      `;
   })
   .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarcup);

