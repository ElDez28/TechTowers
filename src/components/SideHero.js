import { useEffect } from "react";
import Header from "./Header";
import { useInView } from "react-intersection-observer";
const SideHero = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      props.setBg("transparent");
    } else {
      props.setBg("white");
    }
  }, [inView]);
  return (
    <section className="py-12 bg-hcolor">
      <div
        ref={ref}
        className="max-w-[90rem] mx-auto lg:px-8 px-4  text-left py-48 "
      >
        <Header black={false} title={props.title}></Header>
        <p className="max-w-4xl text-center mx-auto text-gray-200 font-semibold ">
          We’re the backbone of thriving businesses. We worked with $1B+
          software firms and have a vetted Fortune 100 experience. We also
          assisted startups from idea to 1M+ in revenue.
        </p>
      </div>
    </section>
  );
};

export default SideHero;
