import { useEffect } from "react";
import Hero from "./components/Hero";
import "./App.css";
import Content from "./components/Content";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopicService from "./components/TopicService";
import TopicWorks from "./components/TopicWorks";
import Works from "./components/Works";
import TopicAbout from "./components/TopicAbout";
import About from "./components/About";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />

      <Hero />

      <TopicService />
      <Services />
      <Content />

      <TopicWorks />
      <Works />

      <TopicAbout />
      <About />

      <Footer />
    </>
  );
}

export default App;
