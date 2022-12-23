import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from 'sweetalert';
function NewJob() {
  const [data, setData] = useState({});
  const jobs =[];
  let history = useHistory();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setData({...data, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newdata = {...data, id:new Date().getTime()}
    //setJobs([...data, newdata])
    jobs.push(newdata);
    var available = localStorage.getItem("jobs");
    if(available === null) {
      localStorage.setItem('jobs', JSON.stringify(jobs));
    }else{
      const jobs = JSON.parse(localStorage.getItem('jobs') || '[]');
      jobs.push(newdata);
      window.localStorage.setItem('jobs', JSON.stringify(jobs));
    }
    setData({title:'',category:'',date:'',qualification:'',skills:'',description:''})
    swal({
      title: "Job Saved Successfully!",
      text: "View Added Job Listings..",
      icon: "success",
      button: "Ok",
    });
    history.push('/allJobs');
    if(data.title && data.category && data.date && data.qualification && data.skills && data.description){
    
    }
  
  };
  return (
    <div className=" h-screen bg-indigo-100">
      <div className="w-full">
        <div className="flex items-center justify-center min-h-screen w-full p-4">
          <form className="bg-white shadow-md rounded mt-50 px-8 py-6  pb-8 mb-4 border-4 border-t-indigo-600">
            <div className="lg:flex flex-row gap-3 sm:flex">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Title
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-sm
               text-gray-700 leading-tight focus:border-indigo-600 focus:outline-none "
                  type="text"
                  name="title"
                  value={data.title}
                  onChange={handleChange}
                  placeholder="job title"
                />
              </div>
              <div className="mb-4">
                <div className="w-full  px-3 mb-6 md:mb-0">
                  <label className="text-gray-700 text-xs font-semibold mb-2">
                    Category
                  </label>
                  <div className="relative py-1">
                    <select
                      className="shadow appearance-none border rounded w-44  py-2 px-3 text-sm
                    text-gray-700 leading-tight focus:border-indigo-600 focus:outline-none"
                      id="category"
                      name="category"
                      value={data.category}
                      onChange={handleChange}>
                      <option value="Onsite" disabled>--select category--</option>
                      <option>Remote</option>
                      <option value="Onsite">Onsite</option>
                      <option vaue="Hybrid">Hybrid</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className=" text-gray-700 text-sm font-semibold mb-2">
                  Deadline
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-sm
               text-gray-700 leading-tight focus:border-indigo-600 focus:outline-none "
                  id="date"
                  type="date"
                  name="date"
                  value={data.date}
                  onChange={handleChange}
                  placeholder="Username"
                />
              </div>
            </div>
            <div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2 focus:border-indigo-600 focus:outline-none">
                  Job Description
                </label>
                <textarea
                  id="description"
                  rows="2"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-sm
                text-gray-700 leading-tight focus:border-indigo-600 focus:outline-none "
                  placeholder="Your message..."
                  name='description'
                  value={data.description}
                  onChange={handleChange}
                ></textarea>
              </div>
      
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Qualifications
                </label>
                <textarea
                  id="qualification"
                  rows="2"
                  className=" shadow appearance-none border rounded w-full py-2 px-3 text-sm
                text-gray-700 leading-tight focus:border-indigo-600 focus:outline-none "
                  placeholder="Type Qualifications here..."
                  name="qualification"
                  value={data.qualification}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Required Skills 
                </label>
                <textarea
                  id="skills"
                  rows="2"
                  className=" shadow appearance-none border rounded w-full py-2 px-3 text-sm
                text-gray-700 leading-tight focus:border-indigo-600 focus:outline-none "
                  placeholder="Type required skills here..."
                  name="skills"
                  value={data.skills}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="">
                <button
                  className="w-44 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewJob;
