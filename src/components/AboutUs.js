import AboutUsItemOne from "./AboutUsItemOne";
import AboutItemTwo from "./AboutItemTwo";
const AboutUs = ({ t }) => {
  return (
    <>
      <div className="max-w-[90rem] mx-auto lg:px-8 px-4  text-left "></div>
      <section className="py-24 text-gray-700">
        <div className="max-w-[90rem] mx-auto lg:px-8 px-4  text-left">
          <AboutUsItemOne t={t}></AboutUsItemOne>
          <AboutItemTwo t={t}></AboutItemTwo>
        </div>
      </section>
    </>
  );
};
export default AboutUs;
