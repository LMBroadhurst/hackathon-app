import Plus from "../../Assets/plus.png";
import Settings from "../../Assets/settings.png";

const GroupNavSidebar = () => {
  return (
    <section className="hidden bg-cBlue100 mt-16 md:flex">

        <div className="h-full flex flex-col justify-between items-center p-3">
          <div className="">
            <div className="w-10 bg-cOrange500 rounded-full p-3">
              <img src={Plus} alt="" className="" />
            </div>

            <div className="border-t-2 my-4 border-cMono300"></div>

            <div className="w-10 bg-cOrange500 rounded-full p-2 text-center mb-4">LB</div>

            <div className="w-10 bg-cOrange500 rounded-full p-2 text-center mb-4">LB</div>

            <div className="w-10 bg-cOrange500 rounded-full p-2 text-center mb-4">LB</div>
          </div>
            

          <div className="w-10 border-t-2 border-cMono300 pt-4">
            <img src={Settings} alt="" className=" bg-cOrange500 rounded-full p-2" />
          </div>
        </div>

    </section>
  )
}

export default GroupNavSidebar;