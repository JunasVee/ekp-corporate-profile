// ============================================================
// EKP Static Data — update this file with real content
// ============================================================

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Tentang Kami",
    href: "/about",
    children: [
      { label: "Company Overview", href: "/about#overview" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "Core Values", href: "/about#values" },
      { label: "Organization Structure", href: "/about#structure" },
      { label: "Certifications", href: "/about#certifications" },
      { label: "HSE Commitment", href: "/about#hse" },
    ],
  },
  {
    label: "Layanan",
    href: "/services",
    children: [
      { label: "EPC Services", href: "/services/epc" },
      { label: "Oil & Gas Construction", href: "/services/oil-gas" },
      { label: "Civil Construction", href: "/services/civil" },
      { label: "Mechanical & Piping", href: "/services/mechanical" },
      { label: "Electrical & Instrumentation", href: "/services/electrical" },
      { label: "Shutdown & Maintenance", href: "/services/shutdown" },
      { label: "Fabrication", href: "/services/fabrication" },
      { label: "Renewable Energy", href: "/services/renewable" },
      { label: "Water Treatment", href: "/services/water-treatment" },
    ],
  },
  {
    label: "Industri",
    href: "/industries",
    children: [
      { label: "Oil & Gas", href: "/industries/oil-gas" },
      { label: "Petrochemical", href: "/industries/petrochemical" },
      { label: "Power Plant", href: "/industries/power-plant" },
      { label: "Renewable Energy", href: "/industries/renewable" },
      { label: "Mining", href: "/industries/mining" },
      { label: "Infrastructure", href: "/industries/infrastructure" },
    ],
  },
  {
    label: "Proyek",
    href: "/projects",
    children: [
      { label: "Featured Projects", href: "/projects#featured" },
      { label: "Oil & Gas", href: "/projects?category=oil-gas" },
      { label: "Civil", href: "/projects?category=civil" },
      { label: "Mechanical", href: "/projects?category=mechanical" },
      { label: "Project Gallery", href: "/projects/gallery" },
    ],
  },
  { label: "Kapabilitas", href: "/capabilities" },
  {
    label: "Sustainability",
    href: "/sustainability",
    children: [
      { label: "ESG", href: "/sustainability#esg" },
      { label: "HSE", href: "/sustainability#hse" },
      { label: "CSR", href: "/sustainability#csr" },
    ],
  },
  { label: "Karier", href: "/career" },
  { label: "Berita", href: "/news" },
  { label: "Kontak", href: "/contact" },
];

// ─── Hero Slides ─────────────────────────────────────────────
export interface HeroSlide {
  id: number;
  badge: string;
  title: string;
  titleHighlight: string;
  titleEnd: string;
  subtitle: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    badge: "Integrated EPC",
    title: "Integrated EPC &",
    titleHighlight: "Energy Infrastructure",
    titleEnd: "Solutions",
    subtitle:
      "Menyediakan layanan EPC, konstruksi, dan manajemen proyek untuk industri energi dengan standar keselamatan dan kualitas terbaik.",
  },
  {
    id: 2,
    badge: "Oil & Gas",
    title: "Pengalaman 20+ Tahun di",
    titleHighlight: "Oil & Gas",
    titleEnd: "Onshore",
    subtitle:
      "Dari perencanaan, engineering, pengadaan, konstruksi, hingga commissioning untuk proyek energi berskala besar di seluruh Indonesia.",
  },
  {
    id: 3,
    badge: "Renewable Energy",
    title: "Membangun Masa Depan",
    titleHighlight: "Energi Terbarukan",
    titleEnd: "Indonesia",
    subtitle:
      "Mendukung transisi energi Indonesia menuju masa depan yang berkelanjutan dengan solusi energi bersih dan ramah lingkungan.",
  },
];

export const heroStats = [
  { value: "150+", label: "Profesional Berpengalaman", icon: "users" },
  { value: "100%", label: "Commitment to HSE", icon: "shield" },
  { value: "100%", label: "Quality & Integrity", icon: "award" },
];

// ─── Services / Business Sectors ─────────────────────────────
export interface Service {
  id: string;
  icon: string;
  title: string;
  items: string[];
  href: string;
}

