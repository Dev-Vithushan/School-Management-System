import { server } from "../../config"
import Link from "next/link"
import Meta from "../../../Components/Meta"

const event = ({event}) => { 
    return (
      <div>
        <Meta title={event.title} description={event.excerpt}/>
        <h1>{event.title}</h1>
        <p>{event.body}</p>
        <br />
        <Link href='/news'>Go Back</Link>
      </div>
    )
}

export const getStaticProps = async (context) => {
  const res = await fetch(
      `${server}/api/events/${context.params.id}`
  )

  const event = await res.json()

  return {
    props: {
      event,
    },
  }
}

export const getStaticPaths = async (context) => {
const res = await fetch(
  `${server}/api/events`
)
  
const events = await res.json()

const ids = events.map(event => event.id)
const paths = ids.map(id => ({params: {id: id.toString()}}))
  
return {
  paths,
  fallback: false,
}
} 

export default event