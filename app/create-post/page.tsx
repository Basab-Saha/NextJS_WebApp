

//je component ba file a getServer ba swait sessions type kuch use hoche
// segulo holo server component ...so okhane use client dile hobe na

//Auth special imports
import { getServerSession } from "next-auth/next"
import {authOptions} from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import CreatePostForm from "@/app/components/CreatePostForm"
//Auth Special imports



export default async function CreatePost(){

  const session= await getServerSession(authOptions);

  if(!session){
    redirect('/sign-in')
  }


    
      

    return(
        <CreatePostForm/>
    )
}