export const services: Service[] = [
  {
    id: "oil-gas",
    icon: "flame",
    title: "Oil & Gas Onshore",
    items: ["CPF / GPF", "Gathering Station", "Pipeline", "Tank Farm", "Production Facility"],
    href: "/services/oil-gas",
  },
  {
    id: "mechanical",
    icon: "cog",
    title: "Mechanical & Piping",
    items: ["Steel Structure", "Pressure Vessel", "Static Equipment", "Rotating Equipment", "Piping System"],
    href: "/services/mechanical",
  },
  {
    id: "shutdown",
    icon: "wrench",
    title: "Shutdown & Maintenance",
    items: ["Turn Around", "Plant Shutdown", "Major Maintenance", "Revamping", "Service Support"],
    href: "/services/shutdown",
  },
  {
    id: "electrical",
    icon: "zap",
    title: "Electrical & Instrumentation",
    items: ["LV / MV System", "Cable & Cable Tray", "Instrumentation", "PLC & Automation", "Telecommunication"],
    href: "/services/electrical",
  },
  {
    id: "civil",
    icon: "building2",
    title: "Civil Construction",
    items: ["Foundation", "Building", "Road & Drainage", "Concrete Work", "Structure Work"],
    href: "/services/civil",
  },
  {
    id: "renewable",
    icon: "leaf",
    title: "Renewable & Environment",
    items: ["Solar Energy", "Hydro Power", "Water Treatment", "Waste Management", "Sustainable Solution"],
    href: "/services/renewable",
  },
  {
    id: "fabrication",
    icon: "factory",
    title: "Fabrication",
    items: ["Workshop Fabrication", "Skid Package", "Pressure Vessel", "Pipe Spool", "Steel Structure"],
    href: "/services/fabrication",
  },
  {
    id: "water",
    icon: "droplets",
    title: "Water Treatment",
    items: ["WTP", "WWTP", "RO Plant", "Dosing System", "Water Storage"],
    href: "/services/water-treatment",
  },
];

// ─── Company Stats ────────────────────────────────────────────
export interface Stat {
  icon: string;
  value: string;
  suffix: string;
  label: string;
  sublabel: string;
}

export const stats: Stat[] = [
  { icon: "users", value: "150", suffix: "+", label: "Profesional", sublabel: "Berpengalaman" },
  { icon: "calendar", value: "20", suffix: "+", label: "Tahun", sublabel: "Pengalaman" },
  { icon: "briefcase", value: "50", suffix: "+", label: "Proyek", sublabel: "Selesai" },
  { icon: "map-pin", value: "12", suffix: "+", label: "Lokasi Kerja", sublabel: "di Indonesia" },
  { icon: "shield-check", value: "1.5", suffix: "+", label: "Juta Jam Kerja", sublabel: "Tanpa Lost Time Injury" },
];

// ─── Projects ─────────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  year: number;
  owner: string;
  industry: string;
  location: string;
  scope: string;
  value: string;
  category: string;
  // Replace with real image paths in public/images/projects/
  imagePlaceholder: string;
}

export const projects: Project[] = [
  {
    id: "ocs-medco-musi",
    title: "OCS Medco Energi Musi Banyuasin",
    year: 2026,
    owner: "MedcoEnergi",
    industry: "Oil & Gas",
    location: "South Sumatera",
    scope: "Civil Construction, Mechanical, Piping, E&I",
    value: "Rp 37,05 Miliar",
    category: "oil-gas",
    imagePlaceholder: "from-slate-700 to-slate-900",
  },
  {
    id: "rimau-field",
    title: "Rimau Field Development",
    year: 2025,
    owner: "Pertamina",
    industry: "Oil & Gas",
    location: "South Sumatera",
    scope: "Pipeline, Civil, Mechanical",
    value: "Rp 28,7 Miliar",
    category: "oil-gas",
    imagePlaceholder: "from-blue-900 to-slate-900",
  },
  {
    id: "gathering-station",
    title: "Gathering Station Upgrade",
    year: 2024,
    owner: "PHE",
    industry: "Oil & Gas",
    location: "Riau",
    scope: "Mechanical, Piping, E&I",
    value: "Rp 15,3 Miliar",
    category: "oil-gas",
    imagePlaceholder: "from-gray-700 to-gray-900",
  },
  {
    id: "tank-farm",
    title: "Tank Farm Construction",
    year: 2024,
    owner: "AKR Corporindo",
    industry: "Oil & Gas",
    location: "Jambi",
    scope: "Civil, Mechanical, Piping",
    value: "Rp 21,8 Miliar",
    category: "oil-gas",
    imagePlaceholder: "from-zinc-700 to-zinc-900",
  },
  {
    id: "pipeline-jambi",
    title: "Pipeline Installation Jambi",
    year: 2023,
    owner: "PGN",
    industry: "Oil & Gas",
    location: "Jambi",
    scope: "Pipeline, Civil",
    value: "Rp 12,4 Miliar",
    category: "oil-gas",
    imagePlaceholder: "from-stone-700 to-stone-900",
  },
  {
    id: "gpf-riau",
    title: "Gas Processing Facility Riau",
    year: 2023,
    owner: "Pertamina EP",
    industry: "Oil & Gas",
    location: "Riau",
    scope: "EPC – Civil, Mechanical, Electrical",
    value: "Rp 18,6 Miliar",
    category: "oil-gas",
    imagePlaceholder: "from-neutral-700 to-neutral-900",
  },
];

