import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Companies from "./pages/Companies";
import Products from "./pages/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import MealtimeHero from "./components/MealtimeHero";
import VideoScrollHero from "./components/VideoScrollHero";
import MealtimeVideoHero from "./components/MealtimeVideoHero";
import ShuffleHero from "./components/ShuffleHero";

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1 — collage only */}
        <MealtimeHero />
        {/* 2 — video scroll hero */}
        <VideoScrollHero videoSrc="/videos/hero.mp4" />
        {/* 3 — combined collage + expanding video */}
        <MealtimeVideoHero videoSrc="/videos/hero.mp4" />
        {/* 4 — shuffle image grid */}
        <ShuffleHero />
        <Home />
        <About />
        <Companies />
        <Products />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
