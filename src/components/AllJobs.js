import React, { useEffect, useState } from "react";
import JobPosting from "./JobPosting";

function AllJobs() {
  const [jobs, setJobs] = useState([]);
  const data = JSON.parse(localStorage.getItem("jobs") || "[]");

  const initData = [
    {
      title: "Senior Software Engineer",
      category: "Onsite",
      date: "2022-11-29",
      description:
        "A job description is a useful, plain-language tool that explains the tasks, duties, function and responsibilities of a position. It details who performs a specific type of work, how that work is to be completed, and the frequency and the purpose of the work as it relates to the organization's mission and goals.",
      qualification:
        "A job description is a useful, plain-language tool that explains the tasks, duties, function and responsibilities of a position. It details who performs a specific type of work, how that work is to be completed, and the frequency and the purpose of the work as it relates to the organization's mission and goals.",
      skills: "C#,java,android, react, react native,angular, vue, asp.net",
      id: 1671841141897,
    },
    {
      title: "Front-end Developer",
      category: "Remote",
      date: "2023-01-06",
      description:
        "A job description is a useful, plain-language tool that explains the tasks, duties, function and responsibilities of a position. It details who performs a specific type of work, how that work is to be completed, and the frequency and the purpose of the work as it relates to the organization's mission and goals.",
      qualification:
        "A job description is a useful, plain-language tool that explains the tasks, duties, function and responsibilities of a position. It details who performs a specific type of work, how that work is to be completed, and the frequency and the purpose of the work as it relates to the organization's mission and goals.",
      skills: "React,HTML,CSS3,JAVASCRIPT,REDUX, TAILWIND,BOOTSRAP",
      id: 1671841228912,
    },
    {
      category: "Hybrid",
      title: "Mobile Developer",
      date: "2022-12-30",
      description:
        "A job description is a useful, plain-language tool that explains the tasks, duties, function and responsibilities of a position. It details who performs a specific type of work, how that work is to be completed, and the frequency and the purpose of the work as it relates to the organization's mission and goals.",
      qualification:
        "A job description is a useful, plain-language tool that explains the tasks, duties, function and responsibilities of a position. It details who performs a specific type of work, how that work is to be completed, and the frequency and the purpose of the work as it relates to the organization's mission and goals.",
      skills: "KOTLIn, java,flutter, react native, android studio, sdk",
      id: 1671841281705,
    },
    {
      title: "Test",
      category: "Hybrid",
      date: "2023-01-10",
      description: "sdsddsjkl",
      qualification: "ghjkjk",
      skills: "ui,kkk,kkk",
      id: 1673588681107,
    },
  ];
  useEffect(()=>{
    localStorage.setItem('jobs', JSON.stringify(initData));
  },[])
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
