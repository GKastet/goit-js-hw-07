import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
console.log('123');

const ulGallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({preview, original, description})=>{
    return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </li>`
}).join('');

ulGallery.insertAdjacentHTML('afterbegin', galleryMarkup);

ulGallery.addEventListener('click', handlerUlGalleryClick);
function handlerUlGalleryClick(evt){
    evt.preventDefault();
    if(!evt.target.classList.contains('gallery__image')){return};
   const currentImg = evt.target.dataset.source;
   const instance = basicLightbox.create(`
    <img src="${currentImg}" width="800" height="600">
`)
instance.show()
}


