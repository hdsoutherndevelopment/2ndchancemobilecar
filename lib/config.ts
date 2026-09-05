export const business = {
  name: "2nd Chance",
  legalName: "2nd Chance Mobile Car & Van Valet",
  tagline: "Mobile Car & Van Valet",
  phone: "07718 799720",
  phoneHref: "tel:+447718799720",
  town: "Ferndown",
  county: "Dorset",
  postalRegion: "Dorset",
  hours: "Mon–Sun · 8am – 6pm",
  rating: 5.0,
  reviewCount: 7,
  areas: ["Ferndown", "Wimborne", "Broadstone", "Ringwood"],
  nearby: [
    "West Parley", "Colehill", "Verwood", "West Moors", "Corfe Mullen",
    "St Leonards", "Three Legged Cross", "Bearwood", "Merley", "Longham",
  ],
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://2nd-chance-valeting-hd-southern-development.vercel.app",
};

export type Service = {
  num: string;
  slug: string;
  title: string;
  price: string;
  priceNote?: string;
  blurb: string;
  points: string[];
  image: string;
  alt: string;
};

const U = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const services: Service[] = [
  {
    num: "01",
    slug: "general-exterior-wash",
    title: "General Exterior Wash",
    price: "From £15",
    blurb:
      "A proper hand wash that lifts road film, traffic grime and bird mess — not a five-minute rinse.",
    points: ["Snow foam & hand wash", "Wheels & arches rinsed", "Glass cleaned", "Hand dried, streak free"],
    image: U("1633014041037-f5446fb4ce99"),
    alt: "Car covered in snow foam during a professional exterior hand wash in Ferndown",
  },
  {
    num: "02",
    slug: "interior-exterior-valet",
    title: "Interior & Exterior Valet",
    price: "From £20",
    blurb:
      "The everyday reset. Washed and dried outside, vacuumed and wiped down inside — done on your driveway.",
    points: ["Full exterior wash", "Interior vacuum", "Dash & console wipe down", "Interior glass"],
    image: U("1771491237218-cbd4a707497e"),
    alt: "Valeter cleaning a car dashboard and interior trim by hand",
  },
  {
    num: "03",
    slug: "mini-valet",
    title: "Mini Valet",
    price: "From £50",
    blurb:
      "A deeper clean inside and out for cars that need more than a wash but aren't ready for the full works.",
    points: ["Deep exterior clean", "Wheels & tyres dressed", "Seats & carpets vacuumed", "Plastics cleaned & dressed"],
    image: U("1694678505383-676d78ea3b96"),
    alt: "Mobile valeter hand washing a car with a sponge at a customer's home",
  },
  {
    num: "04",
    slug: "full-valet",
    title: "Full Valet",
    price: "From £70",
    blurb:
      "The full transformation. Every panel, every wheel, every seat — the way it looked the day you bought it.",
    points: ["Decontamination wash & wax", "Wheels, arches & tyres", "Seats, carpets & boot", "Full interior detail"],
    image: U("1632823469850-2f77dd9c7f93"),
    alt: "Detailer polishing the bonnet of a car during a full valet",
  },
  {
    num: "05",
    slug: "engine-cleaning",
    title: "Engine Cleaning & Degreasing",
    price: "From £10",
    priceNote: "add-on",
    blurb:
      "Oil, grease and years of dust cut back so the bay looks cared for — and sells far better.",
    points: ["Safe degrease", "Sensitive areas protected", "Plastics dressed", "Great before a sale"],
    image: U("1752774580658-730f2fafbe0b"),
    alt: "Clean, detailed car engine bay after professional degreasing",
  },
  {
    num: "06",
    slug: "wheel-cleaning",
    title: "Wheel Cleaning",
    price: "Ask for a price",
    blurb:
      "Baked-on brake dust and kerb grime taken off properly — barrels, faces, arches and tyres.",
    points: ["Iron & brake dust removal", "Barrels & faces cleaned", "Arches degreased", "Tyres dressed"],
    image: U("1708805282683-50a060eba80f"),
    alt: "Gloved hand detailing an alloy wheel and tyre with a brush",
  },
  {
    num: "07",
    slug: "commercial-vehicle-cleaning",
    title: "Commercial Vehicle Cleaning",
    price: "Ask for a price",
    blurb:
      "Vans, pickups and small fleets cleaned on-site, around your working day — minimal downtime.",
    points: ["Vans & pickups", "Fleet pricing available", "On-site at your yard", "Early & late slots"],
    image: U("1587813369290-091c9d432daf"),
    alt: "Row of clean white commercial vans after a fleet valet",
  },
];

export const vehicleSizes = ["Small car", "Medium car", "Large car / estate", "4x4 / SUV", "Van", "Commercial / fleet"];

export const reviewsNote =
  "Sample review copy for this demo — to be replaced with 2nd Chance's verified Yell reviews before launch.";

