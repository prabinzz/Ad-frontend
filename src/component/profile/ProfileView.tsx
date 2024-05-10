// ProfileView.js
import React from "react";
import { FaUser } from "react-icons/fa"; // Example icon

const ProfileView = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl text-center mx-auto">
      <FaUser className="text-4xl mb-4 mx-auto" />
      <h2 className="text-xl font-semibold mb-4">Profile View</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone Number:</strong> {user.phoneNumber}
      </p>
      <p>
        <strong>Address:</strong> {user.address}
      </p>
      <p>
        <strong>Gender:</strong> {user.gender}
      </p>
      <img
        src={user.profilePicture}
        alt="Profile Picture"
        className="rounded-full w-32 h-32 object-cover mt-4 mx-auto"
      />
      <p>
        <strong>Date of Birth:</strong>{" "}
        {new Date(user.dateOfBirth).toLocaleDateString()}
      </p>
    </div>
  );
};

export default ProfileView;
