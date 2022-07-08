import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Announcement from "./components/Announcement";
import Join from "./components/Join";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Soon from "./components/Soon";
import Teasure from "./components/Teasure";
import Profile from "./components/Profile";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Faq from "./components/Faq";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Announcement />
      <Intro />
      <Teasure />
      <Soon />
      {/* <Profile /> */}
      <Roadmap />
      <Team />
      <Faq />
      <Join />
      <Footer />
    </>
  );
}

export default App;
