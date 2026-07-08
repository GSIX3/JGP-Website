import { useEffect, useState } from "react";
import "../styles/navbar.css";
import { site } from "../content/site";
import logo from "../assets/jgp_logo.png";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "companies", label: "Companies" },
  { id: "products", label: "Products" },
  { id: "why-us", label: "Why Us" },
] as const;

type SectionId = (typeof NAV_LINKS)[number]["id"];

function getActiveSection(navHeight: number): SectionId {
  // the last section can be shorter than the viewport, so it may never reach
  // the probe line — treat reaching the bottom of the page as being on it
  const scrollBottom = window.innerHeight + window.scrollY;
  if (scrollBottom >= document.documentElement.scrollHeight - 2) {
    return NAV_LINKS[NAV_LINKS.length - 1].id;
  }

  const probeLine = navHeight + 24;
  let current: SectionId = "home";

  for (const { id } of NAV_LINKS) {
    const section = document.getElementById(id);
    if (section && section.getBoundingClientRect().top <= probeLine) {
      current = id;
    }
  }

  return current;
}

export default function Navbar() {
  const [activeId, setActiveId] = useState<SectionId>("home");

  useEffect(() => {
    const nav = document.querySelector("nav");

    const updateActive = () => {
      const navHeight = nav?.getBoundingClientRect().height ?? 0;
      setActiveId(getActiveSection(navHeight));
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <nav
      className={`navbar ${activeId === "home" ? "navbar--hero" : ""}`.trim()}
      aria-label="Main navigation"
    >
      <a href="#home" className="navbar-brand">
        <img
          src={logo}
          alt={site.name}
          className="navbar-logo-img"
        />
      </a>
      <ul className="navbar-links">
        {NAV_LINKS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeId === id ? "active" : undefined}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
