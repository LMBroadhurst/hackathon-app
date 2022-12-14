import { faLocation, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const LandscapeVenueCard = ({id, name, location, type}) => {
  return (
    <section className='customShadow1 relative'>
        <span className='z-10 absolute badge badge-accent bottom-1 right-1'>{type.niceName}</span>
        <div className='flex flex-row gap-4 items-center bg-white rounded-md p-3'>
            <div className='w-96'>
                {/* <span className='m-1 absolute badge badge-secondary'>{event.niceName}</span> */}
                <img className='rounded-sm' src='https://placeimg.com/400/400/arch' alt="" />
            </div>

            <div className='flex flex-col gap-1'>
                <h2 className='text-xl font-bold'>{name}</h2>
                <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta eos minima sapiente atque reiciendis. Officiis distinctio ullam enim veniam libero aperiam nobis consequuntur voluptas neque.</p>
                <div className='flex flex-row gap-2 items-center text-sm font-bold'>
                    <span><FontAwesomeIcon icon={faLocationPin} /></span>
                    <span>{location}</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LandscapeVenueCard