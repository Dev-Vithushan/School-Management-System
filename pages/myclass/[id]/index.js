import { server } from "../../config"
import Link from "next/link"
import Meta from "../../../components/Meta"

const myclass = ({myclass}) => { 
    return (
      <>
        <Meta/>
        <h1>Class {myclass.grade}{myclass.division}</h1>
        <br />
        <p>Hello Students.........</p>
        <Link href='/'>Return back</Link>
      </>
    )
}

export const getStaticProps = async (context) => {
  const res = await fetch(
      `${server}/api/myclasses/${context.params.id}`
  )

  const myclass = await res.json()

  return {
    props: {
      myclass,
    },
  }
}

export const getStaticPaths = async (context) => {
const res = await fetch(
  `${server}/api/myclasses`
)
  
const myclasses = await res.json()

const ids = myclasses.map(myclass => myclass.id)
const paths = ids.map(id => ({params: {id: id.toString()}}))
  
return {
  paths,
  fallback: false,
}
} 

export default myclass