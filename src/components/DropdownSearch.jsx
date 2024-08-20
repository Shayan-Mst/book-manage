
import { useState } from "react";
import { Gray } from "../helpers/colors";
import '../../src/App.css';

const DropdownSearch = () => {

   
return(
    <>
<div className="flex flex-col dropdownSearch">

    <ul className="flex flex-col gap-4">
        <li>

            profile
        </li>
        <li>

            name
        </li>
        <li>

            subject
        </li>
    </ul>
</div>

    
    </>
)
}


export default DropdownSearch;