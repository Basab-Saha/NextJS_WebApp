
import SignInButtons from "../components/SignInButtons";

//Auth special imports
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
//Auth Special imports


export default async function SignIn(){

    const session= await getServerSession(authOptions);

    //jodi already sign-in hoa thaki then abar sign kano korbo
    // so we will redirect to dashBoard page
    if(session){
        // session is a array of object of objects 
        // session : { user:{name:' ', email :'' , image:' '  }             }
        // to acess email of user you do : session.user.email
        console.log(session)
      redirect('/dashboard')
    }

    //if not signed-in then we will go sign-in for localhost:3000/sign-in


    return (
        <SignInButtons/>
    )
}