/**
 * ---------------------------------------------------------------------------
 * CENTRAL SITE DATA
 * ---------------------------------------------------------------------------
 * Every piece of business information lives here so it can be changed in one
 * place. Anything marked CONFIRM is a placeholder that must be checked with
 * the client before the site goes live.
 * ---------------------------------------------------------------------------
 */

export const site = {
  name: "2nd Chance Mobile Car & Van Valet",
  shortName: "2nd Chance Valeting",
  tagline: "Mobile valeting that gives any vehicle a second chance",
  description:
    "Fully mobile car and van valeting across Southampton and the surrounding areas. We bring our own water and power to your home or workplace and hand-finish every vehicle.",
  // CONFIRM: live domain before launch
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://2ndchancemobilecar.vercel.app",
  // CONFIRM: phone number
  phone: "07000 000000",
  phoneHref: "tel:+447000000000",
  // CONFIRM: email address
  email: "hello@2ndchancemobilecar.co.uk",
  // CONFIRM: base town / trading address
  baseTown: "Southampton",
  county: "Hampshire",
  social: {
    // CONFIRM: social handles — remove any the business does not use
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
  hours: [
    { day: "Monday – Friday", time: "08:00 – 18:00" },
    { day: "Saturday", time: "08:00 – 16:00" },
    { day: "Sunday", time: "By arrangement" },
  ],
} as const;

export const trustPoints = [
  "Fully mobile — we come to you",
  "Own water & power supply",
  "Fully insured",
  "Hand-finished, never rushed",
] as const;

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  points: string[];
  icon: "sparkles" | "droplets" | "sofa" | "truck" | "sun" | "wind" | "shield" | "wrench";
};

export const services: Service[] = [
  {
    slug: "exterior-valet",
    title: "Exterior Valet",
    blurb:
      "A proper hand wash and decontamination that lifts the grime a drive-through leaves behind.",
    points: ["Snow foam pre-wash", "Two-bucket hand wash", "Wheels, arches & tyres", "Hand dry & tyre dressing"],
    icon: "droplets",
  },
  {
    slug: "interior-valet",
    title: "Interior Deep Clean",
    blurb:
      "Every vent, seam and cup holder — the detail work that makes a cabin feel new again.",
    points: ["Full vacuum & de-crumb", "Dashboard & trim cleaned", "Glass cleaned inside", "Odour neutraliser"],
    icon: "sofa",
  },
  {
    slug: "full-valet",
    title: "Full Valet",
    blurb: "Inside and out in one visit. Our most popular booking for family cars.",
    points: ["Exterior valet included", "Interior deep clean included", "Door shuts & sills", "Boot area cleaned"],
    icon: "sparkles",
  },
  {
    slug: "van-valet",
    title: "Van & Commercial",
    blurb:
      "Work vans, tippers and fleet vehicles cleaned on site with minimal downtime for you.",
    points: ["Load area cleaned out", "Cab deep clean", "Ply-lined interiors", "Fleet visits arranged"],
    icon: "truck",
  },
  {
    slug: "seat-carpet-shampoo",
    title: "Seat & Carpet Shampoo",
    blurb:
      "Hot extraction that pulls spills, pet hair and years of traffic out of the fabric.",
    points: ["Wet extraction machine", "Stain pre-treatment", "Pet hair removal", "Fast-dry finish"],
    icon: "wind",
  },
  {
    slug: "machine-polish",
    title: "Machine Polish",
    blurb:
      "Swirl marks and dull paint corrected by hand-guided machine, then protected.",
    points: ["Paint decontamination", "Single-stage correction", "Gloss enhancement", "Protective sealant"],
    icon: "sun",
  },
  {
    slug: "headlight-restoration",
    title: "Headlight Restoration",
    blurb: "Cloudy, yellowed lenses sanded back, polished clear and sealed against UV.",
    points: ["Wet sanding", "Machine polish", "UV sealant", "MOT-friendly clarity"],
    icon: "wrench",
  },
  {
    slug: "protection",
    title: "Wax & Sealant Protection",
    blurb:
      "A durable layer of protection so the finish survives salt, rain and road film.",
    points: ["Paint sealant", "Glass sealant", "Trim dressing", "Months of easier washing"],
    icon: "shield",
  },
];

