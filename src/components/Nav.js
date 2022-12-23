import React, { useState } from "react";
import { Link} from "react-router-dom";

const Nav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Add New", link: "/addNew" },
    { name: "Available Jobs", link: "/allJobs" },
    { name: "Source Code", link: "/goToGoogle" },
  ];
  let [open, setOpen] = useState(false);
  const link = 'https://github.com/haronsoft/JobPosting';
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-xl font-body text-indigo-500 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Job Posting
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8  md:my-0 my-7">
              <Link to={link.link}>
                <span className="text-indigo-800 hover:text-indigo-400 duration-500">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
          <a target="_blank" rel="noopener noreferrer" href={link} className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500' title="source code">Get Started</a>
  
        </ul>
      </div>
    </div>
  );
};
export default Nav;
