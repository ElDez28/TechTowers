import { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const DynamicModal = dynamic(() => import("./Modal"));

export const Navbar = ({ bg, t }) => {
  const { locale, push, asPath } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [lng, setLng] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const changeLocale = (l) => {
    push(asPath, asPath, { locale: l });
  };

  return (
    <>
      {isOpen && (
        <DynamicModal isOpen={isOpen} handleClose={closeModal}></DynamicModal>
      )}

      <nav
        className={`${
          bg === "white"
            ? "bg-gray-100 shadow-lg transition-shadow delay-150"
            : "bg-transparent"
        } fixed w-full z-30 transition-colors duration-300`}
      >
        <div className="flex items-center justify-between p-6  max-w-[90rem] mx-auto">
          <Link href="/" className="2xl:w-60 w-40  ">
            <img
              className="object-contain  hidden lg:inline-block -mb-2 -mt-2 "
              src={bg === "white" ? "/logo.png" : "/logo2.png"}
              alt="Tech Towers Logo with text"
            ></img>
            <img
              className="object-contain w-12 h-12 -mb-2 -mt-2 lg:hidden"
              src={"/logo3.png"}
              alt="Tech Towers Logo without text"
            ></img>
          </Link>
          <div
            className={` items-center gap-8 hidden xl:flex text-${
              bg === "white" ? "gray-800" : "white"
            } font-medium  `}
          >
            <div className="flex items-center justify-center gap-1 whitespace-nowrap group relative">
              <Link className="z-20" href="/about">
                {t("about_us")}
              </Link>
            </div>
            <div className="flex items-center justify-center gap-1 group relative ">
              <Link className="z-20" href="#">
                {t("services")}
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
              <Link href="#"> {t ? t("locations") : "New Text"}</Link>
            </div>
            <div className="flex items-center justify-center gap-1 group relative">
              <Link className="z-20" href="#">
                {t ? t("expertise") : "New Text"}
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
              <Link href="#"> {t ? t("clients") : "New Text"}</Link>
            </div>
            <div className="flex items-center justify-center gap-1 group relative">
              <Link className="z-20" href="#">
                {t ? t("resources") : "New Text"}
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
              <Link href="#"> {t ? t("rates") : "New Text"}</Link>
            </div>
            <div className="flex items-center justify-center bg-primary px-6 py-2 whitespace-nowrap text-white rounded-full font-medium">
              <Link href="#"> {t ? t("contact_us") : "New Text"}</Link>
            </div>
            <div
              onClick={() => setLng((prev) => !prev)}
              className="flex gap-1 border-[1px] rounded-lg px-2 py-1 items-center cursor-pointer relative"
            >
              <Image
                alt="flag"
                className="h-[13px]"
                src={
                  locale === "en" ? "/flags/us-flag.jpg" : "/flags/ge-flag.jpg"
                }
                width={20}
                height={10}
              ></Image>
              <span>{locale}</span>
              {lng && (
                <div className="absolute flex flex-col gap-1 top-9 px-2 py-2 justify-center left-0 bg-lightblue w-full">
                  <div
                    onClick={() => changeLocale("en")}
                    className=" flex w-full justify-between items-center"
                  >
                    <Image
                      alt="flag"
                      className="h-[13px]"
                      src="/flags/us-flag.jpg"
                      width={20}
                      height={10}
                    ></Image>
                    <span>en</span>
                  </div>
                  <div
                    onClick={() => changeLocale("de")}
                    className=" flex w-full justify-between items-center"
                  >
                    <Image
                      alt="flag"
                      className="h-[13px]"
                      src="/flags/ge-flag.jpg"
                      width={20}
                      height={10}
                    ></Image>
                    <span>de</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          {!isOpen && (
            <div onClick={openModal} className="xl:hidden block cursor-pointer">
              <GiHamburgerMenu
                className={`${
                  bg === "white" ? "text-primary " : "text-white"
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
