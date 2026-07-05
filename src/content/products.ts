import prescriptionImg from "../assets/products/img5.jpg";
import otcImg from "../assets/products/img6.jpg";
import genericsImg from "../assets/products/img7.jpg";
import nutraceuticalsImg from "../assets/products/img8.jpg";
import medicalDevicesImg from "../assets/products/img9.jpg";
import coldChainImg from "../assets/products/img14.jpg";

/**
 * Product catalog configuration — overview category → form/category mappings.
 *
 * OTC and Medical Devices mappings per client spec. Remaining mappings are
 * form-type groupings for browse/filter; adjust if business rules differ.
 */

export type Medicine = {
  itemCode: string;
  company: string;
  range: string;
  name: string;
  category: string;
  packSize: string;
};

export type OverviewCategory = {
  id: string;
  name: string;
  description: string;
  image: string;
  /** Form/category values (from inventory) shown when this card is selected */
  formCategories: readonly string[];
};

export const overviewCategories: readonly OverviewCategory[] = [
  {
    id: "prescription",
    name: "Prescription Medicines",
    description:
      "Ethical pharmaceuticals sourced from licensed manufacturers.",
    image: prescriptionImg,
    formCategories: [
      "Tablets",
      "Capsules",
      "Injection",
      "Suspension",
      "Inhaler",
      "Ophthalmic",
      "Eye Drops",
      "Eye Ointment",
      "Nasal Drops",
      "Nasal Spray",
      "Solution",
      "Drops",
      "Other",
    ],
  },
  {
    id: "otc",
    name: "Over-the-Counter (OTC)",
    description: "Consumer health products for pharmacies and retail outlets.",
    image: otcImg,
    formCategories: ["Cream", "Gel", "Syrup", "Ointment", "Lotion"],
  },
  {
    id: "generics",
    name: "Generics",
    description:
      "Cost-effective generic alternatives across key therapeutic areas.",
    image: genericsImg,
    formCategories: ["Tablets", "Capsules", "Suspension", "Syrup"],
  },
  {
    id: "nutraceuticals",
    name: "Nutraceuticals & Supplements",
    description: "Vitamins, minerals, and wellness products for distribution.",
    image: nutraceuticalsImg,
    formCategories: ["Supplement", "Serum"],
  },
  {
    id: "medical-devices",
    name: "Medical Devices",
    description: "Essential devices and consumables for healthcare providers.",
    image: medicalDevicesImg,
    formCategories: ["Equipment"],
  },
  {
    id: "cold-chain",
    name: "Cold Chain Products",
    description:
      "Temperature-sensitive medicines handled with compliant storage.",
    image: coldChainImg,
    formCategories: ["Injection", "Serum"],
  },
] as const;
