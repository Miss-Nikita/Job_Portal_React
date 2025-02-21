import React, { useState } from "react";
import JobList from "./components/JobList";
import Analytics from "./components/Analytics";
import InterviewScheduler from "./components/InterviewScheduler";

const App = () => {
  // Track which section is active
  const [activeSection, setActiveSection] = useState("jobList");

  // Render corresponding component based on active section
  const renderSection = () => {
    switch (activeSection) {
      case "jobList":
        return <JobList />;
      case "analytics":
        return <Analytics />;
      case "interviewScheduler":
        return <InterviewScheduler />;
      default:
        return <JobList />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Job Portal Dashboard</h1>
      <div className="flex justify-center space-x-4">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg"
          onClick={() => setActiveSection("jobList")}
        >
          Job Listings
        </button>
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-lg"
          onClick={() => setActiveSection("analytics")}
        >
          {/* Analytics */}
        </button>
        <button
          className="bg-purple-500 text-white px-6 py-2 rounded-lg"
          onClick={() => setActiveSection("interviewScheduler")}
        >
          Schedule Interview
        </button>
      </div>
      <div className="mt-6">
        {renderSection()} {/* Dynamically render the active component */}
      </div>
    </div>
  );
};

export default App;
