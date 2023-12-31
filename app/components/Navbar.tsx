"use client"

import { useSession , signOut } from "next-auth/react";
import Link from "next/link";

import Image from "next/image";
import { useState } from "react";

export default function Navbar(){

    const {status  , data:session }=useSession();

    const[isVisible , setIsVisible]=useState(false);

    const handleAccountClick=()=>{
        if(isVisible==true){
            setIsVisible(false);
        }
        else{
            setIsVisible(true);
        }
    }
    

    return(
        
        <div className="flex justify-between mb-4 border-b pb-4">

            {/*Left Div for :Company Label */}
            <div>
                <Link href={"/"}><h1 className=" text-dark  text-4xl font-bold tracking-tighter">Tech News</h1></Link>
                <p className="text-sm">Exploring Tomorrows Inovation ,<br/> one byte at a time</p>
            </div>

            {

                status==="authenticated" ? 

                (<div className="flex flex-col gap-4">
                    
                    <div className="flex items-center gap-3">
                   
                     <Link href='/create-post'  className="btn flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
Create Post</Link>

                      {/*Profile image*/}
                      <div className="relative rounded-full overflow-hidden w-8 h-8">
                        <Image
                        src={session?.user?.image || ""}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                        onClick={handleAccountClick}
                        className="cursor-pointer hover:scale-105"
                        />
                      </div>
                </div>

                <div className={`shadow-sm px-3 py-2 flex flex-col gap-2 h-30 w-auto ${isVisible==true ? "":"hidden"}`}>
                    <h1  className="hover:underline font-bold text-2xl">{session?.user?.name}</h1>
                    <h1 className="hover:underline">{session?.user?.email}</h1>
                  <Link href='/dashboard'> <h2 className="hover:underline">My Dashboard</h2></Link> 
                    <button onClick={()=>signOut()}  className="btn">Sign Out</button>

                </div>
                    
                </div>
                
                ) :
                (
                    <div className="flex items-center">
                    <Link className="btn" href={"/sign-in"}>Sign In</Link>
                </div>
                )
            }


           

        </div>
    )
}