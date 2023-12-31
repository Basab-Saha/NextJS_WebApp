import {posts} from '@/app/data'
import PostCard from '../components/PostCard'
export default function Post(){
    return(
        <div className='flex flex-col gap-3 mt-10'>   
        <h1 className='text-4xl font-extrabold text-dark'>My Posts</h1>
        
            {  
            
                posts.map((post)=>{
                    return(
                        /*<div className='bg-slate-200 flex flex-col gap-4 px-5 py-3'>
                            <h1>Posted by :<span className='font-bold'>{post.author}</span> on {post.id}</h1>
                            <img src={`${post.thumbnail}`} />
                            <h1 className='bg-black max-w-40 mb-4 px-2 py-1 hover:scale-105 transition font-bold text-white rounded-md'>{post.catagory}</h1>
                            <h1>{post.content}</h1>

                        </div>

                        now we can acccess post.id , post.author , post.content etc
                        so we can pass them as props in a <PostCard/>  so our code
                        will remain clean and modular
                        */

                        <PostCard key={post.id} id={post.id} author={post.author} content={post.content} links={post.links} title={post.title} catagory={post.catagory} thumbnail={post.thumbnail} />
                    )
                })
            }
            {
                !posts.length && (
                    <div className='flex flex-row gap-3'>
                        <h1> No Posts to display </h1>
                        <p className='underline'>Create new</p>
                    </div>
                )
            }

        </div>
    )
}