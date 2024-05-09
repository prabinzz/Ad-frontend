import BlogCard from "@/component/DashboardBlog";
import React, { useState } from "react";

const App = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <div>Tab 1</div>;
      case "Blog":
      // return <BlogCard onAdd={({}) => {}} editMode={false} onDelete={({})=> {}} onEdit={({})=> {}} onUpdate={({})=> {}} />;
      case "products":
        return <div>Tab 3</div>;
      case "orders":
        return <div>Tab 4</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 w-1/4">
        <ul className="py-4">
          <li>
            <button
              className={`w-full px-4 py-2 text-white ${
                activeTab === "dashboard" ? "bg-gray-900" : ""
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              className={`w-full px-4 py-2 text-white ${
                activeTab === "users" ? "bg-gray-900" : ""
              }`}
              onClick={() => setActiveTab("users")}
            >
              Users
            </button>
          </li>
          <li>
            <button
              className={`w-full px-4 py-2 text-white ${
                activeTab === "products" ? "bg-gray-900" : ""
              }`}
              onClick={() => setActiveTab("products")}
            >
              Products
            </button>
          </li>
          <li>
            <button
              className={`w-full px-4 py-2 text-white ${
                activeTab === "orders" ? "bg-gray-900" : ""
              }`}
              onClick={() => setActiveTab("orders")}
            >
              Orders
            </button>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-4 bg-gray-200">{renderTabContent()}</main>
    </div>
  );
};

export default App;
