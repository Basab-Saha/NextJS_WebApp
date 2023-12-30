import Link from "next/link";

export default function Navbar(){
    return(
        <div>

            {/*Left Div for :Company Label */}
            <div>
                <Link href={"/"}><h1>Tech News</h1></Link>
                <p>Exploring Tomorrows Inovation ,<br/> one byte at a time</p>
            </div>

            <div>
                <Link className="btn" href={"/sign-in"}>Sign In</Link>
            </div>

        </div>
    )
}