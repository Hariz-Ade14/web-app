import "./Head.css"
import {FaPortrait} from "react-icons/fa"
import Link from "next/link"
import SearchBar from "../SearchBar/page"

export default function Header() {
       return(
             <main>
                  <div className="head p-3 d-flex justify-content-between align-items-center">
                       <SearchBar/>
                       <Link href="../LogIn"><FaPortrait size={30} color="white"/></Link>
                  </div>
             </main>
       )
}