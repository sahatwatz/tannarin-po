import { useState } from "react";
import Hero from "./components/Hero";
import projectBox from "./components/Content";
import "./App.css";
import Content from "./components/Content";
import SlideImage from "./components/SlideImage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Content />
      <SlideImage />
    </>
  );
}

export default App;
