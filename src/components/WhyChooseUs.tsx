import "../styles/whyChooseUs.css";
import {
  Clock,
  Smartphone,
  ShieldCheck,
  Package,
  MapPin,
  Handshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { site } from "../content/site";
import SectionHeader from "../components/SectionHeader";
import deliveryImage from "../assets/diliver.webp";

const benefitIcons: LucideIcon[] = [
  Clock,
  Smartphone,
  ShieldCheck,
  Package,
  MapPin,
  Handshake,
];

export default function WhyChooseUs() {
  const { subtitle, imageAlt, benefits } = site.whyChooseUs;

  return (
    <section id="why-us" className="why-choose-page">
      <SectionHeader
        title={
          <>
            <span className="why-choose-title-dark">Why</span>
            <span className="why-choose-title-accent">Choose Us</span>
          </>
        }
        subtitle={subtitle}
      />

      <div className="why-choose-layout">
        <div className="why-choose-image">
          <img src={deliveryImage} alt={imageAlt} loading="lazy" decoding="async" />
        </div>

        <div className="why-choose-panel">
          <div className="why-choose-panel-intro">
            <h2>What Sets Us Apart</h2>
            <p>{site.name} (Pvt) Ltd</p>
          </div>

          {benefits.map((benefit, index) => {
            const Icon = benefitIcons[index] ?? Clock;

            return (
              <div className="why-choose-item" key={benefit.title}>
                <div className="why-choose-icon">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div className="why-choose-item-body">
                  <p className="why-choose-label">{benefit.title}</p>
                  <p className="why-choose-value">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
