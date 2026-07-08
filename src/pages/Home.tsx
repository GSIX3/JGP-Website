import { useState, useEffect } from "react";
import { preload } from "react-dom";
import "../styles/home.css";
import GooeyText from "../components/GooeyText";
import { site } from "../content/site";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img4 from "../assets/img4.webp";

const heroImages = [img1, img2, img4];
const SLIDE_INTERVAL = 4000;

// the first slide is the LCP image — start fetching it before React renders
preload(heroImages[0], { as: "image", fetchPriority: "high" });

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
          <div className="hero-copy">
            <h1 className="hero-title">
              <span className="hero-title-static">{site.name}</span>
              <span className="hero-title-rotate">
                <GooeyText
                  text={site.heroTaglines[activeIndex]}
                  morphTime={1}
                  className="hero-tagline-wrapper"
                  textClassName="hero-tagline"
                />
              </span>
            </h1>

            <p className="hero-description">{site.shortDescription}</p>
          </div>

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
    </section>
  );
}
