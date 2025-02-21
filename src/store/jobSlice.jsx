import { createSlice } from "@reduxjs/toolkit";

// Helper function to load applied jobs from localStorage
const loadAppliedJobsFromLocalStorage = () => {
  const savedAppliedJobs = localStorage.getItem("appliedJobs");
  return savedAppliedJobs ? JSON.parse(savedAppliedJobs) : [];
};

// Helper function to save applied jobs to localStorage
const saveAppliedJobsToLocalStorage = (appliedJobs) => {
  localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
};

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    list: [],
    appliedJobs: loadAppliedJobsFromLocalStorage(), // Load applied jobs from localStorage
  },
  reducers: {
    setJobs: (state, action) => {
      state.list = action.payload;
    },
    applyJob: (state, action) => {
      const jobId = action.payload; // Get job ID from the action payload
      if (!state.appliedJobs.includes(jobId)) {
        state.appliedJobs.push(jobId); // Add job ID to appliedJobs array
        saveAppliedJobsToLocalStorage(state.appliedJobs); // Save to localStorage
      }
    },
  },
});

export const { setJobs, applyJob } = jobSlice.actions;
export default jobSlice.reducer;
