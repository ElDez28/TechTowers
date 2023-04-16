import { useState, useEffect } from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import emailSchema from "@/schemas/emailSchema";
import { sendContactForm } from "@/lib/sendEmail";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const DynamicErrorPopUp = dynamic(() => import("./ErrorPopUp"));
const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      type: "tween",
      duration: 1,
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};
const FlexItem = ({ title, elements }) => {
  return (
    <div className="flex flex-col gap-2 flex-1 mt-12 md:border-r-2  border-r-lightblue last:border-r-0 ">
      <h3 className="font-bold">{title}</h3>
      {elements.map((element, i) => {
        return <p key={i}>{element}</p>;
      })}
    </div>
  );
};
export const ContactUs = ({ main }) => {
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [validate, setValidate] = useState(false);
  const router = useRouter();
  const page =
    router.pathname === "/"
      ? "Home Page"
      : router.pathname === "/privacy_and_policy"
      ? "Privacy and Policy Page"
      : router.pathname === "/terms_and_conditions"
      ? "Terms and Conditions Page"
      : router.pathname === "legal_notice"
      ? "Legal Notice page"
      : router.pathname === "about"
      ? "About Page"
      : "";

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      const timeout = setTimeout(() => {
        setSuccess(false);
      }, 10000);

      () => {
        clearTimeout(timeout);
      };
    }
  }, [success]);

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    text: "",
  };

  const sendEmail = async (e) => {
    try {
      await sendContactForm({
        ...formik.values,
        page,
      });
      setSuccess(true);
    } catch (err) {
      setError(err);
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: validate,
    initialValues,
    validationSchema: emailSchema,
    onSubmit: sendEmail,
  });

  return (
    <section className={` ${main ? "pb-24" : "py-24"} bg-[#edf2f5]`}>
      {open && (
        <DynamicErrorPopUp
          open={open}
          handleClose={() => setOpen(false)}
          content={
            error?.response?.status === 429
              ? error?.response?.data
              : error?.response?.data?.message
          }
        ></DynamicErrorPopUp>
      )}
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-[90rem] mx-auto lg:px-8 px-4  text-center"
      >
        <Header title="CONTACT US"></Header>
        <p className="text-gray-500 font-bold italic -mt-4 mb-4">
          Contact TechTowers
        </p>
        {main && (
          <div className="flex w-full justify-between flex-col md:flex-row gap-2 mb-12">
            <FlexItem
              title="ADDRESS"
              elements={[
                "Tech Towers d.o.o Prijedor Petrovo b.b. 79101 Prijedor Bosnia and Herzegovina",
              ]}
            ></FlexItem>
            <FlexItem
              title="PHONE NUMBER"
              elements={["+4917680190786", "+387644133154"]}
            ></FlexItem>
            <FlexItem
              title="EMAIL"
              elements={["info@techtowers.com"]}
            ></FlexItem>
          </div>
        )}
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 ">
          <div className="flex justify-between gap-4 flex-col lg:flex-row">
            <div className="flex-1">
              <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                id="name"
                className={`w-full rounded-lg py-2 px-4 focus:outline-none font-medium border-2 text-gray-500 ${
                  formik.errors.name && formik.touched.name
                    ? "border-red-400"
                    : "border-gray-200 "
                }`}
                placeholder="Your name"
                type="text"
              ></input>
              <div className="h-2 text-red-500 text-xs text-left">{`${
                formik.errors.name && formik.touched.name
                  ? formik.errors.name
                  : ""
              }`}</div>
            </div>
            <div className="flex-1">
              <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                id="email"
                className={`w-full rounded-lg py-2 px-4 focus:outline-none font-medium border-2 text-gray-500 ${
                  formik.errors.email && formik.touched.email
                    ? "border-red-400"
                    : "border-gray-200 "
                }`}
                placeholder="Email"
                type="email"
              ></input>
              <div className="h-2 text-red-500 text-xs text-left">{`${
                formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : ""
              }`}</div>
            </div>
          </div>
          <div className="flex-1">
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.subject}
              className={`w-full rounded-lg py-2 px-4 focus:outline-none font-medium border-2 text-gray-500 ${
                formik.errors.subject && formik.touched.subject
                  ? "border-red-400"
                  : "border-gray-200 "
              }`}
              placeholder="Subject"
              id="subject"
            ></input>
            <div className="h-2 text-red-500 text-xs text-left">{`${
              formik.errors.subject && formik.touched.subject
                ? formik.errors.subject
                : ""
            }`}</div>
          </div>
          <div className="flex-1">
            <textarea
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.text}
              rows="5"
              id="text"
              placeholder="Your email"
              className={`w-full ${
                formik.errors.text && formik.touched.text
                  ? "border-red-400"
                  : "border-gray-200 "
              } rounded-lg py-4 px-4 resize-none border-2 focus:outline-none  font-medium text-gray-500`}
            ></textarea>
            <div className="h-2 text-red-500 text-xs text-left">{`${
              formik.errors.text && formik.touched.text
                ? formik.errors.text
                : ""
            }`}</div>
          </div>
          <button
            type="submit"
            onClick={() => setValidate(true)}
            // disabled={
            //   !formik.values.name ||
            //   !formik.values.email ||
            //   !formik.values.subject ||
            //   !formik.values.text
            // }
            className="py-3 px-8 bg-primary w-48 text-center flex justify-center items-center rounded-full  mx-auto text-gray-200 font-medium mt-4 disabled:bg-gray-400 transition-all duration-500"
          >
            {formik.isSubmitting ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-gray-200 animate-spin  fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </motion.div>

      {success ? (
        <div className="fixed bg-gradient-to-r from-[#129893] to-[#259e39] bottom-0 w-full text-center py-6 text-white text-semibold">
          <p>Your email has been sent!</p>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default ContactUs;
