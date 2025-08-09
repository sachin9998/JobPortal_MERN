import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isAuthenticated = true;
  const user = { fullName: "Alex", role: "employer" };
  const navigate = useNavigate();

  return (
    <header>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 ">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">JobPortal</span>
          </div>

          {/* Navigation Link - Hidden on Mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium cursor-pointer"
              onClick={() => navigate("/find-jobs")}
            >
              Find Jobs
            </a>
            <a
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium cursor-pointer"
              onClick={() =>
                navigate(
                  isAuthenticated && user?.role === "employer"
                    ? "/employer-dashboard"
                    : "/login"
                )
              }
            >
              For Employers
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <span className="text-gray-700">Welcome, {user?.fullName}</span>
                <a
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow:sm hover:shadow:md"
                  href={
                    user?.role === "employer"
                      ? "/employer-dashboard"
                      : "/find-jobs"
                  }
                >
                  Dashboard
                </a>
              </div>
            ) : (
              <>
                <a
                  className="text-gray-600 hover:text-gray-800 transition-colors font-medium px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-500"
                  href="/login"
                >
                  Login
                </a>
                <a
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow:sm hover:shadow:md"
                  href="/signup"
                >
                  Sign Up
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
