import React from "react";
import { Toaster } from "react-hot-toast";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Login } from "./pages/Auth/Login/Login";
import { Signup } from "./pages/Auth/Signup/Signup";
import { LandingPage } from "./pages/LandingPage/LandingPage";

const App = () => {
  return (
    <div>
      {/* Routes */}
      <Router>
        {/* Public Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

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
                  element={<EmployerDasboard />}
                />
                <Route path="/post-job" element={<JobPostingForm />} />
                <Route path="/manage-jobs" element={<ManageJobs />} />
                <Route path="/applicants" element={<ApplicationViewer />} /> 
                <Route path="/company-profile" element={<EmployerProfilePage />} />
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
