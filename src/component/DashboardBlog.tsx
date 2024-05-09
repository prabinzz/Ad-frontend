import React, { useState } from "react";

interface Blog {
  id: number;
  title: string;
  content: string;
}

interface BlogCardProps {
  blog: Blog;
  editMode: boolean;
  onEdit: (blog: Blog) => void;
  onUpdate: (blog: Blog) => void;
  onDelete: (id: number) => void;
  onAdd: (blog: Blog) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  blog,
  editMode,
  onEdit,
  onUpdate,
  onDelete,
  onAdd,
}) => {
  const [title, setTitle] = useState<string>(blog ? blog.title : "");
  const [content, setContent] = useState<string>(blog ? blog.content : "");

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUpdate({ id: blog.id, title, content });
  };

  const handleAddSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd({ title, content, id: Date.now() });
    setTitle("");
    setContent("");
  };

  const handleDelete = () => {
    onDelete(blog.id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      {editMode ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="mb-2 p-2 border border-gray-300 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Content"
            className="mb-2 p-2 border border-gray-300 rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded"
            >
              Update
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4">{blog.title}</h2>
          <p className="text-gray-600 mb-4">{blog.content}</p>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
              onClick={() => onEdit(blog)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
      <hr className="my-4" />
      <form onSubmit={handleAddSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="mb-2 p-2 border border-gray-300 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          className="mb-2 p-2 border border-gray-300 rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogCard;
