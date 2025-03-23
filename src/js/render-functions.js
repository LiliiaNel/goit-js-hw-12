// У файлі render-functions.js створи функції для відображення елементів інтерфейсу
// (додавання, оновлення, очищення елементів галереї; відображення, приховування лоедера).


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function showError() {
  console.log("show error");
  iziToast.error({
    title: '',
    message: 'Sorry, there are no images matching your search query. Please try again!',
    messageColor: '#fff',
    messageSize: '16px',
    messageLineHeight: '1.5',
    backgroundColor: '#ef4040',
    close: true,
    position: 'topRight',
    timeout: 3000,
  });
}

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector("ul.gallery");

export function createGalleryMarkup(images) {
    return images
      .map(({ comments, downloads, largeImageURL, likes, previewURL, views, tags }) => {
        console.log(largeImageURL);
        return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${previewURL}" alt="${tags}" />
        </a>
        <ul class="image-text-list">
          <li>Likes: ${likes}</a></li>
          <li>Views: ${views}</a></li>
          <li>Comments: ${comments}</a></li>
          <li>Downloads: ${downloads}</a></li>
        </ul>
        </li>`
        })
     .join("");
 }

let options = {
  captionsData: "alt",
  captionDelay: 250,
};
const lightbox = new SimpleLightbox('.gallery a', options);

export function refreshGallery(images) {
  galleryList.innerHTML = "";
  galleryList.insertAdjacentHTML("beforeend", createGalleryMarkup(images));
  lightbox.refresh();
}
