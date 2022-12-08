import EventItem from './EventItem'
import EventStyles from '../styles/Event.module.css'

const EventList = ({events}) => {
    return (
        <div className={EventStyles.grid}>
            {events.map((event)=>(
                <EventItem event={event}/>
            ))}
        </div>
    )
}

export default EventList