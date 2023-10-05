import "./App.css";
import Navbar from "./components/Navbar";
import HeaderOne from "./components/HeaderOne";
import HeaderTwo from "./components/HeaderTwo";
import CarouselSlider from "./components/CarouselSlider";
import VideoSection from "./components/VideoSection";
import IconHolder from "./components/IconHolder";
import GridSection from "./components/GridSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <IconHolder />

      <HeaderOne />
      <HeaderTwo />
      <Navbar />
      <CarouselSlider />
      {/* video section the athanium  */}
      <VideoSection />
      {/* grid containing 3 rows  */}
      <GridSection />
      <Footer />
    </div>
  );
}

export default App;
