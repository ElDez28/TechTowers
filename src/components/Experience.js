import React from "react";
import { useInView } from "react-intersection-observer";
import Header from "./Header";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsJournalRichtext } from "react-icons/bs";
import { BsAward } from "react-icons/bs";
import Counter from "./Counter";

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <section className=" border-b-2 py-24 ">
      <div className="max-w-[90rem] mx-auto  text-center px-4 lg:px-8">
        <Header title="OVER 12 YEARS EXPERIENCE IN SOFTWARE OUTSOURCING"></Header>
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mt-12">
          <div className="flex-1">
            <img className="object-cover" src="/counts-img.svg"></img>
          </div>
          <div
            ref={ref}
            className="grid grid-cols-1 gap-8  md:grid-cols-2 flex-2"
          >
            <Counter
              icon={<HiOutlineFaceSmile></HiOutlineFaceSmile>}
              title="Happy clients"
              text="consequuntur voluptas nostrum aliquid ipsam architecto ut."
              count={180}
              inView={inView}
            ></Counter>
            <Counter
              icon={<BsJournalRichtext></BsJournalRichtext>}
              title="Happy clients"
              text="consequuntur voluptas nostrum aliquid ipsam architecto ut."
              count={400}
              inView={inView}
            ></Counter>
            <Counter
              icon={<AiOutlineClockCircle></AiOutlineClockCircle>}
              title="Happy clients"
              text="consequuntur voluptas nostrum aliquid ipsam architecto ut."
              count={60}
              inView={inView}
            ></Counter>
            <Counter
              icon={<BsAward></BsAward>}
              title="Happy clients"
              text="consequuntur voluptas nostrum aliquid ipsam architecto ut."
              count={700}
              inView={inView}
            ></Counter>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
