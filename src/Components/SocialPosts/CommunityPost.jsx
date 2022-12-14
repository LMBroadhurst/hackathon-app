import React from 'react';
import Portrait from "../../Assets/PortraitSquared.jpg";

const CommunityPost = () => {

    const pageContent = () => {
        // if (!uniqueId) {
        //     return ''
        // }

        // const { firstName, lastName } = user;

        return (
        <section className="p-5 bg-white rounded-md customShadow1">
        <div>
            <div className="flex flex-row items-center gap-4">
                <div className='w-12 h-12 bg-neutral flex flex-col items-center justify-center rounded-full'>
                    {/* <span className="text-white text-xl">{firstName.slice(0,1)}{lastName.slice(0,1)}</span> */}
                </div>
                
                <div className="flex flex-col items-start">
                    {/* <h3 className="text-xl">{firstName} {lastName}</h3> */}
                    <h5 className="text-sm">Today at 10:54am</h5>
                </div>
            </div>
            
            {/* <p className="mt-4 border-b border-cMono700 pb-4">{content}</p> */}

            <div className="flex flex-col items-center justify-between xl:flex-row xl:mt-4">
                <div className="flex flex-row items-center gap-2 my-2 xl:my-0">
                    {/* <span>{likecount} likes</span> */}
                    <span className="-translate-y-2 text-2xl">.</span>
                    <span>0 comments</span>
                </div>

                <div className="flex flex-row items-center gap-2 xl:-order-2">
                    <button className="w-28 py-1 bg-primary rounded-md text-white hover:bg-secondary">Like</button>
                    <button className="w-28 py-1 bg-primary rounded-md text-white hover:bg-secondary">Comment</button>
                </div>
            </div>
            
        </div>
        </section>
        )
    }

  return (
    <>
        {pageContent()}
    </>
  )
}

export default CommunityPost;