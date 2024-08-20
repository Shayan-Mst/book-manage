
import './App.css';
import Navbar from './components/Navbar';
import { Route , Routes , Navigate } from 'react-router-dom';
import Books from './components/book/Books';
import AddBooks from './components/book/AddBooks';
import { useEffect, useState } from 'react';
import { getAllBook, getAllGenre , createBook } from './service/BookService';
import ViewBook from './components/book/ViewBook';
import EditBook from './components/book/EditBook';
import { BookContext } from './context/BookContext';
import {  useNavigate } from 'react-router-dom';

function App() {

  const [loading , setLoading] = useState(false);

  const [books , setBooks] = useState([]);

  const [genres , setGenres] = useState([]);

  const navigate = useNavigate(); 

  const [book , setBook] = useState({


    name : "",
    price:"",
    photo : "",
    author : "",
    datepublished :"",
    genre :""
    

  });

const [bookQuery , setBookQuery] = useState({text : ''})

const [filteredBooks , setFilteredBooks] = useState([])

  useEffect(() => {

const fetchData = async() => {


try{
  setLoading(true);

const {data : booksData} = await getAllBook();

const {data : genresData} = await getAllGenre();

setBooks(booksData);
setGenres(genresData);
setFilteredBooks(booksData)
setLoading(false)


}
catch(err){
console.log(err.message);
setLoading(false);
}

}

fetchData();

  },[] )


const createBookForm = async event => {
event.preventDefault();


try{

setLoading((prev) => !prev);
const {status , data} = await createBook(book);


if(status === 201){

  const allBooks = [...books,data];
    setBooks(allBooks);
    setFilteredBooks(allBooks);
    setBook({});
    setLoading((prev) => !prev); //call back it can be named anything other than prevLoading
    navigate("/books");


}
}


catch(err){
  console.log(err);
  setLoading((prev) => !prev);
  }

}


const onBookChange = (event) =>{

  setBook({...book , [event.target.name] : event.target.value});
  
  }


  const bookNameSearch = (event) => {

    setBookQuery({...bookQuery , text : event.target.value});
  
    const allBooks = books.filter((book) => {

    return book.name.toLowerCase().includes(event.target.value.toLowerCase()) || 
    book.author.toLowerCase().includes(event.target.value.toLowerCase());


    })

   setFilteredBooks(allBooks);

  }


  
  return (
   

    <BookContext.Provider value = {{loading ,

setLoading, 
book,

setBooks ,

books,

filteredBooks,

setFilteredBooks,

bookQuery ,

genres ,
onBookChange,
bookNameSearch,
createBook : createBookForm
}}>
     <div>

      <Navbar/>
      
     <Routes>
     <Route path="/" element={<Navigate to="/books"/>}/>
      <Route path="/books" element={<Books/>}/>
      <Route  path="/books/add" element={<AddBooks/>} />
      <Route  path="/books/:bookId" element={<ViewBook/>} />

      <Route  path="/books/edit/:bookId" element={<EditBook/>} />
     </Routes>
     </div>
     </BookContext.Provider>
    
  );
}

export default App;
