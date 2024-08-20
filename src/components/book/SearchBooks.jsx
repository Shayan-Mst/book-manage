
import { useContext } from "react";
import { Gray, White } from "../../helpers/colors";
import { useState } from "react";
import { BookContext } from "../../context/BookContext";
import DropdownSearch from "../DropdownSearch";

const SearchBooks = () => {

    const {bookQuery , bookNameSearch} = useContext(BookContext)
    const [openFilter , setOpenFilter] = useState(false)

return(


    <div className="input-group mx-2 w-100" dir="ltr">

<span onClick={()=> setOpenFilter(
    (prev) => !prev)
}
    className="input-group-text cursor-pointer"
    style={{backgroundColor : Gray}}>
    <i class="fa-solid fa-arrow-down"/>
    {
    <DropdownSearch/> && openFilter
}
    </span>

   
    <span
    className="input-group-text"
    id="basic-addon1"
    style={{ backgroundColor: White }}
    >
    <i className="fas fa-search" />
    </span>

   
    <input
    value={bookQuery.text}
    onChange={bookNameSearch}
    dir="rtl"
    type="text"
    className="form-control"
    placeholder="جستجوی کتاب ها"
    aria-label="Search"
    aria-describedby="basic-addon1"
    
    />
    </div>
)






}



export default SearchBooks;