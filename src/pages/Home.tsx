import { useState, useEffect } from "react";
import "../styles/home.css";
import GooeyText from "../components/GooeyText";
import { site } from "../content/site";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img4 from "../assets/img4.jpg";

const heroImages = [img1, img2, img4];
const SLIDE_INTERVAL = 4000;

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home">
      <div className="hero">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className="hero-slide"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === activeIndex ? 1 : 0,
            }}
          />
        ))}
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1>{site.name.toUpperCase()}</h1>
          <p className="hero-subtitle">{site.tagline}</p>

          <GooeyText
            text={site.heroTaglines[activeIndex]}
            morphTime={1}
            className="hero-tagline-wrapper"
            textClassName="hero-tagline"
          />

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Contact Us
            </a>
            <a href="#products" className="btn btn-secondary">
              View Products
            </a>
          </div>
        </div>
      </div>

      <div className="highlights">
        {site.highlights.map((item) => (
          <div className="highlight-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
