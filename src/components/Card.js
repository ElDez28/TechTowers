import { BsCodeSlash } from "react-icons/bs";
const Card = (props) => {
  return (
    <div className=" rounded-lg group relative xs:text-xs sm:text-base  text-base lg:text-base ">
      <div className="overflow-hidden rounded-2xl  ">
        <img
          src={props.image}
          className="w-full object-cover group-hover:scale-125 transition-all duration-700"
          alt="people_and_technologie"
        ></img>
      </div>
      <div className="w-[85%] h-[32rem] mx-auto bg-white bg-opacity-90 relative -mt-28 px-4 flex flex-col justify-between gap-6  pb-12 rounded-2xl">
        <div className="-mt-10 h-20 w-20 mx-auto rounded-full flex  items-center justify-center text-3xl bg-primary group-hover:bg-white text-white group-hover:text-primary  border-white border-8 group-hover:border-primary group-hover:border-[3px] transition-all ease-in duration-300">
          <BsCodeSlash></BsCodeSlash>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-800 group-hover:text-primary font-bold text-xl lg:text-2xl">
            {props.title}
          </h3>
          <p>{props.text}</p>
        </div>
        <button className="bg-primary text-white py-3 rounded-full w-max mx-auto px-8">
          CONTACT US TODAY!
        </button>
      </div>
    </div>
  );
};

export default Card;
