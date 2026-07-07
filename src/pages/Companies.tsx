import "../styles/companies.css";
import type { CSSProperties } from "react";
import { Marquee } from "../components/ui/marquee";
import {
  companyPartners,
  type CompanyPartner,
} from "../content/companies";

const midpoint = Math.ceil(companyPartners.length / 2);
const topRowPartners = companyPartners.slice(0, midpoint);
const bottomRowPartners = companyPartners.slice(midpoint);

function CompanyLogo({ company }: { company: CompanyPartner }) {
  return (
    <div className="mx-14 flex h-28 shrink-0 items-center justify-center sm:mx-20 sm:h-32">
      <img
        src={company.logo}
        alt={company.name}
        loading="lazy"
        className="h-full w-auto max-w-[220px] object-contain sm:max-w-[280px]"
        style={
          {
            maxHeight: `calc(6.5rem * ${company.size ?? 1})`,
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
        <h1>Companies Who Work With Us</h1>

        <div className="companies-showcase">
          <Marquee pauseOnHover speed={35} className="[&>div]:py-4 sm:[&>div]:py-8">
            {topRowPartners.map((company) => (
              <CompanyLogo key={company.name} company={company} />
            ))}
          </Marquee>

          <Marquee
            pauseOnHover
            speed={40}
            direction="right"
            className="[&>div]:py-4 sm:[&>div]:py-8"
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
