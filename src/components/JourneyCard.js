import { MdKeyboardArrowRight } from "react-icons/md";
const JourneyCard = (props) => {
  return (
    <div className="flex flex-col justify-between  rounded-xl shadow-lg py-12 px-12 overflow-hidden relative group">
      <div className="bg-primary top-0 right-0 w-0 h-0 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full absolute -z-10 transition-all duration-300"></div>
      <div className="text-6xl text-primary group-hover:text-white transition-colors duration-700 mb-12 ">
        {props.icon}
      </div>
      <div className="flex flex-col mb-16 gap-6 text-left text-gray-800 group-hover:text-white transition-colors duration-700">
        <h3 className="text-2xl font-bold ">{props.title}</h3>
        <p className="leading-relaxed">{props.text}</p>
      </div>
      <div className="flex items-center justify-center border-primary border-2 py-3 text-primary group-hover:border-white group-hover:text-white transition-colors duration-700 px-4">
        <button>EXPLORE OUR SERVICES </button>
        <MdKeyboardArrowRight></MdKeyboardArrowRight>
      </div>
    </div>
  );
};

export default JourneyCard;
