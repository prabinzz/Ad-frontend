import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import BlogItem from "./pages/BlogItem.tsx";
import Dashboard from "./pages/Dashbord.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog/" element={<BlogItem />} />
        <Route path="/dashboard/" element={<Dashboard />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/signup/" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
