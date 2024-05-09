import { useEffect } from "react";
import BlogCard from "../component/BlogCard";
import NavBar from "../component/NavBar";
import { Axios } from "@/lib/axios";
import { useDispatch } from "react-redux";
import { setBlogs } from "@/store/blogSlice";
import store from "@/store/store";

function Index() {
  const dispatch = useDispatch();
  const blogs = store.getState().blog.blogs;
  const getAllBlogs = async () => {
    const res = await Axios.get("Blog");
    if (res.status == 200) {
      const blogs = res.data as Blog[];
      dispatch(setBlogs(blogs));
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);
  return (
    <div className="container">
      <NavBar />

      <div className="container max-w-3xl mx-auto space-y-8 mt-8">
        {blogs.map((blog) => {
          console.log(blog);
          return <BlogCard blog={blog} />;

          // <BlogCard blog={blog} />
        })}
      </div>
    </div>
  );
}

export default Index;
