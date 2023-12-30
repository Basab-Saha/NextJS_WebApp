import {CatagoriesData} from '@/app/data'
import Link from 'next/link'
// @/ mane next folder er vetor 

export default function CatagoriesList(){
    return(
        <div className='flex gap-8'>
            {
                CatagoriesData.map((catagory)=>{
                    return (
                        <Link className='bg-dark px-2 py-1 hover:scale-105 transition font-bold text-white rounded-md' href={`/catagories/${catagory.name}`}>
                        <p key={catagory.id} >{catagory.name}</p>
                        </Link>
                    
                    
                    )
                })
            }
        </div>
    )
}