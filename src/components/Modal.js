import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
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
      className=" bg-transparent overflow-hidden  shadow-xl top-8 transition-all duration-300 rounded-lg  py-8  "
    >
      <ul className="text-gray-400 font-medium flex flex-col gap-6 group  bg-white px-6 py-6 rounded-lg ">
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
        className="flex w-full justify-between items-center cursor-pointer text-lg text-gray-400 font-medium"
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
    <Modal
      className="xl:hidden"
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        className=" min-w-[80%] focus:outline-none relative rounded-lg h-[90%]"
        sx={style}
      >
        <div
          onClick={handleClose}
          className="absolute -top-8 -right-8 cursor-pointer"
        >
          <IoIosCloseCircleOutline
            fontSize="26px"
            color="white"
          ></IoIosCloseCircleOutline>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Item
            title="About Us"
            icon
            links={[
              "About Us",
              "Outsourcing in Germany",
              "Meet our team",
              "Careers",
            ]}
          ></Item>
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
      </Box>
    </Modal>
  );
};

export default BasicModal;
