import React, { useEffect, useState } from "react";
import JobPosting from "./JobPosting";

function AllJobs() {
  const [jobs, setJobs] = useState([]);
  const data = JSON.parse(localStorage.getItem("jobs") || "[]");
  
  useEffect(() => {
    setJobs(data);
  }, []);

  return (
    <div className="h-screen bg-indigo-100 ">
      <div className="flex flex-col sm:flex-col md:flex-col gap-2 p-4 h-screen">
        {jobs.map((job,index) => {
          return <JobPosting key={job.id} {...job} index={index}/>;
        })}
      </div>
    </div>
  );
}

export default AllJobs;
