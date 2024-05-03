import { CiBookmarkPlus } from "react-icons/ci";
import { PiDotsThree, PiDotsThreeCircle } from "react-icons/pi";
import { TbBookmark } from "react-icons/tb";

const BlogCard = () => {
  return (
    <>
      <div className="grid grid-cols-10 gap-8">
        <div className="col-span-8 flex gap-2 flex-col">
          <div className="flex gap-2 items-center">
            <img src="https://picsum.photos/25" className="rounded-full" />
            <p className="text-muted">Hansel Rai </p>
            <p className="text-muted">In Dharan</p>
            <p className="text-muted">Nov 20, 2022</p>
          </div>
          <h2 className="font-bold text-2xl">The age of god enough?</h2>
          <p>
            What’s next when everything works fine? 640K of RAM ought to be
            enough for anybody. — Bill Gates, apocryphally Technologists like to
            speculate, and fret, about the end of Moore’s law: the long-standing
          </p>
          <div className="my-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 rounded-md px-2">Technology</div>
              <div>90 upvote</div>
              <div>44 downvote</div>
            </div>
            <div className="flex items-center gap-4">
              <CiBookmarkPlus className="text-2xl" />
              <PiDotsThreeCircle className="text-2xl" />
              <PiDotsThree className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <img src="https://picsum.photos/200" />
        </div>
      </div>
      <hr className="w-full" />
    </>
  );
};

export default BlogCard;
