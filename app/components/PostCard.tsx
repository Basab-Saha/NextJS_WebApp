interface PostProps{
    id:string,
    title:string,
    author:string,
    thumbnail:string,
    catagory:string,
    content:string,
    links:string[],

}
import Link from "next/link"

export default function PostCard({id,title,author,thumbnail,content,links,catagory}:PostProps){

    const isLoggedIn=true;


    return(
        <div className='border-b-2 flex flex-col gap-4 px-5 py-3'>
                    <h1>Posted by :<span className='font-bold'>{author}</span> on {id}</h1>
                   <img src={`${thumbnail}`} />
                    <Link href={`/catagories/${catagory}`} className='bg-black max-w-40 mb-4 px-2 py-1 hover:scale-105 transition font-bold text-white rounded-md'>{catagory}</Link>
                    <h1>{content}</h1>
                    {
                        links.map((link)=>{
                            return(
                                <div className="flex flex-col">
                                     <div className="flex gap-3">

                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                      </svg>

                                       <Link href={link} className="text-xl font-semibold text-blue-500">{link}</Link>
                                   </div>
                                </div>
                               
                                
                            )
                        })
                    }
                    {
                        isLoggedIn && (
                            <div className="flex gap-3">
                                <Link href={`/edit-post/${id}`} className="btn  hover:bg-teal-950 hover:text-white">Edit</Link>

                                <Link href={`delete-post/${id}`} className="btn  hover:bg-teal-950 hover:text-white">Delete</Link>
                            
                            </div>
                        )
                    }

             </div>
    )
}