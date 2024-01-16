"use client"

import { useState } from "react";
import "../LogIn/Login.css";
import Link from "next/link";

const Signup = () => {
	const [Name, setName] = useState("");
	const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const Signup = (e) => {
          e.preventDefault();
          console.log(Name);
          setName("");
          setPassword("");

          if(Name === "hariz" && Password === "12345"){
             console.log(Name,Password);
            //  return home("../Home");
          }
    }

	return (
		<div className="login">
			<div>
				<h1>Sign Up</h1>
				<form onSubmit={Signup}>
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
                    <input
						className="inputStyle"
						type='text'
						value={ConfirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						placeholder='Confirm Password'
						required
					/>
					<br />
					<button className="btnStyle">
						<a className="logBtn">Sign Up</a>
					</button>
				</form>
                <p>Already have an account?<Link className="link" href="../LogIn">Log in</Link></p>
			</div>
		</div>
	);
}
 
export default Signup;