import React from "react";
import Header from "./Header";
import Carousel from "react-multi-carousel";
import CustomDot from "./CustomDot";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1280,
    },
    items: 2,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 640,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1280,
      min: 640,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
};
const SlideItem = ({ role, name, text, image }) => {
  return (
    <div className="card-wrapper lg:px-8 px-4  flex lg:h-[330px] ">
      <div className="hidden md:block -mr-[4.5rem] mt-12 z-20 rounded-lg border-white border-8 min-h-[128px]  min-w-[128px] max-h-[128px] max-w-[128px] ">
        <img className="w-full object-cover rounded-lg" src={image}></img>
      </div>
      <div className="card px-12 py-12 lg:pl-24 shadow-lg bg-white text-left flex flex-col gap-6">
        <div className=" md:hidden   z-20  w-32 h-max ">
          <img className="w-full object-cover rounded-lg" src={image}></img>
        </div>
        <div>
          <h3 className="w-full font-bold text-lg">{name}</h3>
          <span className="w-full ">{role}</span>

          <p className={` leading-relaxed min-w-full quote mt-6`}>{text}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = (props) => {
  return (
    <>
      <section className="py-24 bg-[#edf2f5]">
        <div className="max-w-[90rem] mx-auto   text-center">
          <Header title="TESTIMONIALS"></Header>
          <p className="mb-12">Why do customers praise about Tech Towers?</p>

          <div className="slide-container">
            <div className="slide-content ">
              <Carousel
                className="pb-24"
                autoPlay={true}
                additionalTransfrom={0}
                arrows={false}
                customDot={<CustomDot active={false} />}
                ssr
                deviceType={props.deviceType}
                autoPlaySpeed={6000}
                centerMode={false}
                containerClass="carousel-container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover={false}
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={true}
                showDots={true}
                renderDotsOutside={false}
                responsive={responsive}
                rewind={true}
                rewindWithAnimation={true}
                rtl={false}
                shouldResetAutoplay
                sliderClass=""
                slidesToSlide={1}
                swipeable
                transitionDuration={0}
              >
                <SlideItem
                  image="/testimonials/testimonials-1.jpg"
                  name="Saul Goodman"
                  role="CEO & Founder"
                  text="
             
            
                  TechTowers continues to provide us with first class web development services. I have found their
                  team to be very responsive to our needs. Not only do they provide quality programming but they are
                  also a very valua...
                  
                  
                  
                  "
                ></SlideItem>
                <SlideItem
                  image="/testimonials/testimonials-2.jpg"
                  name="William Smith"
                  role="Store Owner"
                  text=" We are always looking for ways to incorporate technology into the
            Desert Botanical Garden experience and when Tech Towers presented
            the opportunity to develop experience based app, we jumped at the
            chance. Their team..."
                ></SlideItem>
                <SlideItem
                  image="/testimonials/testimonials-4.jpg"
                  name="Matt Brandon"
                  role="Freelancer"
                  text="
                  We needed a strong technology partner to deliver affordable and reliable web development services
                  for our client base. We found that Tech Towers meets our needs and our client’s needs for web
                  development...
                  "
                ></SlideItem>
                <SlideItem
                  image="/testimonials/testimonials-3.jpg"
                  name="Noah Brown"
                  role="Designer"
                  text="
             
                  We are very pleased with the work Tech Towers has done for us on a mission critical project. Their
                  work is competent, timely, and very cost effective. I have no hesitation in recommending Bogdan and
                  his team...
                  
                  "
                ></SlideItem>
                <SlideItem
                  image="/testimonials/testimonials-5.jpg"
                  name="John Larson"
                  role="Entrepreneur"
                  text="
             
            
                  They are very creative and continually challenged me with new ideas. They are easy to work with –
                  very organized. With my previous company I outsourced the development work to a firm in Germany...
                  
                  
                  "
                ></SlideItem>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonials;
