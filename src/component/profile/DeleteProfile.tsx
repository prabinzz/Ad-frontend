import React from "react";
import axios from "axios";

const DeleteProfile = ({ user }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/auth/me`);
      alert("Profile deleted successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to delete profile");
    }
  };

  return (
    <div className="mt-8">
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Delete Profile
      </button>
    </div>
  );
};

export default DeleteProfile;
