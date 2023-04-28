import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const galleryItemsMarcup = createGalleryItems(galleryItems);

galleryContainer.addEventListener('click', onOpenOriginalImg);

function createGalleryItems(galleryItems){
   return galleryItems.map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
   <a class="gallery__link" href="${ original }">
      <img class="gallery__image" src="${ preview }" alt="${ description }" />
   </a>
</li>
      `;
   })
   .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarcup);

function onOpenOriginalImg(e){
blockStandartAction(e);
if(e.target.nodeName !== "IMG"){
   return
}else{
   var lightbox = new SimpleLightbox('.gallery__link', { captionsData: "alt", captionDelay: "250", enableKeyboard: "true" });
}

}

function blockStandartAction(e){
   e.preventDefault()
}