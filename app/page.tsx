"use client"
import HomeComponent from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Faq from "./components/Faq";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <HomeComponent/>
    <About/>
    <Services/>
    <Resume/>
    <Faq/>
    <Portfolio/>
    <Contact/>
    </>
  );
}
