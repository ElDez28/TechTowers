import { BiCheckDouble } from "react-icons/bi";
const Value = ({ text, title }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-2 items-center">
        <BiCheckDouble color="#3498db" fontSize="26px"></BiCheckDouble>
        <h5 className="font-semibold text-lg">{title}</h5>
      </div>
      <div className="text-left">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Value;
