import React, { useState } from "react";

function JobPosting({
  id,
  title,
  category,
  date,
  description,
  qualification,
  skills,
  index,
}) {
  const [readMore, setReadMore] = useState(false);
  const [jobs, setJobs] = useState([]);
  const removeJob = (id) => {
    const data = JSON.parse(localStorage.getItem("jobs") || "[]");
    const newjobs = data.filter((job) => job.id !== id);
    setJobs(newjobs);
  };
  return (
    <div>
      <div
        className={`card shadow  rounded  p-4 bg-gray-50 border-4 ${
          category === "remote" ? "border-l-indigo-600" : "border-l-red-600"
        }  hover:bg-gray-100`}
        key={id}
      >
        <div className="flex justify-between mb-2">
          <div className="font-bold text-xl">
            {title} -
            <span className="text-xs font-serif text-indigo-500">
              {category}
            </span>
          </div>
          <div className="text-xs pr-3 font-mono">
            Application Deadline - {date}{" "}
            <span className="hidden">
              <button
                onClick={() => removeJob(id)}
                class="bg-red-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-red-400"
              >
                delete job
              </button>
            </span>
          </div>
        </div>
        <div className="bg-gray">
          <p className="font-sans text-xs border-t  pt-2 pb-2  border-blue-300  text-gray-800 leading-normal">
            <span className="text-xs italic mb-1 font-mono">
              <span className="font-mono font-semibold text-indigo-700">
                [Adanian Labs]
              </span>{" "}
              : job description
            </span>
            <br />
            {readMore ? description : `${description.substring(0, 150)} ...`}
            <button
              onClick={() => setReadMore(!readMore)}
              class="text-red-500 font-semibold py-2 px-2 rounded"
            >
              {readMore ? "show less" : "  view Details"}
            </button>
          </p>
          <div className={`${!readMore ? "hidden" : "block"}`}>
            <p className="font-sans text-xs   text-gray-800 ">
              <span className="text-xs italic mb-1 font-mono font-semibold p-2">
                Qualifications
              </span>
              <br />
              {qualification}
            </p>
          </div>
        </div>

        <div className="text-xs  font-bold uppercase font-mono border-t p-2 border-blue-300">
          {skills}
        </div>
        <div className="text-xs pt-2 font-bold uppercase text-end pr-3">
          {index}
        </div>
      </div>
    </div>
  );
}

export default JobPosting;
