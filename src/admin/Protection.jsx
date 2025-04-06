import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const Protection = () => {
    const role = localStorage.getItem("role");
    return role === "prince" ? <Outlet /> : <Navigate to="/AdminLogin" />;
};

export default Protection;
