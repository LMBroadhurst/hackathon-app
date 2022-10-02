import CommunityPost from "../../CommunityPost/CommunityPost";
import PollPost from "../../PollPost/PollPost";

const DashboardVenues = () => {
  return (
    <section className="flex flex-col gap-3 bg-white p-4 rounded-md">
        <CommunityPost />

        <PollPost />

        <CommunityPost />

        <PollPost />
    </section>
  )
}

export default DashboardVenues;