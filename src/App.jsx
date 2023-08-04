import Footer from "./components/Footer";
import Hello from "./components/Hello";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hello />
      <AboutMe />
      <Timeline />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
