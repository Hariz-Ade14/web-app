import {FaSearch} from "react-icons/fa"
import "./search.css"

const SearchBar = () => {
    return ( 
        <main>
             <form className="searchBox">
                 <button className="searchIcon mx-2"><FaSearch/></button>
                 <input type="text" className="input" placeholder="Search"/>
             </form>
        </main>
     );
}
 
export default SearchBar;