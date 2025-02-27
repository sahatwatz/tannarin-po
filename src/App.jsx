import { useState } from "react";
import Hero from "./components/Hero";
import "./App.css";
import Content from "./components/Content";
import SlideImage from "./components/SlideImage";
import Split from "./components/Split";
import Timeline from "./components/Timeline";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Content />
      <SlideImage />
      <Split />
      <Timeline />
      <Profile />
      <Footer />
    </>
  );
}

export default App;