export type Pkg = {
  name: string;
  price: string;
  duration: string;
  summary: string;
  includes: string[];
  featured?: boolean;
};

// CONFIRM: all package pricing and durations with the client before launch.
export const packages: Pkg[] = [
  {
    name: "The Refresh",
    price: "From £45",
    duration: "Around 1.5 hours",
    summary: "A sharp exterior tidy-up for a car that is looked after but road-worn.",
    includes: [
      "Snow foam pre-wash",
      "Two-bucket hand wash",
      "Wheels, arches and tyres",
      "Hand dry and tyre dressing",
      "Exterior glass polished",
    ],
  },
  {
    name: "The Signature",
    price: "From £85",
    duration: "Around 3 hours",
    summary: "Our most booked valet. Inside and out, finished by hand in one visit.",
    includes: [
      "Everything in The Refresh",
      "Full interior vacuum and de-crumb",
      "Dashboard, console and trim cleaned",
      "Interior glass and door shuts",
      "Boot and seat rails cleaned",
      "Odour neutraliser",
    ],
    featured: true,
  },
  {
    name: "Second Chance Restoration",
    price: "From £160",
    duration: "Half to full day",
    summary:
      "For the vehicles other valeters turn down. Neglected, ex-work or ready for sale.",
    includes: [
      "Everything in The Signature",
      "Seat and carpet hot extraction",
      "Machine polish and gloss enhancement",
      "Headlight restoration if required",
      "Engine bay tidy",
      "Sealant protection applied",
    ],
  },
];

export const processSteps = [
  {
    title: "Tell us about the vehicle",
    body: "Send a couple of photos and your postcode. The worse it looks, the more we want to see it.",
  },
  {
    title: "We quote honestly",
    body: "A fixed price before we start, based on the size and condition of the vehicle — no surprises on the day.",
  },
  {
    title: "We come to you",
    body: "Home, work or roadside. We bring our own water and power, so all we need is somewhere to park.",
  },
  {
    title: "You inspect it with us",
    body: "We walk round the vehicle with you before we leave. If something is not right, we put it right.",
  },
] as const;

// CONFIRM: coverage list and travel radius
export const coverage = [
  "Southampton",
  "Eastleigh",
  "Chandler's Ford",
  "Hedge End",
  "West End",
  "Bitterne",
  "Woolston",
  "Totton",
  "Romsey",
  "Fareham",
  "Winchester",
  "Botley",
] as const;

export const faqs = [
  {
    q: "Do you need access to water and electricity?",
    a: "No. We carry our own water tank and power supply, so we can work at your home, your workplace or anywhere we can safely park alongside the vehicle.",
  },
  {
    q: "How long does a valet take?",
    a: "A Refresh is usually around an hour and a half, a Signature around three hours, and a full restoration can take most of a day. We give you a realistic time when we quote.",
  },
  {
    q: "What if my car is really bad inside?",
    a: "That is the sort of job we built the business around. Pet hair, spilled drinks, building dust, ex-work vans — send photos and we will tell you honestly what we can get back.",
  },
  {
    q: "Do you clean vans and commercial vehicles?",
    a: "Yes. Single vans, tippers and small fleets. We can work around your schedule so vehicles are off the road for as little time as possible.",
  },
  {
    q: "Which areas do you cover?",
    a: "Southampton and the surrounding Hampshire towns. If you are slightly outside the usual area, ask anyway — we will tell you if we can make it work.",
  },
  {
    q: "How do I pay?",
    a: "Payment is taken once you have inspected the vehicle and you are happy with the finish. Card and bank transfer are both fine.",
  },
] as const;

