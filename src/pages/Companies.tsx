import "../styles/companies.css";
import type { CSSProperties } from "react";
import { companyPartners } from "../content/companies";

export default function Companies() {
  return (
    <section id="companies" className="companies-page">
      <h1>Companies Who Work With Us</h1>

      <div className="companies-showcase">
        <ul className="companies-grid">
          {companyPartners.map((company) => (
            <li className="companies-grid__item" key={company.name}>
              <img
                src={company.logo}
                alt={company.name}
                loading="lazy"
                style={
                  {
                    "--logo-size": company.size ?? 1,
                  } as CSSProperties
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
