import { useState, useMemo, useEffect } from 'react';

/* ── Data ─────────────────────────────────────────────── */
const CATEGORIES = ['All', 'Software & Web', 'SEO & Marketing', 'Academic', '3D Printing', 'Electronics'] as const;
type Category = (typeof CATEGORIES)[number];

interface Project {
  title: string;
  category: Category;
  tag: string;
  description: string;
  image: string;
  images?: string[];
  year: string;
}

const PROJECTS: Project[] = [
  /* ── Software & Web ──────────────────────────────── */
  {
    title: 'Blue Mist Perfumes',
    category: 'Software & Web',
    tag: 'E-commerce Platform',
    description:
      'A premium e-commerce platform built for a luxury perfume brand, featuring immersive product storytelling and seamless checkout.',
    image: '/perfume.png',
    year: '2024',
  },
  {
    title: 'Jabal Al Ayham Chocolates',
    category: 'Software & Web',
    tag: 'Premium E-commerce',
    description:
      'An elegant digital storefront for artisanal chocolates, designed with a focus on high-quality visuals, a bespoke product detail UI, and intuitive navigation.',
    image: '/chocolate.png',
    images: ['/chocolate.png', '/chocolate_product.png'],
    year: '2024',
  },
  {
    title: 'FR Associates',
    category: 'Software & Web',
    tag: 'Corporate Website',
    description:
      'A highly professional, secure digital presence for an elite financial and tax advisory firm based in Abu Dhabi.',
    image: '/frassociates.png',
    year: '2023',
  },
  {
    title: 'High-Performance Backend Systems',
    category: 'Software & Web',
    tag: 'API Architecture',
    description:
      'Robust server-side development utilizing Golang, Python, Java, Node.js, and C++ to power scalable microservices, RESTful APIs, and enterprise cloud infrastructure.',
    image: '/academic-cs.png',
    year: '2024',
  },
  {
    title: 'Native & Cross-Platform Mobile Apps',
    category: 'Software & Web',
    tag: 'iOS & Android Dev',
    description:
      'End-to-end mobile app development using Swift (iOS), Kotlin (Android), Flutter, and React Native. Building fluid, high-conversion native experiences with seamless backend integration.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
    year: '2024',
  },

  /* ── SEO & Marketing ──────────────────────────────── */
  {
    title: 'E-commerce SEO Blitz',
    category: 'SEO & Marketing',
    tag: 'Growth Strategy',
    description:
      'Data-driven SEO overhaul for a leading e-commerce brand — delivering 300% organic traffic growth within six months.',
    image: '/seo-ecommerce.png',
    year: '2023',
  },
  {
    title: 'B2B Lead Engine',
    category: 'SEO & Marketing',
    tag: 'Performance Marketing',
    description:
      'Full-funnel demand generation strategy with technical SEO, paid search, and conversion-rate optimization.',
    image: '/b2b-lead-engine.png',
    year: '2024',
  },

  /* ── Academic ─────────────────────────────────────── */
  {
    title: 'Physics',
    category: 'Academic',
    tag: 'Academic Consulting',
    description:
      'Comprehensive research and assignment support covering classical mechanics, quantum physics, and electromagnetism.',
    image: '/academic-physics.png',
    year: '2024',
  },
  {
    title: 'Mathematics',
    category: 'Academic',
    tag: 'Academic Consulting',
    description:
      'Rigorous guidance for pure and applied mathematics, including advanced calculus, linear algebra, and differential equations.',
    image: '/academic-math.png',
    year: '2024',
  },
  {
    title: 'Computer Science',
    category: 'Academic',
    tag: 'Research Support',
    description:
      'End-to-end support for software engineering projects, data structures, algorithms, and full-stack development assignments.',
    image: '/academic-cs.png',
    year: '2024',
  },
  {
    title: 'Data Science',
    category: 'Academic',
    tag: 'Research Support',
    description:
      'Expert assistance with Python, machine learning models, neural networks, and statistical data visualization dashboards.',
    image: '/academic-data.png',
    year: '2024',
  },
  {
    title: 'Data Visualization & BI',
    category: 'Academic',
    tag: 'Data Science',
    description:
      'Expert tutoring and project support in data storytelling and complex statistical modeling using Power BI, Tableau, JASP, SPSS, R, and Stata.',
    image: '/seo-ecommerce.png',
    year: '2024',
  },
  {
    title: 'Biology & Medical Sciences',
    category: 'Academic',
    tag: 'Academic Consulting',
    description:
      'Rigorous academic support for life sciences, including bioinformatics, molecular biology research, and medical science assignments.',
    image: '/academic-bio.png',
    year: '2023',
  },
  {
    title: 'Engineering & Architecture',
    category: 'Academic',
    tag: 'Design & Analysis',
    description:
      'Professional guidance on CAD modeling, structural analysis, thermodynamics, and civil engineering frameworks.',
    image: '/academic-engineering.png',
    year: '2024',
  },
  {
    title: 'Business & Finance',
    category: 'Academic',
    tag: 'Academic Consulting',
    description:
      'Strategic support for MBA-level assignments, financial forecasting, market analysis, and corporate economics.',
    image: '/academic-business.png',
    year: '2024',
  },
  {
    title: 'Humanities & Social Sciences',
    category: 'Academic',
    tag: 'Research Support',
    description:
      'Extensive research methodology and literature review assistance across psychology, sociology, and historical studies.',
    image: '/academic-humanities.png',
    year: '2023',
  },
  {
    title: 'Law & Legal Studies',
    category: 'Academic',
    tag: 'Academic Consulting',
    description:
      'Detailed analytical support for contract law, international legal frameworks, and comprehensive case study evaluations.',
    image: '/academic-law.png',
    year: '2024',
  },

  /* ── 3D Printing ──────────────────────────────────── */
  {
    title: 'Custom FPV Drone Chassis',
    category: '3D Printing',
    tag: 'Rapid Prototyping',
    description:
      'Lightweight carbon-reinforced PLA drone frame designed in Fusion 360 and printed on Creality Ender 3 — optimized for FPV racing with integrated motor mounts.',
    image: '/3d-printing.png',
    year: '2024',
  },
  {
    title: 'Architectural Scale Models',
    category: '3D Printing',
    tag: 'Design & Fabrication',
    description:
      'High-fidelity architectural scale models for real estate developers, printed in multi-material PLA with post-processing for presentation-grade finish.',
    image: '/3d-architecture.png',
    year: '2024',
  },
  {
    title: 'Custom Enclosures & Housings',
    category: '3D Printing',
    tag: 'Product Design',
    description:
      'Bespoke 3D-printed enclosures for IoT devices, Raspberry Pi clusters, and industrial sensors — from CAD modeling to finished product.',
    image: '/3d-enclosure.png',
    year: '2023',
  },

  /* ── Electronics ──────────────────────────────────── */
  {
    title: 'Arduino Smart Irrigation System',
    category: 'Electronics',
    tag: 'Arduino Project',
    description:
      'Automated greenhouse irrigation using Arduino Mega, soil moisture sensors, and relay modules — with mobile app monitoring via Bluetooth.',
    image: '/arduino.png',
    year: '2024',
  },
  {
    title: 'Raspberry Pi Home Automation Hub',
    category: 'Electronics',
    tag: 'Raspberry Pi · IoT',
    description:
      'Full-stack smart home controller powered by Raspberry Pi 4 with a custom 3D-printed enclosure, touchscreen UI, and MQTT integration for 50+ devices.',
    image: '/raspberry-pi.png',
    year: '2024',
  },
  {
    title: 'Industrial Sensor Network',
    category: 'Electronics',
    tag: 'ESP32 · LoRa',
    description:
      'Long-range industrial monitoring network using ESP32 and LoRa modules — tracking temperature, humidity, and vibration across factory floors in real time.',
    image: '/electronics-lora.png',
    year: '2023',
  },
];

