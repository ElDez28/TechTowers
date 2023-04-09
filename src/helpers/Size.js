import React from "react";
const [size, setSize] = useState();
const inputRef = useRef();
useEffect(() => {
  setSize(inputRef.current.clientHeight);
}, []);
console.log(size);
const Size = () => {
  return <div>Size</div>;
};

export default Size;
