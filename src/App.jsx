import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  const title = "welcomw to the new blog";
  const likes = 50;
  /* const person = { name: "ozioma", age: 30 }; */
  const link = "www.google.com";

  return (
    <>
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </>
  );
}

export default App;
