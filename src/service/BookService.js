import axios from "axios";

const SERVER_URL = "http://localhost:9000";

export const getAllBook = () => {

const url = `${SERVER_URL}/books`;

return axios.get(url);


}

export const getBook = (bookId) => {
    const url = `${SERVER_URL}/books/${bookId}`;


    return axios.get(url);
}



export const getAllGenre = () => {

const url = `${SERVER_URL}/genres`;

return axios.get(url);

}


export const getGenre = (genreId) => {


    const url = `${SERVER_URL}/genres/${genreId}`;


    return axios.get(url);
}


export const createBook = (book) => {



    const url = `${SERVER_URL}/books`;

    return axios.post(url,book);
}