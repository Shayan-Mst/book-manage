import React from "react";
import { Pink , Purple } from "../helpers/colors";
import { Link, useLocation } from "react-router-dom";
import'../App.css';
import SearchBooks from "./book/SearchBooks";

const Navbar = () => {


return(

<>
<nav className="navbar navbar-light navbar-expand-lg shadow-sm"
style={{backgroundColor:Pink }}>



<div className="container text-item-center">
    <div className="row w-100">
    <div className="col-3">
        <div className="navbar-brand">

        <i class="fa-solid fa fa-book" style={{}}/>

{"  "}وب اپلیکیشن مدیریت{" "}
 <span style={{}}>کتاب ها</span>
        </div>

        </div>
        <div className="col-5">
    
    <SearchBooks/>
    
    </div>
    
   <div className="col-4">
<ul className="h-100 m-2 ">
    <li className="h-100 m-0" style={{display:"inline-block"}}>
    <Link className="h-100 p-3" to="/books" style={{textDecoration:0 ,
     color : "#000000",
    
     
}}>صفحه اصلی</Link>
</li>
{" "}
<li className="h-100 m-0" style={{display:"inline-block"}}>
<Link className="h-100 p-4" to="/books/add" style={{textDecoration:0 ,
     backgroundColor : Purple,
     color : "#000000",
}}>اضافه کردن کتاب
 <i className="fa fa-plus-circle px-2" /></Link>
</li>
</ul>
   </div>

</div>
</div>
</nav>



</>

)









}

export default Navbar;