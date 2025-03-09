import { useEffect } from "react";
import Hero from "./components/Hero";
import "./App.css";
import Content from "./components/Content";
import Services from "./components/Services";
import Split from "./components/Split";
import Timeline from "./components/Timeline";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopicService from "./components/TopicService";

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

      <Split />
      <Timeline />
      <Profile />
      <Footer />
    </>
  );
}

export default App;
