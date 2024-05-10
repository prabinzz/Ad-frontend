import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddBlogForm from "@/component/DashboardAddBlog";
import BlogList from "@/component/DashboardBlogList";
import NewAdminForm from "@/component/CreateAdmin";
import EditBlog from "@/component/DashbordEditBlog";
import { useParams } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // Importing React Icons
import DashboardMOnthlyView from "@/component/DashboardMonthlyView";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(useParams().tab || "Dashbord");

  const tabs: { [key: string]: string } = {
    dashboard: "Dashboard",
    addblog: "AddBlog",
    bloglist: "Blog List",
    editblog: "Edit Blog",
    addadmin: "AddAdmin",
    monthlyview: "MOnthly View",
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
      case "monthlyview":
        return <DashboardMOnthlyView />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-200 w-64 py-4">
        <ul>
          {Object.entries(tabs).map(([key, value]) => (
            <li key={key} className="mb-2">
              <button
                className={`w-full px-4 py-2 text-gray-800 ${
                  activeTab === key
                    ? "bg-gray-300"
                    : "bg-gray-200 hover:bg-gray-300"
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
      <main className="flex-1 p-4 bg-gray-100">{renderTabContent()}</main>
    </div>
  );
};

export default App;
