import "./Head.css"
import {FaPortrait} from "react-icons/fa"
// import Login from "../LogIn"
import Link from "next/link"

export default function Header() {
       return(
             <main>
                  <div className="head p-3 d-flex justify-content-end align-items-center">
                       <Link href="../LogIn"><FaPortrait size={30} color="white"/></Link>
                  </div>
             </main>
       )
}