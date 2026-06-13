import {
  AlarmSmoke,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Factory,
  FireExtinguisher,
  Flame,
  Handshake,
  Headphones,
  Hotel,
  Hospital,
  Lightbulb,
  MapPin,
  Phone,
  School,
  ShieldCheck,
  Siren,
  Sprout,
  Warehouse,
  Wrench
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
export const site = {
  name: "Arshone Fire Safety Pvt Ltd",
  shortName: "Arshone Fire Safety",
  domain: "https://arshone.com",

  phone: "+91 9173173919",
  phoneHref: "tel:+919173173919",
  whatsapp: "+919173173919",

  email: "info@arshone.com | sandhu@arshone.com",
  emailHref: "mailto:info@arshone.com?cc=sandhu@arshone.com",

  address:
    "UG-15, Raj Dream Complex, Second VIP Road, Near Kalamandir, Althan, Surat, Gujarat 395017",

  city: "Surat",
  region: "Gujarat",

  description:
    "Fire safety company serving Surat and Gujarat with fire protection systems, equipment, audits, NOC consultancy and maintenance."
};
  description:
    "Fire safety company serving Surat and Gujarat with fire protection systems, equipment supply, installation, maintenance, audits and consultancy for industrial, commercial and residential projects."

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const serviceAreas = [
  "Surat",
  "Hazira",
  "Sachin GIDC",
  "Pandesara GIDC",
  "Kadodara",
  "Kim",
  "Ankleshwar",
  "Bharuch",
  "Vapi",
  "Vadodara",
  "Ahmedabad",
  "Rajkot"
];

export type Service = {
  title: string;
  slug: string;
  short: string;
  overview: string;
  image: string;
  icon: LucideIcon;
  benefits: string[];
  process: string[];
  industries: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    title: "Fire Alarm System Installation",
    slug: "fire-alarm-system-installation",
    short: "Addressable and conventional fire alarm systems for early detection and fast response.",
    image: "/images/service-alarm.webp",
    overview:
      "Arshone designs, supplies and installs dependable fire alarm systems for factories, offices, hotels, hospitals, schools and residential projects in Surat and across Gujarat. Our team plans device locations, cabling routes, panel capacity and commissioning checks for practical site conditions.",
    icon: Siren,
    benefits: ["Early fire detection", "Zoned alerts", "Code-aligned installation", "Central panel monitoring"],
    process: ["Site survey", "System design", "Supply and installation", "Testing and handover"],
    industries: ["Factories", "Hotels", "Hospitals", "Schools", "Commercial Buildings"],
    faqs: [
      { question: "Do you install addressable fire alarm systems?", answer: "Yes. We install both addressable and conventional fire alarm systems based on the building risk and budget." },
      { question: "Can you upgrade an old fire alarm panel?", answer: "Yes. We can inspect the existing wiring, detectors and panel before recommending repair, upgrade or replacement." }
    ]
  },
  {
    title: "Fire Hydrant System Installation",
    slug: "fire-hydrant-system-installation",
    short: "Engineered hydrant networks with pumps, valves, hose reels, landing valves and accessories.",
    image: "/images/service-hydrant.webp",
    overview:
      "We execute fire hydrant systems for industrial and commercial properties in Surat, Hazira, Sachin GIDC and wider Gujarat, including pump rooms, hydrant pipelines, valves, hose boxes and testing support. Systems are planned for accessibility, pressure performance and long-term maintenance.",
    icon: Flame,
    benefits: ["High-capacity fire response", "Strategic hydrant coverage", "Pump room integration", "Durable equipment"],
    process: ["Hydraulic planning", "Pump and pipe selection", "Installation", "Pressure testing"],
    industries: ["Factories", "Warehouses", "Shopping Malls", "Commercial Buildings", "Residential Projects"],
    faqs: [
      { question: "Do you provide pump room work?", answer: "Yes. We support pump selection, installation coordination and fire pump room accessories." },
      { question: "Can you maintain existing hydrant systems?", answer: "Yes. We inspect pressure, valves, hose reels, leaks and pump readiness under AMC plans." }
    ]
  },
  {
    title: "Fire Sprinkler System Installation",
    slug: "fire-sprinkler-system-installation",
    short: "Automatic sprinkler protection for buildings, warehouses, plants and high-risk areas.",
    image: "/images/service-sprinkler.webp",
    overview:
      "Arshone provides sprinkler system installation for automatic fire suppression in commercial, residential and industrial premises across Surat and Gujarat. We help plan sprinkler coverage, pipe routing, control valves and flow testing for practical site conditions.",
    icon: Sprout,
    benefits: ["Automatic suppression", "Reduced fire spread", "Property protection", "Scalable zone control"],
    process: ["Risk evaluation", "Layout planning", "Pipe and head installation", "Flow testing"],
    industries: ["Warehouses", "Hotels", "Hospitals", "Shopping Malls", "Factories"],
    faqs: [
      { question: "Which sprinkler type is suitable for my site?", answer: "The choice depends on occupancy, ceiling height, storage type and risk level. We recommend after site inspection." },
      { question: "Do sprinklers activate one by one?", answer: "In most wet sprinkler systems, only heads exposed to sufficient heat activate, helping limit water discharge." }
    ]
  },
  {
    title: "Fire Extinguisher Supply",
    slug: "fire-extinguisher-supply",
    short: "ISI-marked extinguishers selected by risk class, area size and occupancy type.",
    image: "/images/service-extinguisher.webp",
    overview:
      "We supply ABC, CO2, DCP, water and foam fire extinguishers for offices, factories, warehouses, schools, hospitals and residential buildings in Surat and nearby Gujarat industrial regions. Placement guidance and basic user orientation can be included.",
    icon: FireExtinguisher,
    benefits: ["Right extinguisher for each fire class", "Reliable equipment", "Clear placement planning", "Quick quote support"],
    process: ["Requirement review", "Product selection", "Supply", "Placement guidance"],
    industries: ["Offices", "Schools", "Hospitals", "Factories", "Residential Projects"],
    faqs: [
      { question: "Which extinguisher is best for office use?", answer: "ABC and CO2 extinguishers are commonly used in offices. Final selection depends on electrical load and risk areas." },
      { question: "Do you provide bulk supply?", answer: "Yes. We provide extinguisher supply for single sites and multi-location projects." }
    ]
  },
  {
    title: "Fire Extinguisher Refilling",
    slug: "fire-extinguisher-refilling",
    short: "Periodic refilling, pressure checking and maintenance for fire extinguishers.",
    image: "/images/service-refilling.webp",
    overview:
      "Arshone provides extinguisher refilling and servicing in Surat and Gujarat to keep equipment ready during emergencies. We check pressure, seals, hose condition, body condition and service tags as part of maintenance.",
    icon: Wrench,
    benefits: ["Emergency readiness", "Pressure and seal checks", "Service records", "Cost-effective maintenance"],
    process: ["Collection or site visit", "Inspection", "Refilling and pressure check", "Tagging and return"],
    industries: ["Factories", "Commercial Buildings", "Hotels", "Schools", "Warehouses"],
    faqs: [
      { question: "How often should extinguishers be serviced?", answer: "Most sites should inspect extinguishers regularly and refill or service them as required by condition, usage and applicable norms." },
      { question: "Can discharged extinguishers be refilled?", answer: "Yes, if the cylinder condition is acceptable and the extinguisher type supports refilling." }
    ]
  },
  {
    title: "Fire Safety Audit",
    slug: "fire-safety-audit",
    short: "Structured fire risk inspections with practical improvement recommendations.",
    image: "/images/service-audit.webp",
    overview:
      "Our fire safety audit reviews fire risks, equipment readiness, exits, signage, housekeeping, emergency lighting, evacuation planning and maintenance records for sites in Surat and across Gujarat. The outcome is a clear action list for compliance and risk reduction.",
    icon: ClipboardCheck,
    benefits: ["Risk identification", "Compliance readiness", "Actionable report", "Better emergency preparedness"],
    process: ["Document review", "Site inspection", "Gap analysis", "Report and recommendations"],
    industries: ["Factories", "Hospitals", "Schools", "Hotels", "Commercial Buildings"],
    faqs: [
      { question: "Do you provide an audit report?", answer: "Yes. We provide a practical report covering observations, risks and suggested corrective actions." },
      { question: "Can audits be done before authority inspection?", answer: "Yes. A pre-inspection audit helps identify gaps before formal review." }
    ]
  },
  {
    title: "Fire NOC Consultancy",
    slug: "fire-noc-consultancy",
    short: "Guidance for fire NOC documentation, site readiness and compliance coordination.",
    image: "/images/service-noc.webp",
    overview:
      "We help property owners, builders and facility teams in Surat and Gujarat prepare fire safety systems and documentation for Fire NOC related processes. Our role focuses on practical readiness, technical coordination and compliance guidance.",
    icon: BadgeCheck,
    benefits: ["Documentation support", "Site gap review", "System readiness", "Authority process guidance"],
    process: ["Requirement mapping", "Site gap review", "Corrective coordination", "Submission support"],
    industries: ["Residential Projects", "Commercial Buildings", "Hotels", "Schools", "Hospitals"],
    faqs: [
      { question: "Do you handle Fire NOC for new buildings?", answer: "We support technical readiness, documentation and coordination for Fire NOC processes." },
      { question: "Can you help if my site has compliance gaps?", answer: "Yes. We can identify gaps and recommend corrective fire safety work." }
    ]
  },
  {
    title: "Annual Maintenance Contract",
    slug: "annual-maintenance-contract",
    short: "AMC plans for fire alarms, hydrants, sprinklers, extinguishers and emergency systems.",
    image: "/images/service-amc.webp",
    overview:
      "Arshone provides AMC support in Surat and Gujarat to keep fire safety systems functional through planned inspections, testing, preventive maintenance and emergency support. AMC plans are tailored to system type, occupancy and site risk.",
    icon: Headphones,
    benefits: ["Preventive maintenance", "Reduced downtime", "Inspection records", "Priority support"],
    process: ["Asset list review", "AMC proposal", "Scheduled visits", "Issue closure tracking"],
    industries: ["Factories", "Warehouses", "Hospitals", "Hotels", "Commercial Buildings"],
    faqs: [
      { question: "What systems can be covered under AMC?", answer: "Fire alarms, hydrants, sprinklers, extinguishers, emergency lights, pumps and related fire safety equipment can be covered." },
      { question: "Do you offer emergency visits?", answer: "Priority support can be included based on the AMC plan and location." }
    ]
  }
];

