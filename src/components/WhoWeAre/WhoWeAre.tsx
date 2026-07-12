import "./WhoWeAre.css";
import {
  HeartHandshake,
  Eye,
  Target,
  UsersRound,
  ShieldCheck,
} from "lucide-react";
import { site } from "../../content/site";
import SectionHeader from "../SectionHeader";

const valueIcons = [ShieldCheck, UsersRound, HeartHandshake] as const;

export default function WhoWeAre() {
  const { subtitle, mission, vision, values, subsidiaries } = site.whoWeAre;

  return (
    <section id="who-we-are" className="who-page">
      <div className="who-inner">
        <SectionHeader
          title={
            <>
              <span className="who-title-dark">Who</span>
              <span className="who-title-accent">We Are</span>
            </>
          }
          subtitle={subtitle}
        />

        <div className="who-statement">
          <article className="who-statement-block who-statement-block--mission">
            <header className="who-statement-head">
              <span className="who-statement-index" aria-hidden="true">
                01
              </span>
              <div className="who-statement-meta">
                <span className="who-statement-icon" aria-hidden="true">
                  <Target size={18} strokeWidth={1.75} />
                </span>
                <p className="who-statement-label">{mission.label}</p>
              </div>
            </header>
            <p className="who-statement-text">{mission.quote}</p>
          </article>

          <div className="who-statement-divider" aria-hidden="true" />

          <article className="who-statement-block who-statement-block--vision">
            <header className="who-statement-head">
              <span className="who-statement-index" aria-hidden="true">
                02
              </span>
              <div className="who-statement-meta">
                <span className="who-statement-icon" aria-hidden="true">
                  <Eye size={18} strokeWidth={1.75} />
                </span>
                <p className="who-statement-label">{vision.label}</p>
              </div>
            </header>
            <p className="who-statement-text">{vision.quote}</p>
          </article>
        </div>

        <div className="who-values">
          <div className="who-values-head">
            <p className="who-values-kicker">Guiding principles</p>
            <h2 className="who-values-heading">Our Values</h2>
          </div>

          <ol className="who-values-grid">
            {values.map((value, index) => {
              const Icon = valueIcons[index] ?? HeartHandshake;
              return (
                <li className="who-value" key={value.title}>
                  <div className="who-value-top">
                    <span className="who-value-num" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="who-value-icon" aria-hidden="true">
                      <Icon size={18} strokeWidth={1.75} />
                    </span>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="who-subsidiaries">
          <p className="who-subsidiaries-label">Our Subsidiaries</p>
          <ul className="who-subsidiaries-list">
            {subsidiaries.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
