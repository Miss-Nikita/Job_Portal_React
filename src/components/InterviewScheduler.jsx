import React, { useState } from "react";

const InterviewScheduler = () => {
  const [interview, setInterview] = useState({ name: "", date: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Interview Scheduled for ${interview.name} on ${interview.date}`);
  };
  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <label className="block font-medium">Candidate Name</label>
      <input type="text" className="w-full border p-2 rounded-lg" value={interview.name} onChange={(e) => setInterview({ ...interview, name: e.target.value })} />
      <label className="block font-medium">Date</label>
      <input type="date" className="w-full border p-2 rounded-lg" value={interview.date} onChange={(e) => setInterview({ ...interview, date: e.target.value })} />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700">Schedule</button>
    </form>
  );
};
export default InterviewScheduler