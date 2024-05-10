import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddBlogForm from "@/component/DashboardAddBlog";
import BlogList from "@/component/DashboardBlogList";
import NewAdminForm from "@/component/CreateAdmin";
import EditBlog from "@/component/DashbordEditBlog";
import { useParams } from "react-router-dom";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(useParams().tab || "Dashbord");

  const tabs: { [key: string]: string } = {
    dashboard: "Dashboard",
    addblog: "AddBlog",
    bloglist: "Blog List",
    editblog: "Edit Blog",
    addbdmin: "AddAdmin",
    orders: "Orders",
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <div>Dashboard Content</div>;
      case "addblog":
        return <AddBlogForm />;
      case "bloglist":
        return <BlogList />;
      case "addadmin":
        return <NewAdminForm />;
      case "editblog":
        return <EditBlog />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 w-1/4 py-4">
        <ul>
          {Object.entries(tabs).map(([key, value]) => (
            <li key={key}>
              <button
                className={`w-full px-4 py-2 text-white ${
                  activeTab === key ? "bg-gray-900" : ""
                }`}
                onClick={() => setActiveTab(key)}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-4 bg-gray-200">{renderTabContent()}</main>
    </div>
  );
};

export default App;
