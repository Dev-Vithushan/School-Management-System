import { server } from './config'
import Head from 'next/head'
import EventList from '../components/EventList'

export default function news({events}) {
  return (
    <div>
      <Head>
        <title>Notice Board</title>
      </Head>

      <EventList events={events}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/events`)
  const events = await res.json()

  return {
    props: {
      events,
    },
  }
}