export const trustItems = [
  { title: "Certified Professionals", icon: ShieldCheck },
  { title: "Quality Equipment", icon: BadgeCheck },
  { title: "Fast Response", icon: Phone },
  { title: "AMC Support", icon: Headphones }
];

export const industries = [
  { title: "Factories", icon: Factory },
  { title: "Warehouses", icon: Warehouse },
  { title: "Hospitals", icon: Hospital },
  { title: "Schools", icon: School },
  { title: "Hotels", icon: Hotel },
  { title: "Residential Projects", icon: Building2 },
  { title: "Commercial Buildings", icon: MapPin },
  { title: "Shopping Malls", icon: Building2 }
];

export const products = [
  { title: "Fire Extinguishers", image: "/images/product-extinguisher.svg", description: "ABC, CO2, DCP, foam and water extinguishers for multiple fire risk classes." },
  { title: "Smoke Detectors", image: "/images/product-detector.svg", description: "Smoke and heat detection devices for early warning and alarm integration." },
  { title: "Fire Alarm Panels", image: "/images/product-panel.svg", description: "Conventional and addressable panels for centralized monitoring and alerts." },
  { title: "Fire Hydrant Accessories", image: "/images/product-hydrant.svg", description: "Landing valves, hose reels, hose boxes, nozzles and hydrant system accessories." },
  { title: "Sprinkler Systems", image: "/images/product-sprinkler.svg", description: "Sprinkler heads, valves and accessories for automatic suppression networks." },
  { title: "Emergency Lights", image: "/images/product-light.svg", description: "Emergency and exit lighting for safe movement during power failure or evacuation." },
  { title: "Safety Signage", image: "/images/product-signage.svg", description: "Fire exit, equipment location, warning and evacuation signage for compliant sites." }
];

