
import searchImages from './js/pixabay-api';
import { showError, renderGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

const searchForm = document.querySelector(".form");
const searchInput = document.querySelector("input");


const onSearch =  (event) => {
    event.preventDefault();  
    let userSearch = searchInput.value.trim();
    if (userSearch === "") {
        return
    }
    clearGallery();
    showLoader();
    searchImages(userSearch, (result) => {
        hideLoader();
        if (result.length === 0) {
            showError();
        } else {
            renderGallery(result);
        }
     searchInput.value = "";
    });
    
}

searchForm.addEventListener("submit", onSearch);

