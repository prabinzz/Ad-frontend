import { Axios } from "@/lib/axios";
import store from "@/store/store";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

const EditBlog: React.FC = () => {
  const token = store.getState().auth.token;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState("");
  const [found, setFound] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await Axios.put(
      `Blog/${id}`,
      { id: id, title: title, content: content },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.status == 200) {
      alert("Blog Edited Successfully");
    } else {
      alert(`Faild to edit blog,  ${res.status} response from server`);
    }

    // Reset form fields
    setTitle("");
    setContent("");
  };

  const handleIdChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const req = await Axios.get(`Blog/${e.currentTarget.value}`);
    if (req.status == 200) {
      setId(e.target.value);
      setFound(true);
      const blog = req.data as Blog;
      setTitle(blog.title);
      setContent(blog.content);
    } else {
      setTitle("");
      setContent("");
      setFound(false);
    }
  };

  return (
    <div className="mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="id"
          ></label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            placeholder="Enter description"
            onChange={handleIdChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            placeholder="Enter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            EditBlog
          </button>
        </div>
      </form>
      <ToastContainer closeOnClick />
    </div>
  );
};

export default EditBlog;
