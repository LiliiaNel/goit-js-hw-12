// import fetchData from './js/pixabay-api';
// import moduleName from './js/render-functions';


import searchImages from './js/pixabay-api';
import { showError, createGalleryMarkup, refreshGallery } from './js/render-functions';

const searchForm = document.querySelector(".form");
const searchInput = document.querySelector("input");
// const submitBtn = document.querySelector("button");

const onSearch =  (event) => {
    event.preventDefault();  
    let userSearch = searchInput.value.trim();
    if (userSearch === "") {
        return
    }
    searchImages(userSearch, (result) => {
        console.log(result);
        console.log(result.length);
        if (result.length === 0) {
            showError();
        } else {
            refreshGallery(result);
        }
    
    });
    
}

searchForm.addEventListener("submit", onSearch);

