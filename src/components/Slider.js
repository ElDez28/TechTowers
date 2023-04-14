import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
const Slider = (props) => {
  return (
    <section className="border-b-2 pb-4 shadow-sm">
      <div className=" w-full max-w-[90rem] mx-auto   ">
        <Carousel
          autoPlay={true}
          additionalTransfrom={0}
          arrows={false}
          ssr
          deviceType={props.deviceType}
          autoPlaySpeed={2000}
          centerMode={false}
          className=""
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
          showDots={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 7,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 640,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 640,
              },
              items: 4,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={true}
          rewindWithAnimation={true}
          rtl={false}
          shouldResetAutoplay
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className=" flex items-center justify-center">
            <Image
              src="/clients/client-1.png"
              className=" w-[70%] object-cover mr-10"
              width={200}
              height={120}
              alt="client-logo-1"
            ></Image>
          </div>
          <div className=" flex items-center justify-center">
            <Image
              src="/clients/client-2.png"
              className=" w-[70%] object-cover mr-10"
              width={200}
              height={100}
              alt="client-logo-2"
            ></Image>
          </div>
          <div className=" flex items-center justify-center">
            <Image
              src="/clients/client-3.png"
              className=" w-[70%] object-cover mr-10"
              width={200}
              height={100}
              alt="client-logo-3"
            ></Image>
          </div>
          <div className=" flex items-center justify-center">
            <Image
              src="/clients/client-4.png"
              className=" w-[70%] object-cover mr-10"
              width={200}
              height={100}
              alt="client-logo-4"
            ></Image>
          </div>
          <div className=" flex items-center justify-center">
            <Image
              src="/clients/client-5.png"
              className=" w-[70%] object-cover mr-10"
              width={200}
              height={100}
              alt="client-logo-5"
            ></Image>
          </div>
          <div className=" flex items-center justify-center">
            <Image
              src="/clients/client-6.png"
              className=" w-[70%] object-cover mr-10"
              width={200}
              height={100}
              alt="client-logo-6"
            ></Image>
          </div>
          <div className=" flex items-center justify-center">
            <Image
              src="/clients/client-7.png"
              className=" w-[70%] object-cover mr-10"
              width={200}
              height={100}
              alt="client-logo-7"
            ></Image>
          </div>
          <div className=" flex items-center justify-center">
            <Image
              src="/clients/client-8.png"
              className=" w-[70%] object-cover mr-10"
              width={200}
              height={100}
              alt="client-logo-8"
            ></Image>
          </div>
          <div className=" flex items-center justify-center">
            <Image
              src="/clients/client-9.png"
              className=" w-[70%] object-cover mr-10"
              width={200}
              height={100}
              alt="client-logo-9"
            ></Image>
          </div>
          <div className=" flex items-center justify-center">
            <Image
              src="/clients/client-11.png"
              className=" w-[70%] object-cover mr-10"
              width={200}
              height={100}
              alt="client-logo-11"
            ></Image>
          </div>
          <div className=" flex items-center justify-center">
            <Image
              src="/clients/client-12.png"
              className=" w-[70%]  object-cover mr-10"
              width={200}
              height={100}
              alt="client-logo-12"
            ></Image>
          </div>
          <div className=" flex items-center justify-center">
            <Image
              src="/clients/client-13.png"
              className=" w-[70%] object-cover mr-10"
              width={200}
              height={100}
              alt="client-logo-13"
            ></Image>
          </div>
          {/* <div className=" flex items-center justify-center">
            <img
              src="/clients/client-2.png"
              className=" w-[70%] object-cover mr-10"
            ></img>
          </div>
          <div className=" flex items-center justify-center">
            <img
              src="/clients/client-3.png"
              className=" w-[70%] object-cover mr-10"
            ></img>
          </div>
          <div className=" flex items-center justify-center">
            <img
              src="/clients/client-4.png"
              className=" w-[70%] object-cover mr-10"
            ></img>
          </div>
          <div className=" flex items-center justify-center">
            <img
              src="/clients/client-5.png"
              className=" w-[70%] object-cover mr-10"
            ></img>
          </div>
          <div className=" flex items-center justify-center">
            <img
              src="/clients/client-6.png"
              className=" w-[70%] object-cover mr-10"
            ></img>
          </div>
          <div className=" flex items-center justify-center">
            <img
              src="/clients/client-7.png"
              className=" w-[70%] object-cover mr-10"
            ></img>
          </div>
          <div className=" flex items-center justify-center">
            <img
              src="/clients/client-8.png"
              className=" w-[70%] object-cover mr-10"
            ></img>
          </div>
          <div className=" flex items-center justify-center">
            <img
              src="/clients/client-9.png"
              className=" w-[70%] object-cover mr-10"
            ></img>
          </div>
          <div className=" flex items-center justify-center">
            <img
              src="/clients/client-11.png"
              className=" w-[70%] object-cover mr-10"
            ></img>
          </div>
          <div className=" flex items-center justify-center">
            <img
              src="/clients/client-12.png"
              className=" w-[70%] object-cover mr-10"
            ></img>
          </div>
          <div className=" flex items-center justify-center">
            <img
              src="/clients/client-13.png"
              className=" w-[70%] object-cover mr-10"
            ></img>
          </div> */}
        </Carousel>
      </div>
    </section>
  );
};

export default Slider;
