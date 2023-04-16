import { BsCodeSlash } from "react-icons/bs";
import { BsPersonBoundingBox } from "react-icons/bs";
import { BsEasel } from "react-icons/bs";

const Services = ({ t, locale }) => {
  return (
    <section className="pb-24 ">
      <div className="max-w-[90rem] mx-auto mt-24 text-center  ">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-1 w-12 bg-primary"></div>
          <h2 className="text-4xl text-center font-bold text-gray-800">
            {t("services")}
          </h2>
          <div className="h-1 w-12 bg-primary"></div>
        </div>
        <p className="text-lg mb-12 px-8">
          Laborum repudiandae omnis voluptatum consequatur mollitia ea est
          voluptas ut
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4 lg:px-8 max-h-max">
          <div className=" rounded-lg group relative xs:text-xs sm:text-base  text-base lg:text-base ">
            <div className="overflow-hidden rounded-2xl  ">
              <img
                src="/services/services-1.jpg"
                alt="People in office"
                className="w-full object-cover group-hover:scale-125 transition-all duration-700"
              ></img>
            </div>
            <div
              className={`${
                locale === "en" ? "md:h-[520px]" : "md:h-[610px] lg:h-[590px]"
              }   w-[85%]  shadow-lg  mx-auto bg-white bg-opacity-90 relative -mt-28 px-4 flex flex-col justify-between gap-4  pb-12 rounded-2xl`}
            >
              <div className="-mt-10 h-20 w-20 mx-auto rounded-full flex  items-center justify-center text-3xl bg-primary group-hover:bg-white text-white group-hover:text-primary  border-white border-8 group-hover:border-primary group-hover:border-[3px] transition-all ease-in duration-300">
                <BsCodeSlash></BsCodeSlash>
              </div>
              <div className="flex flex-col gap-2">
                <h3
                  className={`text-gray-800  group-hover:text-primary font-bold ${
                    locale === "en"
                      ? "text-xl lg:text-2xl"
                      : "text-lg lg:text-xl"
                  } `}
                >
                  {t("service_1_h")}
                </h3>
                <p>{t("service_1")}</p>
              </div>
              <button className="bg-primary text-white py-3 rounded-full w-max mx-auto px-8">
                CONTACT US TODAY!
              </button>
            </div>
          </div>
          <div className=" rounded-lg group relative xs:text-xs sm:text-base  text-base lg:text-base ">
            <div className="overflow-hidden rounded-2xl  ">
              <img
                src="/services/services-2.jpg"
                alt="Person typing on their laptop"
                className="w-full object-cover group-hover:scale-125 transition-all duration-700"
              ></img>
            </div>
            <div
              className={`${
                locale === "en" ? "md:h-[520px]" : "md:h-[610px] lg:h-[590px]"
              }   w-[85%]  shadow-lg  mx-auto bg-white bg-opacity-90 relative -mt-28 px-4 flex flex-col justify-between gap-4  pb-12 rounded-2xl`}
            >
              <div className="-mt-10 h-20 w-20 mx-auto rounded-full flex  items-center justify-center text-3xl bg-primary group-hover:bg-white text-white group-hover:text-primary  border-white border-8 group-hover:border-primary group-hover:border-[3px] transition-all ease-in duration-300">
                <BsPersonBoundingBox></BsPersonBoundingBox>
              </div>
              <div className="flex flex-col gap-2">
                <h3
                  className={`text-gray-800  group-hover:text-primary font-bold ${
                    locale === "en"
                      ? "text-xl lg:text-2xl"
                      : "text-lg lg:text-xl"
                  } `}
                >
                  {t("service_2_h")}
                </h3>
                <p>{t("service_2")}</p>
              </div>
              <button className="bg-primary text-white py-3 rounded-full w-max mx-auto px-8">
                CONTACT US TODAY!
              </button>
            </div>
          </div>
          <div className=" rounded-lg group relative xs:text-xs sm:text-base  text-base lg:text-base ">
            <div className="overflow-hidden rounded-2xl  ">
              <img
                src="/services/services-3.jpg"
                className="w-full object-cover group-hover:scale-125 transition-all duration-700"
                alt="Person looking in their laptop"
              ></img>
            </div>
            <div
              ref={inputRef}
              className={`${
                locale === "en" ? "md:h-[520px]" : "md:h-[610px] lg:h-[590px]"
              }   w-[85%]  shadow-lg  mx-auto bg-white bg-opacity-90 relative -mt-28 px-4 flex flex-col justify-between gap-4  pb-12 rounded-2xl`}
            >
              <div className="-mt-10 h-20 w-20 mx-auto rounded-full flex  items-center justify-center text-3xl bg-primary group-hover:bg-white text-white group-hover:text-primary  border-white border-8 group-hover:border-primary group-hover:border-[3px] transition-all ease-in duration-300">
                <BsEasel></BsEasel>
              </div>
              <div className="flex flex-col gap-2 ">
                <h3
                  className={`text-gray-800  group-hover:text-primary font-bold ${
                    locale === "en"
                      ? "text-xl lg:text-2xl"
                      : "text-lg lg:text-xl"
                  } `}
                >
                  {t("service_3_h")}
                </h3>
                <p>{t("service_3")}</p>
              </div>
              <button className="bg-primary text-white py-3 rounded-full w-max mx-auto px-8">
                CONTACT US TODAY!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
