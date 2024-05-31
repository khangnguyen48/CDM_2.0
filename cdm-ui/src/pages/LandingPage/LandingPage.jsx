import NavBar from "./Sections/NavBar";
import Hero from "./Sections/Hero";
import Subcribe from "./Sections/Subcribe";
import Footer from "./Sections/Footer";
import About from "./Sections/About";
import "./index.css";

function LandingPage() {
  return (
    <div className="bg-white">
      <button className="x-auto" onClick={() => methodDoesNotExist()}>
        Click here to break!
      </button>
      <Hero />
      <About />
      <Subcribe />
      <Footer />
    </div>
  );
}

export default LandingPage;
