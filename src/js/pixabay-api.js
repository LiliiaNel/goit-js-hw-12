// У файлі pixabay-api.js зберігай функції для HTTP-запитів.

// libraries

import axios from "axios";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const API_KEY = "49358880-33c4acc352e7c36c64dc2caaa";
const BASE_URL = "https://pixabay.com/api/";


const options = {
    params: {
        key: API_KEY ,
        q: "",
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    }
};



export default function searchImages(query, callback) {
    options.params.q = query;
     axios.get(BASE_URL, options)
        .then(response => {
            callback (response.data.hits);
        })
        .catch(error => { callback ([]); });
    }
