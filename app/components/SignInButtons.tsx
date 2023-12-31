'use client'
import { signIn } from "next-auth/react"


export default function SignInButtons(){
    return(
        <div className=" flex flex-col items-center gap-8 mt-20 py-10">
            <h1 className="text-3xl font-extrabold">Sign In</h1>
            <div>
            <button onClick={()=>signIn("google")} className="bg-slate-200 px-12 rounded-xl py-5 flex gap-4 hoverClass">
                <img src='/google-logo.png' width={30} height={30}></img>
                <h1>Sign In with Google</h1>
            </button> 
            </div>
            <div>
            <button onClick={()=>signIn("github")} className="bg-slate-200 px-12 rounded-xl py-5 flex gap-4 hoverClass">
                <img src='/github-logo.png' width={30} height={30}></img>
                <h1>Sign In with Github</h1>
            </button> 
            </div>
        </div>
    )
}