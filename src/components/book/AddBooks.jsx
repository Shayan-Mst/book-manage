import { BookContext } from "../../context/BookContext";
import { useContext } from "react";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import { Comment , Purple } from "../../helpers/colors";

const AddBooks = () => {

    const {loading,book,onBookChange,genres,createBook} = useContext(BookContext);

return(
    <>
    {loading ? (

        <Spinner/>
    ) : (
    <section className="p-3">

        <img 
        src={require("../../assets/Man behind system.jpg")}
        height="400px"
        alt=""
        style={{
        position: "absolute",
        zIndex: "-1",
        top: "130px",
        left: "100px",
        opacity: "50%",
        }}/>

<div className="container">

    <div className="row">

        <div className="col">

        <p
className="h5 text-center"

>
    ساخت کتاب جدید
</p>

            

        </div>



    </div>
    <div className="row mt-5">

<div className="col-md-4">
    <form onSubmit={createBook}>


<div className="mb-2">
<input
name = "name"
type="text"
className="form-control"
placeholder="نام کتاب"
value={book.name}
onChange={onBookChange}
required={true}

/>
</div>

<div className="mb-2">
<input
name = "photo"
type="text"
className="form-control"
placeholder="تصویر"
value={book.photo}
onChange={onBookChange}
required={false}

/>
</div>

<div className="mb-2">
<input
name = "author"
type="text"
className="form-control"
placeholder="نویسنده"
value={book.author}
onChange={onBookChange}
required={true}

/>
</div>

<div className="mb-2">
<input
name = "datePublished"
type="text"
className="form-control"
placeholder="سال انتشار"
value={book.datePublished}
onChange={onBookChange}
required={true}

/>
</div>

<div className="mb-2">
<input
name = "price"
type="text"
className="form-control"
placeholder="قیمت"
value={book.price}
onChange={onBookChange}
required={true}

/>
</div>

<div className="mb-2">
<select
name="genre"
required={true}
className="form-control"
value={book.genre}
onChange={onBookChange}
>
<option value="">انتخاب ژانر</option>
{genres.length > 0 && genres.map((genre) =>(

<option key={genre.id} value={genre.id}>
    {genre.name}
</option>
))}
</select>
</div>
<div className="mx-2">
<input
type="submit"
className="btn"
style={{ backgroundColor: Purple }}
value="ساخت مخاطب"
/>
<Link to={"/contacts"}

className="btn mx-2"

style={{backgroundColor : Comment}}

>  
انصراف
</Link>
</div>

    </form>
    </div>
</div>
</div>

</section>





    )
}

    </>
)

}



export default AddBooks;