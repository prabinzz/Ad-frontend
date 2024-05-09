import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import BlogItem from "./pages/BlogItem.tsx";
import Dashboard from "./pages/Dashbord.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import AdminRoute from "./component/AdminRoute.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog/" element={<BlogItem />} />
          <Route path="/dashboard/" element={<AdminRoute><Dashboard /> </AdminRoute>} />
          <Route path="/login/" element={<Login />} />
          <Route path="/signup/" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
