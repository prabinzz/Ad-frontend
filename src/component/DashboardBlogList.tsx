import React, { useState, useEffect, FormEvent } from "react";
import axios from "axios";
import { Axios } from "@/lib/axios";
import store from "@/store/store";

interface Blog {
  id: number;
  title: string;
  date: string;
}

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const token = store.getState().auth.token;

  const loadMyBlogs = async () => {
    const res = await await Axios.put(`Blog/MyBlog`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status == 200) {
      setBlogs(res.data as Blog[]);
    } else {
      alert(`Faild to load blogs`);
    }
  };
  useEffect(() => {
    loadMyBlogs();
  }, []);

  const handleEdit = (id: number) => {
    // Handle edit functionality, e.g., navigate to edit page
    console.log("Editing blog with id:", id);
  };

  const handleDelete = (id: number) => {
    // Handle delete functionality, e.g., send delete request to API
    console.log("Deleting blog with id:", id);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Blogs</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id}>
                <td className="border px-4 py-2">{blog.id}</td>
                <td className="border px-4 py-2">{blog.title}</td>
                <td className="border px-4 py-2">{blog.date}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleEdit(blog.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleDelete(blog.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogList;