export const projects = [
  {
    title: "Industrial Pump Room & Hydrant Network",
    type: "Industrial",
    location: "Surat & Gujarat",
    scope: "Fire pump room, hydrant risers, valves and pressure testing for industrial facilities.",
    image: "/images/project-industrial.webp"
  },
  {
    title: "Warehouse Sprinkler & Hose Reel Coverage",
    type: "Warehouse",
    location: "Sachin GIDC / Hazira",
    scope: "Sprinkler piping, hose reel points and coverage planning for storage environments.",
    image: "/images/project-warehouse.webp"
  },
  {
    title: "Commercial Fire Alarm & Extinguisher Setup",
    type: "Commercial",
    location: "Surat / Vadodara",
    scope: "Alarm panel, detectors, manual call points and extinguisher placement for occupied buildings.",
    image: "/images/project-commercial.webp"
  },
  {
    title: "Residential Fire Safety Installation",
    type: "Residential",
    location: "Surat, Gujarat",
    scope: "Basement sprinkler lines, hose reels and emergency equipment for residential projects.",
    image: "/images/project-residential.webp"
  }
];

export const whyChoose = [
  { title: "Experienced Team", text: "Practical site knowledge across industrial, commercial and residential fire safety work.", icon: Handshake },
  { title: "Quality Products", text: "Equipment selected for dependable performance, serviceability and long-term value.", icon: BadgeCheck },
  { title: "Compliance Expertise", text: "Guidance for audits, NOC readiness and authority-facing documentation.", icon: ClipboardCheck },
  { title: "End-to-End Solutions", text: "Consultancy, supply, installation, testing and AMC from one accountable team.", icon: ShieldCheck },
  { title: "Reliable Support", text: "Responsive service for maintenance, refilling, troubleshooting and urgent site needs.", icon: Headphones }
];

