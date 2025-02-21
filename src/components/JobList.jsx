import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobs, applyJob } from "../store/jobSlice";
import axios from "axios";

const JobList = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.list);
  const appliedJobs = useSelector((state) => state.jobs.appliedJobs);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://www.arbeitnow.com/api/job-board-api")
      .then((response) => {
        dispatch(setJobs(response.data.data));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, [dispatch]);

  const handleApply = (jobId) => {
    
    console.log("ids:",jobId);
    dispatch(applyJob(jobId));
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  if (loading) return <p className="text-center text-lg font-semibold">Loading jobs...</p>;

  return (
    <div className="p-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search jobs by title or company"
        className="mb-4 p-2 w-full border rounded-lg"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job,index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold">{job.title}</h3>
            <p className="text-gray-600">{job.company_name}</p>
            <button
              onClick={() => handleApply(index)}
              className={`mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 ${appliedJobs.includes(index) ? 'bg-gray-500 cursor-not-allowed' : ''}`}
            >
              {appliedJobs.includes(index) ? "Applied" : "Apply"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
