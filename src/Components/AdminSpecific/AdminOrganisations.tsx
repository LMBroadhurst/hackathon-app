import React, {useState, useEffect} from 'react'
import { getAllOrganisations } from '../../API/OrganisationAPI';
import OrgAdminCard from '../OrganisationCards/OrgAdminCard';

const AdminOrganisations = () => {

    const [organisations, setOrganisations] = useState([]);
    
    useEffect(() => {
        const response = async () => {
            let orgs = await getAllOrganisations(setOrganisations);
            setOrganisations(orgs);
        }
         
        response()
    }, [])

    const content = () => {
        if (!organisations) {
            return ''
        }

        return (
        <section className='w-full xl:w-[450px] mx-auto'>
        <div className='bg-white h-[700px] border-cMono400 border-2 rounded-lg flex flex-col items-center gap-4 p-4'>
            <h2 className='text-2xl border-b border-cMono600 self-stretch text-center pb-2'>Active Organisations</h2>

            <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Search organisations" className="input input-bordered p-2" />
                    <button className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

            <div className='overflow-scroll overflow-x-hidden p-2 border-2 border-black rounded-lg self-stretch'>
                <ul className='flex flex-col gap-1'>
                    {
                        organisations.map((org: any, index: number) => {
                            const {uniqueId, name, email, users} = org;
                            return (
                                <li key={index}>
                                    <OrgAdminCard id={uniqueId} name={name} email={email} users={users} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        </section>
        )
    }

  return (
    <>
        {content()}
    </>
  )
}

export default AdminOrganisations;