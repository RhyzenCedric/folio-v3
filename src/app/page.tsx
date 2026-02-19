import CallToAction from "./components/CallToAction";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";


export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <CallToAction/>
      <Footer/>
    </main>
  );
}
