import { Axios } from "@/lib/axios";
import store from "@/store/store";
import React, { useState, FormEvent } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

const AddBlogForm: React.FC = () => {
  const token = store.getState().auth.token;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log({ title, content, description, tags });
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("description", description);
    formData.append("tag", tags);
    const res = await Axios.post("Blog", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.status == 200) {
      toast("Blog Created Successfully", {});
    } else {
      toast(`Faild to create post ${res.status} from server`);
    }
    // Reset form fields
    setTitle("");
    setContent("");
    setDescription("");
    setTags("");
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await Axios.post("ImageUploadEndpoint", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      // if (res.status === 200) {
      //   const responseData = await res.json();
      //   if (responseData.imageUrl) {
      //     setImageUrl(responseData.imageUrl); // Update the image URL state

      // }
    } catch (error) {
      console.error("Failed to upload image:", error);
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
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tags"
          >
            Tags
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tags"
            type="text"
            placeholder="Enter tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Blog
          </button>
        </div>
      </form>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="imageUpload"
        >
          Upload Image
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="imageUpload"
          type="file"
          accept="image/*" // Accept only image files
          onChange={(e) => handleImageUpload(e)}
        />
      </div>
      <ToastContainer closeOnClick />
    </div>
  );
};

export default AddBlogForm;
