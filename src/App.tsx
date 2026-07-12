import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import WhoWeAre from "./components/WhoWeAre";
import Companies from "./pages/Companies";
import Products from "./pages/Products";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <WhoWeAre />
        <Companies />
        <Products />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
