import Link from 'next/link'
import EventStyles from '../styles/Event.module.css'

const EventItem = ({event}) => {
  return (
    <Link legacyBehavior
    href="/event/[id]" as={`/event/${event.id}`}>
      <a className={EventStyles.card}>
        <h3>{event.title} &rarr;</h3>
        <p>{event.excerpt}</p>
      </a> 
    </Link>
  )
}

export default EventItem