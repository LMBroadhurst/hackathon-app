import React from 'react';
import GroupOverviewEventCard from '../EventCards/EventCard'

const EventTablet = ({events}) => {

  return (
    <section className="flex flex-col justify-around gap-2 w-full rounded-md h-min md:flex-col">

        <div className="rounded-md p-2 px-4 customShadow1 bg-white">
            <h3 className="text-md pb-1 text-center font-bold">Upcoming Events</h3>

            <div className="flex flex-col w-full">
            {
                events.slice(0,2).map((event, index) => {
                    return (
                        <GroupOverviewEventCard key={index} name={event.name} location={event.location} />
                    )
                })
            }
            </div>
        </div>

        <div className="rounded-md p-2 px-4 customShadow1 bg-white">
            <h3 className="text-md font-bold pb-1 text-center">Successful Events</h3>

            <div className="flex flex-col w-full">
            {
                events.slice(0,2).map((event, index) => {
                    return (
                        <GroupOverviewEventCard key={index} name={event.name} location={event.location} />
                    )
                })
            }
            </div>
        </div>
    </section>
  )
}

export default EventTablet;