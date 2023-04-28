import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarcup = createGalleryItems(galleryItems);

galleryContainer.addEventListener('click', onOpenOriginalImg);


function createGalleryItems(galleryItems){
   return galleryItems.map(({ preview, original, description }) => {
      return  `
      <li class="gallery__item">
   <a class="gallery__link"${ original }">
   <img
      class="gallery__image"
      src="${ preview }"
       data-source="${ original }"
      alt="${ description }"
     />
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
      return;
   } else{
      const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}"  width="1280" height="853">
   `);
   instance.show();

document.addEventListener('keydown', onCloseOriginalImg);
function onCloseOriginalImg(e){
   console.log(e.code);
   if(e.code === "Escape"){
      instance.close();
   }};
   }
}

function blockStandartAction(e){
   e.preventDefault()
}


