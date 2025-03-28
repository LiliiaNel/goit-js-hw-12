
import searchImages from './js/pixabay-api';
import { showError, showInfo, renderGallery, clearGallery, showLoader, hideLoader, scroll } from './js/render-functions';

const searchForm = document.querySelector(".form");
const searchInput = document.querySelector("input");
const paginateBtn = document.querySelector(".load-btn");

let userSearch;
let pageNum;

const onSearch = (event) => {
    event.preventDefault();  
    userSearch = searchInput.value.trim();
    if (userSearch === "") {
        return
    }
    clearGallery();
    showLoader();
    searchImages(userSearch, 1, (result, totalHits) => {
        pageNum = 1;
        hideLoader();
        if (result.length === 0) {
            showError();
            paginateBtn.classList.add("hidden");
        } else {
            clearGallery();
            renderGallery(result);
            paginateBtn.classList.remove("hidden");
            scroll();
        }
     searchInput.value = "";
    });
}

searchForm.addEventListener("submit", onSearch);


const getPaginatedImgs = (event) => {
    event.preventDefault();
    pageNum += 1;
    showLoader();
    searchImages(userSearch, pageNum, (result, totalHits) => {
        const totalPages = Math.ceil(totalHits / 15);
        if (pageNum > totalPages) {
            paginateBtn.classList.add("hidden");
            hideLoader();
            showInfo();
        } else {
            hideLoader();
            renderGallery(result);
            scroll();
        }
    });
}

paginateBtn.addEventListener("click", getPaginatedImgs);
