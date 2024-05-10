import { RootState } from "@/store/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const CommentCard = ({ comment, onUpvote, onDownvote }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <p className="text-gray-800">{comment.text}</p>
      <div className="flex items-center mt-2">
        <button onClick={() => onUpvote(comment.id)} className="mr-2">
          Upvote
        </button>
        <span className="text-green-500 mr-2">{comment.upvotes}</span>
        <button onClick={() => onDownvote(comment.id)}>Downvote</button>
      </div>
    </div>
  );
};

const CommentSection = () => {
  const commnets = useSelector(
    (state: RootState) => state.blog.selectedBlog
  ).comments;
  const [newComment, setNewComment] = useState("");

  const handleUpvote = (id) => {
    // Logic to handle upvoting
  };

  const handleDownvote = (id) => {
    // Logic to handle downvoting
  };

  const handleCommentSubmit = () => {
    // Logic to submit comment
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <div className="mb-4">
        {commnets.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            onUpvote={handleUpvote}
            onDownvote={handleDownvote}
          />
        ))}
      </div>
      <div className="mb-4">
        <textarea
          className="w-full border p-2"
          rows={4}
          placeholder="Write your comment here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button
          onClick={handleCommentSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
