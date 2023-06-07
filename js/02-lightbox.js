import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulGallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({preview, original, description})=>{
    return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}"
                    />
                </a>
            </li>`
    }).join('');

ulGallery.insertAdjacentHTML('afterbegin', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    navText: ['←','→'],
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

ulGallery.addEventListener('click', lightbox)


















// ulGallery.addEventListener('click', handlerUlGalleryClick);
// function handlerUlGalleryClick(evt){
//     evt.preventDefault();
//     if(!evt.target.classList.contains('gallery__image')){return};
//    const currentImg = evt.target.dataset.source;
// //    console.dir(evt.target);
// //    console.log(currentImg);
//    const instance = basicLightbox.create(`
//     <img src="${currentImg}" width="800" height="600">
// `)

// instance.show()
// }