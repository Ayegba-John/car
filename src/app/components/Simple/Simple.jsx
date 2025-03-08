import { useState } from "react";

const Simple = () => {
  const [inputValue, setInputValue] = useState("James");
  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="write something..." onChange={onChange} />
      {inputValue}

      <div>
        <input placeholder="write something..." onChange={onChange} />
        {inputValue}
      </div>
    </div>
  );
};

export default Simple;
