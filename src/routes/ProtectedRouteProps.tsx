import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    isAuthenticated: boolean;
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, children }) => {
    // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang login
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Nếu đã đăng nhập, render component con
    return <>{children}</>;
};

export default ProtectedRoute;