export const reviews = [
  {
    name: "Verified customer",
    location: "Ferndown",
    text: "Turned up exactly when he said he would and spent hours on it. My car is 11 years old and honestly looks better than the day I picked it up. Couldn't be happier.",
    service: "Full Valet",
  },
  {
    name: "Verified customer",
    location: "Wimborne",
    text: "Had the work van done at the yard so I didn't lose a morning. Cab was a state — coffee cups, dust, the lot. Came back looking brand new. Sorted.",
    service: "Commercial Vehicle Cleaning",
  },
  {
    name: "Verified customer",
    location: "Broadstone",
    text: "Really friendly and did not rush a single bit of it. The wheels were the thing I was worried about and they came up spotless. Already booked him again.",
    service: "Mini Valet",
  },
  {
    name: "Verified customer",
    location: "Ringwood",
    text: "Fantastic value for what you get. Came to the house, worked around me, no fuss at all. Interior smells and looks completely different.",
    service: "Interior & Exterior Valet",
  },
  {
    name: "Verified customer",
    location: "West Parley",
    text: "Had it done before selling the car and the buyer commented on how clean it was. Paid for itself. Great attention to detail.",
    service: "Full Valet & Engine Clean",
  },
  {
    name: "Verified customer",
    location: "Colehill",
    text: "Polite, punctual, insured and genuinely takes pride in the job. That's all I want from a tradesman. Highly recommend to anyone local.",
    service: "General Exterior Wash",
  },
  {
    name: "Verified customer",
    location: "Ferndown",
    text: "Two cars done on the driveway in an afternoon. Immaculate finish on both and a fair price. Will be a regular from now on.",
    service: "Mini Valet x2",
  },
];

export const faqs = [
  {
    q: "Do you come to my home or workplace?",
    a: "Yes — that's the whole idea. We're fully mobile across Ferndown, Wimborne, Broadstone, Ringwood and the surrounding villages. Your vehicle stays on your driveway or at your workplace and we work around you.",
  },
  {
    q: "How much does a mobile valet cost in Ferndown?",
    a: "A general exterior wash starts from £15, an interior and exterior wash from £20, a mini valet from £50 and a full valet from £70. Engine cleaning is from £10 as an add-on. Final pricing depends on the size of the vehicle and how much work it needs, so give us a ring or send a quote request for an exact price.",
  },
  {
    q: "Do you need water and electricity?",
    a: "Wherever possible we'll use an outside tap and a socket, which keeps the price down. If that isn't available just mention it when you book and we'll sort something out.",
  },
  {
    q: "Are you insured?",
    a: "Yes, 2nd Chance is fully insured for mobile valeting work on private and commercial vehicles.",
  },
  {
    q: "Do you clean vans and commercial vehicles?",
    a: "We do — vans, pickups, tippers and small fleets. We can clean on-site at your yard or premises, including early and late slots, so you lose as little working time as possible.",
  },
  {
    q: "How long does a valet take?",
    a: "A general wash is usually under an hour. A mini valet typically takes around 1–2 hours and a full valet can take 3 hours or more depending on the size and condition of the vehicle.",
  },
  {
    q: "Which areas do you cover?",
    a: "Ferndown, Wimborne, Broadstone and Ringwood, plus surrounding East Dorset areas including West Parley, Colehill, West Moors, Verwood, Corfe Mullen and Longham. If you're just outside, ask — we'll usually still come to you.",
  },
];

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Areas We Cover", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#quote" },
];

export const gallery = [
  { src: U("1554294314-80a5fb7e6bd5", 1000), alt: "Freshly valeted black car with a deep gloss finish", tall: true, tag: "Exterior" },
  { src: U("1652860316277-370ca5b1b1df", 1000), alt: "Spotless cream leather car interior after a full valet", tag: "Interior" },
  { src: U("1658058765827-3a27bf8009e1", 1000), alt: "Detailed alloy wheel with dressed tyre", tag: "Wheels" },
  { src: U("1752774579270-523a9e91e6d4", 1000), alt: "Immaculate engine bay after cleaning and degreasing", tall: true, tag: "Engine bay" },
  { src: U("1608382247609-7078eb3f9108", 1000), alt: "Water beading on a freshly waxed black panel", tag: "Paintwork" },
  { src: U("1624355761500-f00bb5cfb5a1", 1000), alt: "Clean white work van after a commercial valet", tag: "Commercial" },
  { src: U("1605437241278-c1806d14a4d9", 1000), alt: "Clean modern car interior and dashboard", tag: "Interior" },
  { src: U("1567808291548-fc3ee04dbcf0", 1000), alt: "Polished dark car photographed after valeting", tall: true, tag: "Exterior" },
  { src: U("1620584898989-d39f7f9ed1b7", 1000), alt: "Machine polisher used during a paint enhancement", tag: "Detailing" },
];

export const beforeAfter = [
  {
    label: "Exterior",
    title: "Road film to showroom gloss",
    src: U("1554294314-80a5fb7e6bd5", 1600),
    alt: "Car exterior before and after a full valet",
  },
  {
    label: "Interior",
    title: "Lived-in to like-new",
    src: U("1652860316277-370ca5b1b1df", 1600),
    alt: "Car interior before and after a full valet",
  },
  {
    label: "Wheels",
    title: "Brake dust to bare metal shine",
    src: U("1658058765281-0833dce61996", 1600),
    alt: "Alloy wheel before and after cleaning",
  },
];

export const img = U;
