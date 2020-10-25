import { API } from "../config";
import queryString from "query-string";

// Functions that consumes backend Apis

export const getProducts = sortBy => {
    return fetch(`${API}/products/?sortBy=${sortBy}&order=desc&limit=6`, {
        method: "GET"
    }).then( response => {
        return response.json();
    }).catch( err => console.log(err));
};
