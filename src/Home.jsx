import { useState } from "react";

export default function Home() {
  //let name = "Mario";

  const [name, setName] = useState("Mario");
  const [Age, setAge] = useState("23");

  const handleClick = () => {
    setName("John");
    setAge(30);
  };

  const handleClickAgain = (name) => {
    console.log("hello " + name);
  };

  return (
    <div className="Home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <p>
        {name} is {Age} years old
      </p>
      <button
        onClick={() => {
          handleClickAgain("Mario");
        }}>
        Click me again
      </button>
    </div>
  );
}
