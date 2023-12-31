'use client'
import { CatagoriesData } from "../data"
import {useState} from 'react'


export default function CreatePostForm(){

    const[allLinks , setAllLinks]=useState<string[]>([])

    const[currentLink  , setCurrentLink]=useState("");

    const addLink = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (currentLink.trim() !== "") { // Check if currentLink is not an empty string after trimming
          setAllLinks((prev) => [...prev, currentLink]);
          console.log(currentLink);
          setCurrentLink("");
        } else {
          alert("Paste a link and add!");
        }
      };

      const deleteLink = (singleLink) => {
        const indexToRemove = allLinks.findIndex((oneLink) => oneLink === singleLink);
      
        if (indexToRemove !== -1) {
          const newAllLinks = [...allLinks];
          newAllLinks.splice(indexToRemove, 1);
          setAllLinks(newAllLinks);
        }
      };





    return(
        <div>
            <h2 className="text-4xl font-bold ">Create Post</h2>
            <form className="mt-10 flex flex-col gap-3">
                <input type="text" className="border border-black px-4 py-4" placeholder="Title of Post" />
                <textarea  className="h-36 border border-black px-4 py-4" placeholder="Content of Post"/>


                {
                     allLinks &&   allLinks.map((singleLink,i)=>{
                            return(
                                <div key={i} className="flex gap-3">
                                    <p >{singleLink}</p>
                               <button onClick={() => deleteLink(singleLink)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                     </svg>
                                </button>     

                                </div>
                            )
                        })
                    }
                {/*Add Link Div */}
                <div className="flex flex-row gap-2">
                   
                     <input type="text" value={currentLink} onChange={(e)=>setCurrentLink(e.target.value)} className="border flex-1 border-black px-4 py-4" placeholder="Copy and Paste link here" />
                     <button onClick={addLink} className="btn flex-3/4">Add Link</button>
                     
                </div>

                {/*select catagory box */}
                <select className="h-8 font-bold text-dark"  >
                    <option value="">Select a catagory</option>
                    {
                      CatagoriesData &&  CatagoriesData.map((cat)=>{
                            return(
                                <option key={cat.id}>{cat.name}</option>
                            )
                        })
                    }
                </select>

                    <button className="primary_btn  mt-10">Create Post</button>


            </form>
        </div>
    )
}