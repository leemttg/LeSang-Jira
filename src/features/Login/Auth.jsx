import React from "react";
import { Link, Outlet } from "react-router-dom";

const Auth = () => {
    return (
        <div className="bg-login flex min-h-screen">
            <div className="w-3/6"></div>
            <div className="pt-60 w-3/6">
                <h2 className="text-6xl text-center">JIRA PROJECT</h2>
                <Outlet />
            </div>
        </div>
    );
};

export default Auth;
