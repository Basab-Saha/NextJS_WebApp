"use client"

import { useSession , signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar(){

    const {status }=useSession();

    return(
        
        <div className="flex justify-between mb-4 border-b pb-4">

            {/*Left Div for :Company Label */}
            <div>
                <Link href={"/"}><h1 className=" text-dark  text-4xl font-bold tracking-tighter">Tech News</h1></Link>
                <p className="text-sm">Exploring Tomorrows Inovation ,<br/> one byte at a time</p>
            </div>

            {

                status==="authenticated" ? 
                (<div>
                    <img className="h-10 w-10  rounded-xl" src="https://lh3.googleusercontent.com/a/ACg8ocIRKhbC2YM5cb4xDrjvglBwFc2X6qHBVnxPvISGqQAlnRI=s96-c"/>
                    <button onClick={()=>signOut()}  className="btn">Sign Out</button>
                </div>) :
                (
                    <div className="flex items-center">
                    <Link className="btn" href={"/sign-in"}>Sign In</Link>
                </div>
                )
            }


           

        </div>
    )
}