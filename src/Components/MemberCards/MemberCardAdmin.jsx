import React from 'react'
import { deleteUser } from '../../API/UserAPI'

const MemberCardAdmin = ({id, firstName, lastName, email, organisation}) => {

    const handleDeleteUser = (e) => {
        e.preventDefault()

        deleteUser(id);
    }

  return (
    <>
    <label htmlFor="member-modal-1" className="modal-button">
    <section className='border-2 p-2 rounded-md flex flex-row justify-between items-center cursor-pointer'>
        <div className='flex flex-row gap-4 items-center'>
            <div className='avatar online'>
                <div className='w-10 rounded-full'>
                    <img src='https://placeimg.com/192/192/people' alt='' />
                </div>
            </div>

            <div className='text-xs'>
                <h3 className='font-bold text-sm'>{firstName} {lastName}</h3>
                <h3>{email}</h3>
                <h3>Organisation: {organisation ? organisation.name : 'n/a'}</h3>
            </div>
        </div>
    </section>
    </label>

    <input type="checkbox" id="member-modal-1" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative w-96">
            <label htmlFor="member-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold pb-4">Member actions</h3>
            
            <form className="form-control w-full flex flex-col gap-2">
                <div className='flex flex-row justify-between items-center'>
                    <label className="">Remove User</label>
                    <button className="btn btn-square btn-xs" onClick={handleDeleteUser}>X</button>
                </div>

                <div className='flex flex-row justify-between items-center'>
                    <label>Reset Password</label>
                    <button className="btn btn-square btn-xs">X</button>
                </div>
            </form>
        </div>
    </div>

    </>
  )
}

export default MemberCardAdmin;