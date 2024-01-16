"use client"
import {useEffect, useRef, useState} from "react";
import "./Login.css";
import Link from "next/link";
import Home from "../Home/page";


const Login = () => {
	const [Name, setName] = useState("");
	const [Password, setPassword] = useState("");
	

    const Login = (e) => {
          e.preventDefault();
          console.log(Name);
          setName("");
          setPassword("");

        //   if(Name === "hariz" && Password === "12345"){
        //      console.log(Name,Password);
		// 	 return( <Home/>)

        //   }
    }

	return (
		<div className="login">
			<div>
				<h1>Log In</h1>
				<form onSubmit={Login}>
					<input
						className="inputStyle"
						type='text'
						value={Name}
						onChange={(e) => setName(e.target.value)}
						placeholder='Email'
						required
					/>
					<br />
					<input
						className="inputStyle"
						type='text'
						value={Password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder='Password'
						required
					/>
					<br />
					
					<button className="btnStyle">
						<Link className="logBtn" href="">Log In</Link>
					</button>
				</form>
                <Link className="link" href="../SignUp">Create Account</Link>
			</div>
		</div>
	);
};


export default Login;
