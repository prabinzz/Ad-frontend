import React from "react";
import ProfileView from "./ProfileView";
import EditProfile from "./EditProfile";
import DeleteProfile from "./DeleteProfile";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import NavBar from "../NavBar";

const UserProfile = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4">
        <ProfileView user={user} />
        <EditProfile user={user} />
        <DeleteProfile user={user} />
      </div>
    </>
  );
};

export default UserProfile;
