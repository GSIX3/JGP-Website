import "../styles/about.css";
import { site } from "../content/site";
import aboutImage from "../assets/img3.jpg";
import chairmanPhoto from "../assets/avatar/img10.jpg";

export default function About() {
  return (
    <section id="about" className="about-page">
      <h1>About Us</h1>
      <p className="about-subtitle">{site.about.subtitle}</p>

      <div className="about-content">
        <div className="about-main">
          <div className="about-text">
            {site.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <div className="about-timeline">
            {site.about.timeline.map((item) => (
              <div className="timeline-item" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-photos">
          <div className="about-chairman">
            <div className="about-chairman-photo">
              <img
                src={chairmanPhoto}
                alt="Chairman of JGP Marketing Services"
              />
            </div>
            <div className="about-chairman-label">
              <p className="about-chairman-name">J.G.Thilakasiri</p>
              <p className="about-chairman-title">Chairman</p>
            </div>
          </div>

          <div className="about-image">
            <img src={aboutImage} alt={`${site.name} office`} />
          </div>
        </div>
      </div>
    </section>
  );
}