export const faqs = [
  { question: "Do you provide free site inspection?", answer: "Yes. You can request a free site inspection for suitable projects in Surat and Gujarat, subject to location and project scope." },
  { question: "Which areas do you serve?", answer: "Arshone serves industrial, commercial and residential clients across Surat, Hazira, Sachin GIDC, Pandesara, Ankleshwar, Bharuch, Vapi, Vadodara, Ahmedabad, Rajkot and nearby Gujarat regions." },
  { question: "Do you provide installation and maintenance?", answer: "Yes. We provide supply, installation, testing, refilling, audits, Fire NOC consultancy and AMC support." },
  { question: "Can I get a quotation on WhatsApp?", answer: "Yes. Share your site details, system requirement and location on WhatsApp for a quick callback and quote discussion." }
];

export const blogPosts = [
  {
    title: "Fire Safety Checklist for Commercial Buildings in Gujarat",
    slug: "fire-safety-checklist-commercial-buildings-gujarat",
    excerpt: "Key systems, documents and routine checks every facility team should review before inspection."
  },
  {
    title: "Fire Alarm vs Fire Sprinkler System: What Your Building Needs",
    slug: "fire-alarm-vs-sprinkler-system",
    excerpt: "A simple guide to detection, alerting and suppression systems for property owners and builders."
  },
  {
    title: "Why Annual Maintenance Contracts Matter for Fire Safety Systems",
    slug: "annual-maintenance-contract-fire-safety",
    excerpt: "How planned maintenance reduces risk, downtime and compliance pressure."
  }
];

export const productIconMap = {
  extinguishers: FireExtinguisher,
  detectors: AlarmSmoke,
  panels: Siren,
  hydrant: Flame,
  sprinkler: Sprout,
  light: Lightbulb
};
