// src/Dashboard.js

import { Axios } from "@/lib/axios";
import store from "@/store/store";
import React, { useState, useEffect } from "react";

const DashboardMOnthlyView = () => {
  const token = store.getState().auth.token;
  const [data, setData] = useState({
    noOfBlogs: 0,
    noOfComment: 0,
    noOfUpvote: 0,
    noOfDownvote: 0,
    blogs: [],
  });

  useEffect(() => {
    Axios.get("Admin/Dashboard?Month=All", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((data) => {
      setData(data.data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full mb-4">
        <h1 className="text-2xl font-bold mb-4">Monthly Dashboard</h1>
        <div className="mb-4">
          <span className="font-semibold">Total Blogs:</span> {data.noOfBlogs}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Total Comments:</span>{" "}
          {data.noOfComment}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Total Upvotes:</span>{" "}
          {data.noOfUpvote}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Total Downvotes:</span>{" "}
          {data.noOfDownvote}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-lg p-6 max-w-md w-full"
          >
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-4">
              {blog.content.substring(0, 100)}...
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">Posted on:</span>
              <span className="text-gray-700">
                {new Date(blog.created).toLocaleDateString()}
              </span>
            </div>
            <div className="mt-4">
              <span className="font-semibold">Author:</span> {blog.author.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardMOnthlyView;
