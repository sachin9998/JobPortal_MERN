import React from "react";
import { Toaster } from "react-hot-toast";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import SignUp from "./pages/Auth/SignUp";
import EmployerDashboard from "./pages/Employer/EmployerDashboard";

import JobDetails from "./pages/JobSeeker/JobDetails";
import JobSeekerDashboard from "./pages/JobSeeker/JobSeekerDashboard";
import SavedJobs from "./pages/JobSeeker/SavedJobs";
import UserProfile from "./pages/JobSeeker/UserProfile";
import LandingPage from "./pages/LandingPage/LandingPage";

import Login from "./pages/Auth/Login";
import ApplicationViewer from "./pages/Employer/ApplicationViewer";
import JobPostingForm from "./pages/Employer/JobPostingForm";
import ManageJobs from "./pages/Employer/ManageJobs";
import ProtectedRoute from "./routes/ProtectedRoute";
import EmployerProfilePage from './pages/Employer/EmployerProfilePage';

const App = () => {
  return (
    <div>
      {/* Routes */}
      <Router>
        {/* Public Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/find-jobs" element={<JobSeekerDashboard />} />
          <Route path="/job/:jobId" element={<JobDetails />} />
          <Route path="/saved-jobs" element={<SavedJobs />} />
          <Route path="/profile" element={<UserProfile />} />

          {/* Protected Routes */}
          <Route
            element={
              <ProtectedRoute requiredRole="employer">
                <Route
                  path="/employer-dashboard"
                  element={<EmployerDashboard />}
                />
                <Route path="/post-job" element={<JobPostingForm />} />
                <Route path="/manage-jobs" element={<ManageJobs />} />
                <Route path="/applicants" element={<ApplicationViewer />} />
                <Route
                  path="/company-profile"
                  element={<EmployerProfilePage />}
                />
                <Route path="/manage-jobs" element={<ManageJobs />} />
              </ProtectedRoute>
            }
          ></Route>

          {/* Admin Routes */}

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>

      {/* Toaster  */}
      <Toaster
        toastOptions={{
          // Define default options here
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      ></Toaster>
    </div>
  );
};

export default App;
