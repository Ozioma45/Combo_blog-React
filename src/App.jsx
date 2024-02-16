import "./App.css";

function App() {
  const title = "welcomw to the new blog";
  const likes = 50;
  /* const person = { name: "ozioma", age: 30 }; */
  const link = "www.google.com";

  return (
    <>
      <div className="content">
        <h1>App Component</h1>
        <h1>{title}</h1>
        <p>Likes {likes} times</p>
        {/*  <p>{person}</p> */}

        <p>{10}</p>
        <p>{"Hello world"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Google link</a>
      </div>
    </>
  );
}

export default App;
