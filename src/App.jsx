import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import GetHandle from "./components/GetHandle";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <GetHandle />
      <FeatureSection />
      <Footer />
    </div>
  );
}

export default App;
