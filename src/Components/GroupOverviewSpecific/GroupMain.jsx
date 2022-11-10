import PromoVenueTablet from "../Tablets/PromoVenueTablet";
import GroupBanner from "./GroupBanner";
import GroupCommunity from "./GroupCommunity";
import EventTablet from "../Tablets/EventTablet";
import GroupDetailsTablet from "../Tablets/GroupDetailsTablet";
import GroupMembersCard from '../MemberCards/GroupMembersCard';
import React, { useState, useEffect } from 'react';
import MainEvents from "./Tabs/MainEvents";
import MainVenues from "./Tabs/MainVenues";
import MainPolls from "./Tabs/MainPolls";
import { getOrganisationByID } from "../../API/OrganisationAPI";
import { useParams } from "react-router-dom";
import CreatePost from "../Popups/CreatePost";

const GroupMain = () => {

    const [tabContents, setTabContents] = useState('Overview');
    // const { user, orgId } = useContext(UserContext);
    const [organisation, setOrganisation] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
        const response = async () => {
            let org = await getOrganisationByID(id);
            setOrganisation(org);
            console.log(organisation)
        }
         
        response()
    }, [])

    const mainDisplay = (tabContents) => {
        switch (tabContents) {
            case 'Overview':
                return <GroupCommunity />
            case 'Events':
                return <MainEvents />
            case 'Polls':
                return <MainPolls />
            case 'Venues':
                return <MainVenues />
            default:
                return <GroupCommunity />
        }
    }

    const content = () => {

        if (!organisation) {
            return 'loading...'
        }

        return (
            <section className="bg-slate-300 flex flex-col mt-12">
                <div className="xl:w-[1200px] mx-auto">
                    <GroupBanner name={organisation.name} setTabContents={setTabContents} />

                    {/* Mobile layout */}

                    {/* <div className="flex flex-col xl:flex-row gap-2 p-6 md:hidden">
                        <GroupDetailsTablet />

                        <GroupMembersCard />

                        <div className="xl:w-[700px]">
                            {mainDisplay(tabContents)}
                        </div>
                    </div> */}

                    {/* Tablet layout */}

                    {/* <div className="hidden md:flex flex-row gap-2 p-6 lg:hidden">
                        <div className="flex flex-col w-[300px]">
                            <GroupDetailsTablet />
                            <GroupMembersCard />
                            <PromoVenueTablet />
                        </div>


                        <div className="xl:w-[700px]">
                            {mainDisplay(tabContents)}
                        </div>
                    </div> */}

                    {/* Laptop/Desktop layout */}

                    <div className="hidden lg:flex flex-col xl:flex-row gap-4 py-6">
                    
                        <div className="w-[350px] flex flex-col gap-3">
                            <GroupDetailsTablet />
                            <PromoVenueTablet />
                        </div>

                        <div className="xl:w-[700px]">
                            {mainDisplay(tabContents)}
                        </div>

                        <div className="w-[350px] flex flex-col gap-2">
                            <GroupMembersCard usersArray={organisation.users} />
                            <EventTablet events={organisation.events} />
                        </div>  
                    </div>
                </div>
                <div className="fixed right-4 bottom-4 dropdown dropdown-top dropdown-end">
                    <CreatePost />
                </div>
            </section>
    )}

  return (
    <>
    {content()}
    </>
  )
}

export default GroupMain;