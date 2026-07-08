import "../styles/companies.css";
import type { CSSProperties } from "react";
import { Marquee } from "../components/ui/marquee";
import {
  companyPartners,
  type CompanyPartner,
} from "../content/companies";
import SectionHeader from "../components/SectionHeader";

const midpoint = Math.ceil(companyPartners.length / 2);
const topRowPartners = companyPartners.slice(0, midpoint);
const bottomRowPartners = companyPartners.slice(midpoint);

function CompanyLogo({ company }: { company: CompanyPartner }) {
  return (
    <div className="company-logo-item">
      <img
        src={company.logo}
        alt={company.name}
        decoding="async"
        className="company-logo-img"
        style={
          {
            "--logo-scale": company.size ?? 1,
          } as CSSProperties
        }
      />
    </div>
  );
}

export default function Companies() {
  return (
    <section id="companies" className="companies-page">
      <div className="companies-inner">
        <SectionHeader
          title={
            <>
              <span className="companies-title-dark">Companies Who</span>
              <span className="companies-title-accent">Work With Us</span>
            </>
          }
        />

        <div className="companies-showcase">
          <Marquee pauseOnHover speed={35} className="companies-marquee">
            {topRowPartners.map((company) => (
              <CompanyLogo key={company.name} company={company} />
            ))}
          </Marquee>

          <Marquee
            pauseOnHover
            speed={40}
            direction="right"
            className="companies-marquee"
          >
            {bottomRowPartners.map((company) => (
              <CompanyLogo key={company.name} company={company} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
