import React, { useEffect, useState } from "react";
import Header from "./Header";
import AutoChangingHeader from "./AutoChangingHeader";
import WhyChooseParagraph from "./WhyChooseParagraph";

const WhyChose = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      index === 4 ? setIndex(0) : setIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="pb-24 border-b mt-24">
      <div className="max-w-[90rem] mx-auto px-8  text-center text-gray-700">
        <Header title="WHY CHOOSE TECH TOWERS"></Header>
        <p className="max-w-6xl mx-auto mb-16">
          At Tech Towers, we are committed to providing our clients with the
          highest quality software development services. Here are some reasons
          why you should choose us for your next project:
        </p>
        <div className="flex  justify-center flex-col lg:flex-row gap-12">
          <div className="flex items-center w-full lg:w-max">
            <div className="flex font-normal text-lg flex-col gap-4 w-full  items-center justify-center">
              <AutoChangingHeader
                onClick={() => setIndex(0)}
                text="Experienced Developers"
                index={0}
                changingIndex={index}
              ></AutoChangingHeader>
              <AutoChangingHeader
                onClick={() => setIndex(1)}
                text="German Standards"
                index={1}
                changingIndex={index}
              ></AutoChangingHeader>
              <AutoChangingHeader
                onClick={() => setIndex(2)}
                text="Cost Effective"
                index={2}
                changingIndex={index}
              ></AutoChangingHeader>
              <AutoChangingHeader
                onClick={() => setIndex(3)}
                text="Time Zone Advantage"
                index={3}
                changingIndex={index}
              ></AutoChangingHeader>
              <AutoChangingHeader
                onClick={() => setIndex(4)}
                text="Multilingual Team"
                index={4}
                changingIndex={index}
              ></AutoChangingHeader>
            </div>
            <div className="bg-[#9ec8ed] h-full w-0.5 -ml-0.5 -z-10 hidden md:block"></div>
          </div>
          <div className="flex-1 transition-all duration-1000">
            {index === 0 && <WhyChooseParagraph index={0}></WhyChooseParagraph>}
            {index === 1 && <WhyChooseParagraph index={1}></WhyChooseParagraph>}
            {index === 2 && <WhyChooseParagraph index={2}></WhyChooseParagraph>}
            {index === 3 && <WhyChooseParagraph index={3}></WhyChooseParagraph>}
            {index === 4 && <WhyChooseParagraph index={4}></WhyChooseParagraph>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChose;
