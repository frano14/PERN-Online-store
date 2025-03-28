import { Frown } from "lucide-react";

const Reviews = () => {

    const reviews = null;
  return (
    <div className="py-8">
        <h3 className="text-[26px]">Reviews</h3>
        <div className="flex items-center gap-6 border-b-2 border-[#FFFFFF30] py-6">
            <div className="w-[40px] h-[40px] p-2 bg-primary rounded-full"></div>
            <textarea className="textarea w-full bg-[#FFFFFF10] placeholder:text-white" placeholder="Add your review..."></textarea>
        </div>
        {
            reviews==null ? (
            <div className="py-16 flex items-center text-center justify-center flex-col gap-2">
                <div className="flex gap-3 items-center text-white mb-6">
                    <p className="text-[24px]">Unfortunately, there are no reviews currently </p>
                    <Frown className="w-8 h-8"/>
                </div>
                <p>But don't be shy, feel free to leave a comment!</p>
            </div>
        ) : (<div></div>)
        }
    </div>
  )
}

export default Reviews
