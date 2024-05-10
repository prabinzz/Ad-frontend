import React, { useState } from "react";
import axios from "axios";

const EditProfile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [address, setAddress] = useState(user.address);
  const [gender, setGender] = useState(user.gender);
  const [profilePicture, setProfilePicture] = useState(user.profilePicture);
  const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("/auth/me", {
        name,
        email,
        phoneNumber,
        address,
        gender,
        profilePicture,
        dateOfBirth,
      });
      alert("Profile updated successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to update profile");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto mt-8"
    >
      <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        required
      />
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        required
      />
      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        required
      ></textarea>
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <input
        type="file"
        onChange={(e) =>
          setProfilePicture(URL.createObjectURL(e.target.files[0]))
        }
        className="w-full p-2 mb-4 border border-gray-300 rounded-md cursor-pointer"
      />
      <input
        type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        required
      />
      <button
        onClick={() => alert("profile updated successfully")}
        type="submit"
        className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Update Profile
      </button>
    </form>
  );
};

export default EditProfile;