/* ── Image Slider ─────────────────────────────────────── */
function ImageSlider({ images, alt }: { images: string[], alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 1) {
    return (
      <img
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        src={images[0]}
        loading="lazy"
      />
    );
  }

  return (
    <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-700 ease-out">
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`${alt} ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          loading="lazy"
        />
      ))}
      <div className="absolute bottom-sm left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Project Card ─────────────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group block project-card"
      id={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-md bg-surface-dim">
        <ImageSlider images={project.images || [project.image]} alt={project.title} />
      </div>
      <div className="space-y-xs">
        <div className="flex items-center justify-between">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
            {project.tag}
          </span>
          <span className="font-body-sm text-body-sm text-outline">{project.year}</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-on-surface-variant font-body-sm text-body-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
}

/* ── Featured Hero Card ───────────────────────────────── */
function FeaturedCard({ project }: { project: Project }) {
  return (
    <div
      className="group block project-card col-span-1 md:col-span-2"
      id="featured-project"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
        <div className="aspect-[4/3] lg:aspect-[3/2] w-full overflow-hidden rounded-lg bg-surface-dim">
          <ImageSlider images={project.images || [project.image]} alt={project.title} />
        </div>
        <div className="space-y-md py-sm">
          <div className="flex items-center gap-md">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
              {project.tag}
            </span>
            <span className="w-6 h-[1px] bg-outline" />
            <span className="font-body-sm text-body-sm text-outline">{project.year}</span>
          </div>
          <h3 className="font-headline-lg text-headline-lg text-on-surface font-semibold group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed max-w-md">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Main Portfolio Section ───────────────────────────── */
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const featured = filtered[0];
  const grid = filtered.slice(1);

  return (
    <section
      className="py-2xl px-margin-mobile md:px-margin-desktop bg-background"
      id="portfolio"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-xl">
          <span className="inline-flex items-center gap-xs text-on-surface-variant font-label-md text-label-md tracking-widest uppercase mb-md">
            <span className="w-8 h-[1px] bg-outline" />
            Portfolio
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">
            Featured Projects
          </h2>
          <p className="text-body-lg text-on-surface-variant font-body-lg max-w-xl">
            A curated selection of our most impactful work across web development, growth strategy, academic consulting, 3D printing, and electronics engineering.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-lg mb-2xl border-b border-surface-dim pb-md overflow-x-auto hide-scrollbar snap-x">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-tab whitespace-nowrap font-label-md text-label-md uppercase tracking-wider pb-sm snap-start ${
                activeFilter === cat
                  ? 'active text-on-surface'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Project (Hero) */}
        {featured && (
          <div className="mb-2xl border-b border-surface-dim pb-2xl">
            <FeaturedCard project={featured} />
          </div>
        )}

        {/* Project Grid */}
        {grid.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-xl">
            {grid.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-2xl">
            <p className="text-on-surface-variant font-body-lg text-body-lg">
              No projects in this category yet. Check back soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
