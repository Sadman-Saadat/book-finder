import axios from 'axios';

const APIKey = "AIzaSyB8mf2ppVCxtfL33imlWiMFknuJt8B_Ezk";


const GoogleBooksAPI = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
});

const getBooksByTerm = (SearchTerm, setBooks,  startIndex, setTotalPages) => {

    console.log("Start Index "+ startIndex);
    GoogleBooksAPI.get('', {
        params: {
            q: SearchTerm,
            key: APIKey,
            startIndex: startIndex,
        },
    }).then((response) => {
        console.log(response.data);
        setBooks(response.data.items);
        setTotalPages(Math.ceil(response.data.totalItems/20));
    })
}

export default getBooksByTerm;