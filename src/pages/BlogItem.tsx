import CommentSection from "@/component/CommentSection";
import NavBar from "@/component/NavBar";
import { Axios } from "@/lib/axios";
import { selectBlog } from "@/store/blogSlice";
import store, { RootState } from "@/store/store";
import { useState } from "react";
import { CiBookmarkPlus } from "react-icons/ci";
import { PiDotsThree, PiDotsThreeCircle } from "react-icons/pi";
import Markdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";

const BlogItem = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const { blogid } = useParams();
  const [comment, setComment] = useState("");
  if (blogid != undefined) {
    console.log(blogid);

    dispatch(selectBlog(blogid));
  }
  const blog = useSelector((state: RootState) => state.blog.selectedBlog);

  async function handleUpvote(e: React.MouseEvent<HTMLDivElement>) {
    const res = await Axios.get(`Admin/Dashboard?Month=All`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status == 200) {
      alert("Successfully Upvoted.");
    } else {
      alert("Couldnt Upvote.");
    }
  }

  async function handleDownvote(e: React.MouseEvent<HTMLDivElement>) {
    const res = await Axios.post(
      `Blog/dislike/${blog?.id}`,
      { id: blog?.id },

      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (res.status == 200) {
      alert("Successfully Downloted.");
    } else {
      alert("Couldnt Downvote.");
    }
  }

  return (
    <>
      <NavBar />
      <div className="max-w-3xl mx-auto mt-8">
        <h1 className="text-4xl text-bold mb-8">{blog?.content}</h1>
        <p className="text-muted text-2xl">{blog?.description}</p>
        <div className="flex gap-6 items-center my-8">
          <img src="https://picsum.photos/60" className="rounded-full" />
          <div className="flex flex-col">
            <p className="text-muted">{blog?.author.name}</p>
            <p className="text-muted">
              {blog?.upvoteCount} upvote - {blog?.downvoteCount} downvote
            </p>
          </div>
        </div>
        {/* End profile  */}
        <hr />
        <div className="my-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 rounded-md px-2">{blog?.tag}</div>
            <div onClick={handleUpvote}>{blog?.upvoteCount} upvote</div>
            <div onClick={handleDownvote}>{blog?.upvoteCount} downvote</div>
          </div>
          <div className="flex items-center gap-4">
            <CiBookmarkPlus className="text-2xl" />
            <PiDotsThreeCircle className="text-2xl" />
            <PiDotsThree className="text-2xl" />
          </div>
        </div>
        <hr />
        {/* end action bar  */}
        <div className="text-xl leading-relaxed md mt-8 mb-12">
          <Markdown remarkPlugins={[remarkGfm]}>{blog?.content}</Markdown>
        </div>
        <CommentSection />
      </div>
    </>
  );
};

export default BlogItem;
