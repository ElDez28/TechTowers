import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import BasicModal from "./Modal";
const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <BasicModal isOpen={isOpen} handleClose={closeModal}></BasicModal>

      <nav
        className={`${
          props.bg === "white"
            ? "bg-gray-100 shadow-lg transition-shadow delay-150"
            : "bg-transparent"
        } fixed w-full z-50 transition-colors duration-300`}
      >
        <div className="flex items-center justify-between p-6  max-w-[90rem] mx-auto">
          <div className="2xl:w-60 w-40  ">
            <img
              className="object-contain  hidden lg:inline-block"
              src={props.bg === "white" ? "/logo.png" : "/logo2.png"}
            ></img>
            <img
              className="object-contain w-16 h-16 lg:hidden"
              src={"/logo3.png"}
            ></img>
          </div>
          <div
            className={` items-center gap-8 hidden xl:flex text-${
              props.bg === "white" ? "gray-800" : "white"
            } font-medium  `}
          >
            <div className="flex items-center justify-center gap-1 whitespace-nowrap group relative">
              <Link className="z-20" href="#">
                About Us
              </Link>
              <IoIosArrowDown></IoIosArrowDown>
              <div className=" bg-transparent hidden group-hover:block hover:block top-8 absolute transition-all duration-300 animate-drop group-hover:top-2 left-0 py-8  ">
                <ul className="text-gray-400 font-medium flex flex-col gap-6 group  bg-white px-6 py-6 rounded-lg shadow-xl">
                  <li className="hover:text-hcolor block">
                    <Link href="#">About Tech Towers</Link>
                  </li>
                  <li className="hover:text-hcolor block">
                    <Link href="#">Outsourcing in Germany</Link>
                  </li>
                  <li className="hover:text-hcolor block">
                    <Link href="#">Meet our team</Link>
                  </li>
                  <li className="hover:text-hcolor">
                    <Link href="#">Careers</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 group relative ">
              <Link className="z-20" href="#">
                Services
              </Link>
              <IoIosArrowDown></IoIosArrowDown>
              <div className=" bg-transparent hidden group-hover:block hover:block top-8 absolute transition-all duration-300 animate-drop group-hover:top-2 left-0 py-8 w-max ">
                <ul className="text-gray-400 font-medium flex flex-col gap-6 group  bg-white px-6 py-6 rounded-lg shadow-xl">
                  <li className="hover:text-hcolor block">
                    <Link href="#">Custom software development</Link>
                  </li>
                  <li className="hover:text-hcolor block">
                    <Link href="#">Dedicated Development Teams</Link>
                  </li>
                  <li className="hover:text-hcolor block">
                    <Link href="#">
                      Scale Up Your Software Development Team
                    </Link>
                  </li>
                  <li className="hover:text-hcolor">
                    <Link href="#">Mobile App Development</Link>
                  </li>
                  <li className="hover:text-hcolor">
                    <Link href="#">Software Project Rescue</Link>
                  </li>
                  <li className="hover:text-hcolor">
                    <Link href="#">Small Business & Startups</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Link href="#">Locations</Link>
            </div>
            <div className="flex items-center justify-center gap-1 group relative">
              <Link className="z-20" href="#">
                Expertise
              </Link>
              <IoIosArrowDown></IoIosArrowDown>
              <div className=" bg-transparent hidden group-hover:block hover:block top-8 absolute transition-all duration-300 animate-drop group-hover:top-2 left-0 py-8 w-max ">
                <ul className="text-gray-400 font-medium flex flex-col gap-6 group  bg-white px-6 py-6 rounded-lg shadow-xl ">
                  <li className="hover:text-hcolor block">
                    <Link href="#">Core Technologies</Link>
                  </li>
                  <li className="hover:text-hcolor block">
                    <Link href="#">Node.js Development</Link>
                  </li>
                  <li className="hover:text-hcolor block">
                    <Link href="#">AngularJS Development</Link>
                  </li>
                  <li className="hover:text-hcolor">
                    <Link href="#">React.js Development</Link>
                  </li>
                  <li className="hover:text-hcolor">
                    <Link href="#">.NET Development</Link>
                  </li>
                  <li className="hover:text-hcolor">
                    <Link href="#">PHP Development</Link>
                  </li>
                  <li className="hover:text-hcolor">
                    <Link href="#">Ruby On Rails Development</Link>
                  </li>
                  <li className="hover:text-hcolor">
                    <Link href="#">Healthcare Software Development</Link>
                  </li>
                  <li className="hover:text-hcolor">
                    <Link href="#">
                      Software Solutions For <br></br>The Automotive Industry
                    </Link>
                  </li>
                  <li className="hover:text-hcolor">
                    <Link href="#">CRM Solutions</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Link href="#">Clients</Link>
            </div>
            <div className="flex items-center justify-center gap-1 group relative">
              <Link className="z-20" href="#">
                Resources
              </Link>
              <IoIosArrowDown></IoIosArrowDown>
              <div className=" bg-transparent hidden group-hover:block hover:block top-8 absolute transition-all duration-300 animate-drop group-hover:top-2 left-0 py-8 w-max ">
                <ul className="text-gray-400 font-medium flex flex-col gap-6 group  bg-white px-6 py-6 rounded-lg shadow-xl">
                  <li className="hover:text-hcolor block">
                    <Link href="#">Outsourcing</Link>
                  </li>
                  <li className="hover:text-hcolor block">
                    <Link href="#">Development</Link>
                  </li>
                  <li className="hover:text-hcolor block">
                    <Link href="#">Technology</Link>
                  </li>
                  <li className="hover:text-hcolor">
                    <Link href="#">Process</Link>
                  </li>
                  <li className="hover:text-hcolor">
                    <Link href="#">Business</Link>
                  </li>
                  <li className="hover:text-hcolor">
                    <Link href="#">Projects</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Link href="#">Rates</Link>
            </div>
            <div className="flex items-center justify-center bg-primary px-6 py-2 whitespace-nowrap text-white rounded-full font-medium">
              <Link href="#">Contact Us</Link>
            </div>
          </div>
          {!isOpen && (
            <div onClick={openModal} className="xl:hidden cursor-pointer">
              <GiHamburgerMenu
                className={`${
                  props.bg === "white" ? "text-primary " : "text-white"
                } text-2xl `}
              ></GiHamburgerMenu>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
