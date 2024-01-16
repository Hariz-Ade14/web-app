"use client";
import Image from "next/image";
import "C:/Users/Admin/Desktop/web_app/node_modules/bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from "react";
import axios from "axios";
import Home from "./Home/page.jsx";
import Link from "next/link";

// export default function Home() {
// 	const [reqs, setPost] = useState([]);
//   const arr = Object.values(reqs);
//   // const arr_0 = arr[0];
//   // const arrConv = Object.values(arr_0)
//   console.log(arr[0]);
//   console.log(typeof arr);
//   // console.log(typeof arrConv);

// 	useEffect(() => {
// 		const url = 'https://movies-api14.p.rapidapi.com/shows';
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'c61a109540mshc110e4f89c1f9f5p1c6d51jsn72b40f029226',
//         'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
//       }
//     };
// 		fetch(url, options)
// 		.then((response) => response.json())
// 		.then((data) => {
// 				setPost(data);
// 				// console.log(data);
// 		})
// 		.catch((error) => console.error(error));
// 	}, []);

// 	return (
// 		<main className='text-primary'>
// 			<h1 className='text-center'>Hello</h1>
// 			<div>
// 				{arr[0].map((item) => {
//              return (
//               <> 
//                   <p key={item.title}>{item.title}</p>
//                   <Image src={item.poster_path}/>
//               </>
              
//              )
//         })}
//         {/* {arr_0[0].title} */}
// 			</div>
// 		</main>
// 	);
// }

function App(){
   return(
          <main>
               <Home/>
          </main>
      )
}
export default App;