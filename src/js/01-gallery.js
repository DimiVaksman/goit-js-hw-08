// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);

function onImgItems(items){
    return items
    .map((item) => `<div class="gallery">
    <a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"/></a>
</div>`).join("");
    }



const addGalleryItems = onImgItems(galleryItems);
galleryContainer.innerHTML = addGalleryItems;




galleryContainer.addEventListener('click' , openModalperClick)

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
 });

function openModalperClick (e){
    e.preventDefault()

    if( e.target.nodeName !== 'IMG'){
    return
    }



}
