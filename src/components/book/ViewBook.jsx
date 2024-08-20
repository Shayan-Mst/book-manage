import { useContext, useEffect, useState , Link } from "react";
import { useParams } from "react-router-dom";
import { BookContext } from "../../context/BookContext";
import { getBook, getGenre } from "../../service/BookService";
import { Cyan , CurrentLine , Purple } from "../../helpers/colors";
import Spinner from "../Spinner";


const ViewBook = () => {

const {bookId} = useParams();
const {loading , setLoading}  = useContext(BookContext);

const [state,setState] = useState({
    book : {},
    genre : {}
})

useEffect(() =>{


const fetchData = async() =>{
try{
setLoading(true)

const {data : bookData} = await getBook(bookId)
const {data : genreData} = await getGenre(bookData.genre)
console.log(bookData)
console.log(genreData)
setLoading(false)

setState({...state , book : bookData , genre : genreData})

}

catch(err){

    console.log(err.message)
    setLoading(false)
}

}


fetchData();





},[])




const { book , genre} = state;

return(

<>
<section className="view-contact-intro p3">

<div className="container">

<div className="row my-2 text-center">

<p className="h3 fw-bold">
اطلاعات کتاب
</p>
</div>
</div>
</section>

<hr style={{backgroundColor:Cyan}}></hr> 

{loading ? (

<Spinner/>
) : (

<>

{Object.keys(book).length > 0 && (

<section className="view-contact mt-e">
<div className="container p-2"
style={{borderRadius:"1rem" , backgroundColor:CurrentLine}}
>
<div className="row align-items-center">
<div className="col-md-3">

<img style={{opacity: 0.8 }} src={book.photo}
alt="" className="img-fluid rounded"
/>
</div>
<div className="col-md-9 ">

<ul className="list-group">
<li className="list-group-item list-group-item-dark">نام و نام خانوادگی : {" "}
<span className="fw-bold">
   {book.name}
    
    </span></li>

    <li className="list-group-item list-group-item-dark"> شماره موبایل : {" "}
<span className="fw-bold">
  {book.author}
    
    </span></li>


    <li className="list-group-item list-group-item-dark"> ایمیل: {" "}
<span className="fw-bold">
    {book.datePublished}
    
    </span></li>

    <li className="list-group-item list-group-item-dark">شغل: {" "}
<span className="fw-bold">
    {book.price}
    
    </span></li>


    <li className="list-group-item list-group-item-dark">گروه: {" "}
<span className="fw-bold">
    {genre.name}
    
    </span></li>
</ul>

<Link to="/contacts" className="btn" style={{ backgroundColor: Purple , margin:"10px"}}>بازگشت به صفحه اصلی    </Link>
</div>








</div>




</div>





</section>





)}







</>



)



}


</>




)



}


export default ViewBook;