
import { createContext } from "react"


export const BookContext = createContext({

    loading : false,

    setLoading : () => {},
    book :{},
    setBooks : () => {},
    books: [],
    filteredBooks : [],
    setFilteredBooks : () => {},
    bookQuery :{},
    
    genres :[],
    onBookChange : () => {},
    
    deleteBook : () => {},
    
    updateBook : () => {},
    
    createBook : () => {},
    
    bookSearch : () => {},



})