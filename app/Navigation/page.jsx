import Link from "next/link";
import {FaHome,FaTv,FaRedo,FaAirFreshener} from "react-icons/fa";
import "./nav.css"
import "C:/Users/Admin/Desktop/web_app/node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Nav() {
	return (
		<main>
			<div className='nav d-flex align-items-center justify-content-between p-3'>
				<span>
					<Link href='/'>
						<FaHome size={30} color={"white"} />
					</Link>
				</span>
				<span>
					<Link href='../Movies'>
						<FaTv size={30} color={"white"} />
					</Link>
				</span>
				<span>
					<FaRedo size={30} color={"white"} />
				</span>
				<span>
					<FaAirFreshener size={30} color={"white"} />
				</span>
			</div>
		</main>
	);
}
