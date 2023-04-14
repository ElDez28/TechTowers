import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
import ConfirmationModal from "./ConfirmationModal";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  transition: {
    ease: "easeInOut",
    duration: 1,
  },
};
const List = ({ links }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className=" bg-transparent  shadow-xl top-8 transition-all duration-300 rounded-lg  py-8  "
    >
      <ul className="text-gray-400 font-medium flex flex-col gap-6 group h-max bg-white px-6 py-6 rounded-lg ">
        {links.map((link, i) => {
          return (
            <li key={i} className="hover:text-hcolor block">
              <Link href="#">{link}</Link>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};
const Item = ({ title, icon, links }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div
        className="flex w-full justify-between items-center cursor-pointer text-lg text-gray-400 font-medium "
        onClick={handleClick}
      >
        <span>{title}</span>

        {icon && (
          <div
            className={`${
              open ? "rotate-180" : ""
            } transition-all duration-500`}
          >
            <MdOutlineKeyboardArrowDown
              fontSize="22px"
              color=""
            ></MdOutlineKeyboardArrowDown>
          </div>
        )}
      </div>
      {icon && open && <List links={links}></List>}
    </>
  );
};
const BasicModal = ({ isOpen, handleClose }) => {
  return (
    <ConfirmationModal open={isOpen} handleClose={handleClose}>
      <div className="flex flex-col gap-4 w-full px-10 py-12 h-full">
        <Link
          className="flex w-full justify-between items-center cursor-pointer text-lg text-gray-400 font-medium"
          href="/about"
        >
          About
        </Link>
        <Item
          title="Services"
          icon
          links={[
            "Custom software development",
            "Dedicated Development Teams",
            "Scale Up Your Software Development Team",
            "Mobile App Development",
            "Software Project Rescue",
            "Small Business & Startups",
          ]}
        ></Item>
        <Item
          title="Expertise"
          icon
          links={[
            "Node.js Development",
            "AngularJS Development",
            "React.js Development",
            ".NET Development",
            "PHP Development",
            "Ruby On Rails Development",
            "Healthcare Software Development",
            "Software Solutions For The Automotive Industry",
          ]}
        ></Item>
        <Item title="Clients"></Item>
        <Item
          title="Resources"
          icon
          links={[
            "Outsourcing",
            "Development",
            "Technology",
            "Process",
            "Business",
            "Projects",
          ]}
        ></Item>
        <Item title="Rates"></Item>
        <Item title="Contact Us"></Item>
      </div>
    </ConfirmationModal>
  );
};

export default BasicModal;
