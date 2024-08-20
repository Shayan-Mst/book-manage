


import { Link } from "react-router-dom";
import { Cyan , Orange , Red } from "../../helpers/colors";


const Book = ({book}) => {

return(
<>
<div className="col-md-6 col-lg-4">
<div class="card m-5">
<div className="card-body p-0">
<div className="row">

    
    <img className="img-fluid" src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" class="card-img-top"  alt="Card image cap"/>
    
    <div className="col-md-10 col-sm-9 py-2 " style={{paddingLeft:"0px"}}>
        <ul className="list-group px-2 ">
            <li className="list-group-item list-group-item-dark">
    کتاب : {book.name}
    </li>
    <li className="list-group-item list-group-item-dark">
       قیمت : {book.price}
      </li>
      <li className="list-group-item list-group-item-dark">
       نویسنده: {book.author}
      </li>
      
      </ul>
      </div>

      
    <div className="col-md-2 col-sm-3" style={{paddingRight:"0px"}}>
      

    <Link to={`/books/${book.id}`} className="btn my-1 p-2 " style={{backgroundColor:Orange}}>



<i className="fa fa-eye fa-fw"></i>
</Link>


<Link to={`books/edit/${book.id}`} className="btn my-1 p-2 " style={{backgroundColor:Cyan}}>

<i className="fa fa-pen fa-fw"></i>


</Link>
<button className="btn my-1 p-2 " style={{backgroundColor:Red}}>



<i className="fa fa-trash fa-fw"></i>
</button>

    </div>
    
      </div>

  </div>


  </div>

</div>



</>

)


}

export default Book;