
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

function createGalleryMarkup(images) {
    return images
      .map(({ comments, downloads, largeImageURL, likes, webformatURL, views, tags }) => {
        return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
        <ul class="image-text-list">
          <li><span class="img-text">Likes</span> ${likes}</a></li>
          <li><span class="img-text">Views</span> ${views}</a></li>
          <li><span class="img-text">Comments</span> ${comments}</a></li>
          <li><span class="img-text">Downloads</span> ${downloads}</a></li>
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

export function renderGallery(images) {
  clearGallery();
  galleryList.insertAdjacentHTML("beforeend", createGalleryMarkup(images));
  lightbox.refresh();
}

export function clearGallery() {
galleryList.innerHTML = "";
}

const loader = document.querySelector(".loader");

export function showLoader() {
  loader.classList.remove("loader-hidden");
}

export function hideLoader() {
  loader.classList.add("loader-hidden");
}