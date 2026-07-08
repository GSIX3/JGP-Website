import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
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
        <Companies />
        <Products />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
