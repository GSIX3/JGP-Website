import "../styles/footer.css";
import { site } from "../content/site";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Companies", href: "#companies" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

const [brandFirst, ...brandRest] = site.name.split(" ");

function BrandMark({ name }: { name: string }) {
  return (
    <>
      {name.split("").map((char, index) =>
        char.toUpperCase() === "S" ? (
          <span className="footer-brand-accent" key={index}>
            {char}
          </span>
        ) : (
          <span key={index}>{char}</span>
        ),
      )}
    </>
  );
}
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.contact.mapQuery)}&output=embed`;

export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-brand-name">
            <span className="footer-brand-mark">
              <BrandMark name={brandFirst} />
            </span>
            <span className="footer-brand-rest">{brandRest.join(" ")}</span>
          </div>
          <p className="footer-brand-text">
            Delivering trusted healthcare through licensed pharmaceutical
            distribution across Sri Lanka&apos;s Central Province — and partially
            across Sabaragamuwa and Uva.
          </p>
        </div>

        <div className="footer-col">
          <h4>Office</h4>
          <p className="footer-address">
            {site.contact.address.split(", ").map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          {site.contact.email && (
            <a className="footer-office-link" href={site.contact.email.href}>
              {site.contact.email.display}
            </a>
          )}
          {site.contact.phones.map((phone) => (
            <a className="footer-office-link" href={phone.href} key={phone.href}>
              {phone.display}
            </a>
          ))}
        </div>

        <div className="footer-col footer-links-col">
          <h4>Links</h4>
          <ul className="footer-links">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-map">
          <iframe
            src={mapSrc}
            title={`${site.name} location`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {site.legalName}. All rights
          reserved.
        </p>
        <p className="footer-credit">
          Powered by{" "}
          <a
            href="https://www.gsix3.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GSIX3
          </a>
        </p>
      </div>
    </footer>
  );
}
