import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
const Links = () => {
  return (
    <section className="pt-16 bg-[#041327] ">
      <div className="max-w-[90rem] mx-auto  px-4 lg:px-8 text-left md:text-center pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start ">
          <div className="flex flex-col gap-2 lg:flex-1 text-gray-200 text-left text-md">
            <div>
              <img className="h-[40px]" src="/logo2.png"></img>
            </div>
            <p>
              At Tech Towers, we're passionate about delivering customized
              software solutions that help our clients achieve their goals. Our
              founder and team lead holds a Master's degree in Computer Science
              from Germany, and our team of expert developers, designers,
              quality assurance specialists, and project managers has over 12
              years of experience in software development.
            </p>
          </div>
          <div className="flex flex-col gap-2  text-gray-200 w-full">
            <h5 className="pb-2 border-b-primary border-b-4 ">USEFUL LINKS</h5>
            <ul className="">
              <li className="flex gap-1 items-center border-b-[1px] border-b-lightblue py-2 group">
                <IoIosArrowForward className="text-primary"></IoIosArrowForward>
                <Link className="group-hover:text-primary text-sm" href="#">
                  Home
                </Link>
              </li>
              <li className="flex gap-1 items-center border-b-[1px] border-b-lightblue py-2 group">
                <IoIosArrowForward className="text-primary"></IoIosArrowForward>
                <Link className="group-hover:text-primary text-sm" href="#">
                  Privacy & Policy
                </Link>
              </li>
              <li className="flex gap-1 items-center border-b-[1px] border-b-lightblue py-2 group">
                <IoIosArrowForward className="text-primary"></IoIosArrowForward>
                <Link className="group-hover:text-primary text-sm" href="#">
                  Terms & Conditions
                </Link>
              </li>
              <li className="flex gap-1 items-center border-b-[1px] border-b-lightblue py-2 group">
                <IoIosArrowForward className="text-primary"></IoIosArrowForward>
                <Link className="group-hover:text-primary text-sm" href="#">
                  Legal Notice
                </Link>
              </li>
              <li className="flex gap-1 items-center border-b-[1px] border-b-lightblue py-2 group">
                <IoIosArrowForward className="text-primary"></IoIosArrowForward>
                <Link className="group-hover:text-primary text-sm" href="#">
                  Clients
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2  text-gray-200 w-full text-left ">
            <h5 className="pb-2 border-b-primary border-b-4 ">CONTACT US</h5>
            <p>
              <span className="font-semibold">Tech Towers </span>
              d.o.o Prijedor
            </p>
            <span>Petrovo b.b</span>
            <p>
              <span className="font-semibold">79101</span>
              Prijedor
            </p>
            <span className="font-bold">Bosnia and Herzegovina</span>
            <p>
              <span className="font-bold">Phone:</span>{" "}
              <a
                className="text-hcolor hover:text-lightblue"
                href={`tel:${+3874133154}`}
              >
                +3874133154
              </a>
            </p>
            <p>
              <span className="font-bold">Phone:</span>{" "}
              <a
                className="text-hcolor hover:text-lightblue"
                href={`tel:${+4917680190786}`}
              >
                +4917680190786
              </a>
            </p>
            <p>
              <span className="font-bold">Email: </span>
              <a href={`mailto:info@techtowers.com`}>info@techtowers.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="py-6 text-center text-gray-200 bg-[#161e29]">
        <span>© Copyright Tech Towers 2023. All Rights Reserved</span>
      </div>
    </section>
  );
};

export default Links;
