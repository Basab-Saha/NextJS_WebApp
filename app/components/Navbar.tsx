import Link from "next/link";

export default function Navbar(){
    return(
        <div className="flex justify-between mb-4 border-b pb-4">

            {/*Left Div for :Company Label */}
            <div>
                <Link href={"/"}><h1 className=" text-dark  text-4xl font-bold tracking-tighter">Tech News</h1></Link>
                <p className="text-sm">Exploring Tomorrows Inovation ,<br/> one byte at a time</p>
            </div>

            <div className="flex items-center">
                <Link className="btn" href={"/sign-in"}>Sign In</Link>
            </div>

        </div>
    )
}