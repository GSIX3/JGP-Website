import baursLogo from "../assets/companies/baurs logo.png";
import alarisLogo from "../assets/companies/alaris-logo.png";
import astronLogo from "../assets/companies/astron logo.png";
import cicLogo from "../assets/companies/CIC_Holdings_logo.png";
import citihealthLogo from "../assets/companies/cityhealth_logo.png";
import emerchemieLogo from "../assets/companies/emerchemie_logo.png";
import georgeSteuartLogo from "../assets/companies/george_steuart_logo.png";
import interpharmLogo from "../assets/companies/interpharm_logo.png";
import luthminLogo from "../assets/companies/associated laboratories.png";
import manselLogo from "../assets/companies/mansel logo.png";
import mullerLogo from "../assets/companies/muller logo.png";

export type CompanyPartner = {
  name: string;
  logo: string;
  /** Multiplier for logos with extra padding in source artwork */
  size?: number;
};

export const companyPartners: readonly CompanyPartner[] = [
  {
    name: "A BAUR & CO. (PHARMACEUTICALS) LTD.",
    logo: baursLogo,
    size: 1,
  },
  {
    name: "ALARIS LANKA (PVT) LTD.",
    logo: alarisLogo,
    size: 1.25,
  },
  {
    name: "ASTRON LIMITED",
    logo: astronLogo,
    size: 1.6,
  },
  {
    name: "CIC HOLDINGS PLC",
    logo: cicLogo,
    size: 1.2,
  },
  {
    name: "CITIHEALTH IMPORTS ( PVT ) LTD.",
    logo: citihealthLogo,
    size: 1.4,
  },
  {
    name: "EMERCHEMIE NB ( CEYLON ) LTD.",
    logo: emerchemieLogo,
    size: 2.4,
  },
  {
    name: "GEORGE STEUART HEALTH PVT LTD.",
    logo: georgeSteuartLogo,
    size: 1.8,
  },
  {
    name: "INTERPHARM ( PVT ) LTD",
    logo: interpharmLogo,
    size: 1.8,
  },
  {
    name: "MULLER & PHIPPS (HEALTH CARE) LIMITED",
    logo: mullerLogo,
    size: 1.6,
  },
  {
    name: "MANSEL CEYLON PVT LTD.",
    logo: manselLogo,
    size: 2.4,
  },
  {
    name: "Associated Laboratories Pvt Ltd",
    logo: luthminLogo,
    size: 0.8,
  },
];
