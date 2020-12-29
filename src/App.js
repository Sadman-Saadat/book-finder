import React, {useState,} from "react";
import NavBar from "./components/NavBar"
import SearchBar from "./components/SearchBar";
import getBooksByTerm from "./api/GoogleBooksAPI";
import BookList from "./components/BooksList";
import Pagination from "./components/Pagination";


const App = () => {
  const [SearchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState([]);

  function handleChange(event) {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getBooksByTerm(SearchTerm, setBooks, 0, setTotalPages);
  }

  const nextPage = async (page_number) =>{
    setCurrentPage(page_number);
    await getBooksByTerm(SearchTerm,setBooks, ((page_number-1)*10), setTotalPages)
}
  return (
    <div>
      <NavBar />
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <BookList books = {books} />
      {totalPages > 1 ? <Pagination nextPage={nextPage} currentPage={currentPage} totalPages={totalPages}/>: ""}
    </div>
  )
}

export default App;
