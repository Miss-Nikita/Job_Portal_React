import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";

// Import the necessary components from chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,  
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const jobCount = useSelector((state) => state.jobs.list.length);

  const chartData = {
    labels: ["Jobs Available"],  // x-axis label
    datasets: [
      {
        label: "Job Listings",  // Data label
        data: [jobCount],  // Chart data
        backgroundColor: "#4caf50",  // Bar color
      },
    ],
  };

  return (
    <div className="p-6">
      <Bar data={chartData} />  {/* Render Bar chart */}
    </div>
  );
};

export default Analytics;
