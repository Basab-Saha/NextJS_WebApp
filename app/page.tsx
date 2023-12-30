import Image from 'next/image'
import CatagoriesList from './components/CatagoriesList'
import Post from './components/Post'

export default function Home() {
  return (
    <>
    <CatagoriesList/>
    <Post/>
    </>
  )
}
