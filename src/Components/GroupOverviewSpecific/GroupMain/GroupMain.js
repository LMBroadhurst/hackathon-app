import PromoVenueTablet from "../../PromotedVenuesTablet/PromoVenueTablet";
import GroupBanner from "../GroupBanner/GroupBanner";
import GroupCommunity from "../GroupCommunity/GroupCommunity";
import EventTablet from "../../EventTablet/EventTablet";
import GroupDetailsTablet from "../../GroupDetailsTablet/GroupDetailsTablet";
import GroupMembersCard from "../GroupMembersCard/GroupMembersCard";

const GroupMain = () => {
  return (
    <section className="bg-cMono300 flex flex-col text-cBlack500 mt-12">
        <div className="w-[1200px] mx-auto">

        <GroupBanner />

        <div className="flex flex-row gap-4 py-6">
            <div className="w-[350px] flex flex-col gap-3">
                <GroupDetailsTablet />
                <PromoVenueTablet />
            </div>

            <div className="w-[700px]">
                <GroupCommunity />
            </div>

            <div className="w-[350px] flex flex-col gap-2">
                <GroupMembersCard />
                <EventTablet />
            </div>  
        </div>

        </div>
    </section>
  )
}

export default GroupMain;