import { useEffect, useState } from "react";
import BlogCard from "../component/BlogCard";
import NavBar from "../component/NavBar";
import { Axios } from "@/lib/axios";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs } from "@/store/blogSlice";
import store, { RootState } from "@/store/store";
import { Link } from "react-router-dom";

function Index() {
  const dispatch = useDispatch();
  const blogs = useSelector((state: RootState) => state.blog.blogs);
  const [filter, setFilter] = useState("random");
  const [page, setPage] = useState(1);

  const getAllBlogs = async () => {
    try {
      const res = await Axios.get(`Blog?page=${page}&size=10&sort=${filter}`);
      if (res.status === 200) {
        dispatch(setBlogs(res.data as Blog[]));
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, [page, filter]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="container">
      <NavBar />

      <div className="container max-w-3xl mx-auto space-y-8 mt-8">
        {blogs.map((blog) => (
          <Link to={`blog/${blog.id}`}>
            <BlogCard key={blog.id} blog={blog} />
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button
          className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-l"
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Prev
        </button>
        <span className="bg-gray-200 text-gray-700 py-2 px-4">{page}</span>
        <button
          className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-r"
          disabled={page === 5}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Index;
