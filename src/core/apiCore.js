import { API } from "../config";
import queryString from "query-string";

// Functions that consumes backend Apis

export const getProducts = sortBy => {
    return fetch(`${API}/products/?sortBy=${sortBy}&order=desc&limit=6`, {
        method: "GET"
    })
        .then( response => {
            return response.json();
        })
        .catch( err => console.log(err));
};

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    })
        .then( response => {
            return response.json();
        })
        .catch( err => console.log(err));
};

export const list = params => {
    const query = queryString.stringify(params);
    return fetch(`${API}/products/search?${query}`, {
        method: "GET"
    })
        .then( response => {
            return response.json();
        })
        .catch( err => console.log(err));
};

