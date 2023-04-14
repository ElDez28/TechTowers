import { useState } from "react";
import CountUp from "react-countup";

const Counter = (props) => {
  const [seen, setSeen] = useState(false);

  return (
    <div className="flex gap-3 items-top justify-center">
      <div className="text-4xl text-primary font-bold">{props.icon}</div>
      <div className="text-left">
        <span className="text-4xl font-bold text-gray-600">
          {!seen && props.inView && (
            <CountUp
              start={0}
              end={props.count}
              duration={2}
              onEnd={() => setSeen(true)}
            ></CountUp>
          )}
          {seen && props.count}
        </span>
        <p>
          <span>{props.title}</span>
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Counter;