// ─── Why EKP ──────────────────────────────────────────────────
export const whyItems = [
  {
    icon: "shield-check",
    title: "Safety First",
    description: "Komitmen penuh terhadap standar HSE internasional dengan zero-accident target pada setiap proyek.",
  },
  {
    icon: "award",
    title: "Integrity",
    description: "Menjunjung tinggi kejujuran dan transparansi dalam setiap aspek operasional dan bisnis.",
  },
  {
    icon: "star",
    title: "Quality Excellence",
    description: "Sistem manajemen mutu berbasis ISO untuk memastikan hasil pekerjaan sesuai standar tertinggi.",
  },
  {
    icon: "lightbulb",
    title: "Innovation",
    description: "Terus berinovasi dalam metode konstruksi dan teknologi untuk efisiensi proyek terbaik.",
  },
  {
    icon: "handshake",
    title: "Commitment",
    description: "Berkomitmen penuh terhadap timeline, budget, dan kepuasan klien di setiap proyek.",
  },
  {
    icon: "graduation-cap",
    title: "Professionalism",
    description: "Tim profesional berpengalaman yang tersertifikasi di bidang engineering dan konstruksi energi.",
  },
];

// ─── Clients ──────────────────────────────────────────────────
export const clients = [
  { id: "medco", name: "MedcoEnergi", abbreviation: "M+" },
  { id: "pertamina", name: "Pertamina", abbreviation: "PT" },
  { id: "akr", name: "AKR Corporindo", abbreviation: "AKR" },
  { id: "adaro", name: "Adaro Energy", abbreviation: "ADR" },
  { id: "pln", name: "PLN", abbreviation: "PLN" },
  { id: "pgn", name: "PGN", abbreviation: "PGN" },
  { id: "phe", name: "Pertamina Hulu Energi", abbreviation: "PHE" },
  { id: "chevron", name: "Chevron Pacific", abbreviation: "CVX" },
];

// ─── News ─────────────────────────────────────────────────────
export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "EKP Berhasil Selesaikan Proyek OCS Medco Energi di Musi Banyuasin",
    excerpt:
      "PT Energi Konstruksi Prima Nusantara berhasil menyelesaikan proyek Oil Collection Station (OCS) untuk Medco Energi di wilayah Musi Banyuasin, Sumatera Selatan dengan hasil kerja sesuai spesifikasi dan tanpa insiden keselamatan.",
    date: "15 Juni 2026",
    category: "Project Update",
    slug: "ekp-selesaikan-ocs-medco-musi-banyuasin",
  },
  {
    id: "2",
    title: "Komitmen EKP terhadap Standar HSE Internasional Diakui Industri",
    excerpt:
      "EKP meraih penghargaan keselamatan kerja atas pencapaian 1,5 juta jam kerja tanpa Lost Time Injury (LTI), membuktikan komitmen perusahaan terhadap budaya keselamatan kerja kelas dunia.",
    date: "20 Mei 2026",
    category: "Achievement",
    slug: "ekp-raih-penghargaan-keselamatan-1-5-juta-jam",
  },
  {
    id: "3",
    title: "EKP Perluas Portofolio Layanan ke Sektor Renewable Energy",
    excerpt:
      "Merespons tren transisi energi global, EKP resmi memperluas layanannya ke sektor energi terbarukan termasuk Solar Energy, Hydro Power, dan Waste-to-Energy untuk mendukung target net zero Indonesia.",
    date: "10 April 2026",
    category: "Company News",
    slug: "ekp-ekspansi-renewable-energy",
  },
];

// ─── Contact Info ─────────────────────────────────────────────
export const contactInfo = {
  address: "Jl. TB Simatupang No. 123, Jakarta Selatan, DKI Jakarta 12560",
  phone: "+62 21 1234 5678",
  email: "info@ekpn.co.id",
  website: "www.ekpn.co.id",
  whatsapp: "+62 812 3456 7890",
  social: {
    linkedin: "#",
    instagram: "#",
    youtube: "#",
    email: "info@ekpn.co.id",
  },
};
