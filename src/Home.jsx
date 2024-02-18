export default function Home() {
  const handleClick = () => {
    console.log("Hello World");
  };

  const handleClickAgain = (name) => {
    console.log("hello " + name);
  };

  return (
    <div className="Home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={() => {
          handleClickAgain("Mario");
        }}>
        Click me again
      </button>
    </div>
  );
}
