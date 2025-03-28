
import axios from "axios";

const API_KEY = "49358880-33c4acc352e7c36c64dc2caaa";
const BASE_URL = "https://pixabay.com/api/";


const options = {
    params: {
        key: API_KEY ,
        q: "",
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
        per_page: 15,
        page: 1,
    }
};


export default async function searchImages(query, page, callback) {
    try {
        options.params.q = query;
        options.params.page = page;
        const response = await axios.get(BASE_URL, options);
        callback(response.data.hits, response.data.totalHits);
    } catch (error) {
        callback([], 1, 0); 
    };
}



