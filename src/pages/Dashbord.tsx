import { useState } from "react";

function Dashboard() {
  // TODO: Needs to complete this later ..
  const contentMap = {
    index: <>this is an index</>,
    profile: <>this is an index</>,
    manageBlogs: <>this is an index</>,
    Others: <>this is an index</>,
  };
  const [activeTab, setActiveTab] = useState("index");
  return (
    <div className="w-full flex justify-between">
      <div className="w-20 bg-red-50"></div>
      <div className="w-full bg-slate-500"></div>
    </div>
  );
}

export default Dashboard;
