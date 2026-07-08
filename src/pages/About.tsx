import "../styles/about.css";
import { site } from "../content/site";
import chairmanPhoto from "../assets/avatar/img10.jpg";
import SectionHeader from "../components/SectionHeader";

export default function About() {
  return (
    <section id="about" className="about-page">
      <SectionHeader
        title={
          <>
            <span className="about-title-accent">About</span>
            <span className="about-title-dark">Us</span>
          </>
        }
        subtitle={site.about.subtitle}
      />

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

        <aside className="about-chairman">
          <div className="about-chairman-photo">
            <img
              src={chairmanPhoto}
              alt="Portrait of J.G.Thilakasiri"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about-chairman-label">
            <p className="about-chairman-name">J.G.Thilakasiri</p>
            <p className="about-chairman-title">Chairman</p>
            <span className="about-chairman-divider" aria-hidden="true" />
            <p className="about-chairman-company">{site.name}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
