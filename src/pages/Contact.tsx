import "../styles/contact.css";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { site } from "../content/site";

const pendingLabel = "Not provided — please confirm";

export default function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.contact.mapQuery)}&output=embed`;

  return (
    <section id="contact" className="contact-page">
      <h1>Contact Us</h1>

      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-card-header">
            <div className="contact-icon">
              <Phone size={18} />
            </div>
            <h3>Phone</h3>
          </div>
          {site.contact.phones.map((phone) => (
            <a className="contact-row" href={phone.href} key={phone.href}>
              {phone.display}
            </a>
          ))}
        </div>

        <div className="contact-card">
          <div className="contact-card-header">
            <div className="contact-icon">
              <MessageCircle size={18} />
            </div>
            <h3>WhatsApp</h3>
          </div>
          {site.contact.whatsapp ? (
            <a
              className="contact-row"
              href={site.contact.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.contact.whatsapp.display}
            </a>
          ) : (
            <p className="contact-row contact-pending">{pendingLabel}</p>
          )}
        </div>

        <div className="contact-card">
          <div className="contact-card-header">
            <div className="contact-icon">
              <Mail size={18} />
            </div>
            <h3>Email</h3>
          </div>
          {site.contact.email ? (
            <a className="contact-row" href={site.contact.email.href}>
              {site.contact.email.display}
            </a>
          ) : (
            <p className="contact-row contact-pending">{pendingLabel}</p>
          )}
        </div>

        <div className="contact-card">
          <div className="contact-card-header">
            <div className="contact-icon">
              <MapPin size={18} />
            </div>
            <h3>Location</h3>
          </div>
          <p className="contact-row" style={{ cursor: "default" }}>
            {site.contact.address}
          </p>
        </div>
      </div>

      <p className="contact-note">{site.contact.notes}</p>

      <div className="map-wrapper">
        <iframe
          src={mapSrc}
          title={`${site.name} location`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