export const vehicleTypes = [
  "Small car",
  "Family hatchback or saloon",
  "Estate or 4x4",
  "MPV or 7-seater",
  "Small van",
  "Large van or Luton",
] as const;

/* -------------------------------------------------------------------------
 * PRICE ESTIMATOR
 * -------------------------------------------------------------------------
 * The estimator multiplies a package base price by a vehicle-size factor and
 * a condition factor, then shows a range. It is deliberately a guide only —
 * every job is confirmed with a fixed price before work starts.
 * CONFIRM: base prices and multipliers with the client.
 * ---------------------------------------------------------------------- */

export type SizeKey = "small" | "medium" | "large" | "mpv" | "van" | "luton";

export const vehicleSizes: { key: SizeKey; label: string; example: string; factor: number }[] = [
  { key: "small", label: "Small car", example: "Fiesta, Corsa, Polo", factor: 0.9 },
  { key: "medium", label: "Hatch / saloon", example: "Golf, Focus, A3", factor: 1 },
  { key: "large", label: "Estate / 4x4", example: "Qashqai, Tiguan, X3", factor: 1.2 },
  { key: "mpv", label: "MPV / 7-seat", example: "Zafira, Galaxy, Touran", factor: 1.3 },
  { key: "van", label: "Small van", example: "Transit Connect, Caddy", factor: 1.35 },
  { key: "luton", label: "Large van / Luton", example: "Sprinter, Transit LWB", factor: 1.6 },
];

export type ConditionKey = "kept" | "average" | "neglected";

export const conditions: {
  key: ConditionKey;
  label: string;
  detail: string;
  factor: number;
}[] = [
  { key: "kept", label: "Well kept", detail: "Cleaned regularly, light road film", factor: 1 },
  { key: "average", label: "Lived in", detail: "Kids, dogs, a few months of neglect", factor: 1.15 },
  {
    key: "neglected",
    label: "Second chance",
    detail: "Ex-work, long neglected or ready for sale",
    factor: 1.45,
  },
];

// Typical hours on site for a standard family car, scaled by size/condition.
export const baseDurations: Record<string, number> = {
  "The Refresh": 1.5,
  "The Signature": 3,
  "Second Chance Restoration": 6,
};

export const estimatorBases: Record<string, number> = {
  "The Refresh": 45,
  "The Signature": 85,
  "Second Chance Restoration": 160,
};

/* -------------------------------------------------------------------------
 * COMMERCIAL / FLEET
 * ---------------------------------------------------------------------- */

export const fleetPoints = [
  {
    title: "On-site, out of hours",
    body: "Early mornings, evenings and weekends so vehicles stay earning during the working day.",
  },
  {
    title: "Priced per vehicle, per visit",
    body: "A flat rate agreed up front for each vehicle class. One invoice, monthly, no admin.",
  },
  {
    title: "Handover-ready finishes",
    body: "Part-exchange and resale prep, including interior extraction and paint enhancement.",
  },
] as const;

/* -------------------------------------------------------------------------
 * COVERAGE MAP
 * -------------------------------------------------------------------------
 * Indicative positions on a stylised map — not a geographic projection.
 * CONFIRM: which towns should appear as primary pins.
 * ---------------------------------------------------------------------- */

export const mapPins: { name: string; x: number; y: number; primary?: boolean }[] = [
  { name: "Winchester", x: 52, y: 12 },
  { name: "Romsey", x: 22, y: 30 },
  { name: "Chandler's Ford", x: 43, y: 27 },
  { name: "Eastleigh", x: 52, y: 34 },
  { name: "Botley", x: 74, y: 33 },
  { name: "Totton", x: 20, y: 52 },
  { name: "Southampton", x: 42, y: 52, primary: true },
  { name: "West End", x: 59, y: 44 },
  { name: "Bitterne", x: 53, y: 58 },
  { name: "Hedge End", x: 71, y: 52 },
  { name: "Woolston", x: 47, y: 68 },
  { name: "Fareham", x: 82, y: 62 },
];
