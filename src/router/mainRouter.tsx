import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import GoPro from "../pages/GoPro";
import Challenges from "../pages/Challenges";
import Blog from "../pages/Blog";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import PrivateRoute from "../app/services/auth/PrivateRoute";

const MainRouter = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gopro" element={<GoPro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default MainRouter;
