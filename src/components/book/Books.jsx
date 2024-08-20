import React from "react";
import { Orange , CurrentLine } from "../../helpers/colors";
import Spinner from "../Spinner";
import Book from "./Book";
import { BookContext } from "../../context/BookContext";
import { useContext } from "react";


const Books = () => {

  const {filteredBooks , loading , deleteBook} = useContext(BookContext);
  
return(
<>


{
  loading ? <Spinner/> : (

   <section className="container">
    <div className="row">

      
      {
filteredBooks.length > 0 ? filteredBooks.map((c) => 


<Book key = {c.id} book = {c}/>

)

:(

  <div className="text-center py-5" style={{backgroundColor:CurrentLine}}>

  <p className="h3 " style={{color : Orange}}>

    مخاطب یافت نشد...


  </p>

<img src={require("../../assets/Not found.jpg")} alt="پیدا نشد!" className="w-25"/>
  
</div>


) }
    </div>
   </section>

  )
}









    

</>
)

}


export default Books;