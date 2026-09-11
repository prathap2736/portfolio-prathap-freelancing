import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, ArrowUpRight, Filter } from 'lucide-react';
import ProjectModal from '../Modals/ProjectModal';
import SectionHeading from '../Common/SectionHeading';
import SpotlightCard from '../Common/SpotlightCard';

const projectsList = [
  {
    id: 'inspirex',
    title: 'InspireX',
    subtitle: 'Creative Web Design',
    category: 'Creative Web Design',
    description: 'A modern and visually engaging creative web design platform focused on delivering elegant layouts, smooth interactions, responsive design and memorable user experiences.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
    filters: ['Frontend'],
    image: '/assets/projects/inspirex.png',
    accent: 'from-violet-500/30 via-cyan-500/20 to-slate-950',
    spotlight: 'rgba(168, 85, 247, 0.18)',
    badge: 'CREATIVE WEB DESIGN',
    number: '01',
    featured: false,
    overview: 'InspireX is a creative web design showcase built to demonstrate modern visual storytelling, interactive UI elements, and responsive frontend craftsmanship in a premium, minimal aesthetic.',
    problem: 'The client needed a polished digital presence that stood out visually while maintaining a clean and mobile-friendly experience across devices.',
    solution: 'We designed a modern landing experience with layered gradients, rich typography, engaging transitions, and responsive sections that adapt seamlessly across screens.',
    features: ['Modern landing page', 'Creative layouts', 'Responsive design', 'Interactive UI components', 'Smooth animations', 'Modern typography', 'Mobile-first design', 'Cross-device compatibility'],
    challenges: ['Balancing premium aesthetics with performance', 'Maintaining a consistent design language across sections', 'Ensuring responsive layouts felt polished on mobile'],
    outcome: 'The result is a memorable, conversion-focused design experience that communicates creativity and confidence while staying lightweight and responsive.',
    githubUrl: 'https://github.com/prathap2736/InspireX-Web-Design-Project-in-React',
    demoUrl: 'https://inspirewebdesignproject.netlify.app/',
  },
  {
    id: 'eventhorizon',
    title: 'EventHorizon',
    subtitle: 'Premium Event Management',
    category: 'Premium Event Management',
    description: 'A premium event management platform designed to provide a seamless experience for discovering, organizing and managing events through a modern interactive interface.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    filters: ['Full-Stack', 'React'],
    image: '/assets/projects/eventhorizon.png',
    accent: 'from-cyan-500/30 via-blue-500/20 to-slate-950',
    spotlight: 'rgba(59, 130, 246, 0.18)',
    badge: 'EVENT MANAGEMENT',
    secondaryBadge: 'FULL-STACK',
    number: '02',
    featured: false,
    overview: 'EventHorizon is a premium event management platform that allows users to browse events, review details, register, and manage event activities through a streamlined dashboard.',
    problem: 'Event organizers needed a clear way to present event details, onboard attendees, and manage registrations without friction.',
    solution: 'The platform combines an elegant event discovery interface with intuitive dashboards, registration flows, and responsive data views for organizers and attendees alike.',
    features: ['Event discovery', 'Event details', 'Event registration', 'Event management', 'User-friendly dashboard', 'Responsive interface', 'Interactive event cards', 'Search and filtering', 'Modern UI'],
    challenges: ['Designing a premium yet practical event browsing experience', 'Structuring registration and organizer workflows clearly', 'Maintaining usability across desktop and mobile'],
    outcome: 'The experience delivers a streamlined event lifecycle from discovery to registration and management, with a polished interface that supports growth.',
    githubUrl: 'https://github.com/prathap2736/Event-Management-System-Responsive-Frontend-Web-Application',
    demoUrl: 'https://eventmanagementproject2.netlify.app/',
  },
  {
    id: 'neocart',
    title: 'NeoCart',
    subtitle: 'Smart Shopping Platform',
    category: 'Smart Shopping Platform',
    description: 'A modern smart shopping platform designed to provide a smooth e-commerce experience with product discovery, wishlist management, shopping cart and secure checkout.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    filters: ['Full-Stack', 'React', 'MERN'],
    image: '/assets/projects/neocart.png',
    accent: 'from-emerald-500/30 via-cyan-500/20 to-slate-950',
    spotlight: 'rgba(16, 185, 129, 0.2)',
    badge: 'SMART E-COMMERCE',
    secondaryBadge: 'MERN STACK',
    number: '03',
    featured: true,
    overview: 'NeoCart is a feature-rich e-commerce platform that streamlines product discovery, wishlist actions, cart flows, and secure checkout in a modern shopping experience built for scale.',
    problem: 'Customers needed an intuitive online shopping experience with a clear product journey, secure account flows, and reliable order management capabilities.',
    solution: 'The project introduces a polished storefront, category-based browsing, dynamic cart logic, secure user sessions, and role-aware administration for product management.',
    features: ['User registration and login', 'Product browsing', 'Product search', 'Category filtering', 'Wishlist', 'Shopping cart', 'Checkout', 'User account', 'Order management', 'Responsive design', 'Admin/product management'],
    challenges: ['Balancing retail usability with secure session logic', 'Designing product discovery and cart flows that felt intuitive', 'Supporting both customer and admin workflows cleanly'],
    outcome: 'NeoCart creates a premium shopping experience that blends usability, trust, and operational clarity into a compelling digital commerce journey.',
    githubUrl: 'https://github.com/prathap2736/Neocart-Smart-Shopping-Platform-Full-Stack-E-Commerce-Web-Application',
    demoUrl: '',
  },
  {
    id: 'health-management',
    title: 'Health Management System',
    subtitle: 'Healthcare Management',
    category: 'Healthcare Management',
    description: 'A modern healthcare management platform designed to simplify patient, doctor and appointment management through a centralized digital system.',
    technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    filters: ['Full-Stack', 'React'],
    image: '/assets/projects/health-management.png',
    accent: 'from-rose-500/30 via-teal-500/20 to-slate-950',
    spotlight: 'rgba(251, 113, 133, 0.17)',
    badge: 'HEALTHCARE',
    secondaryBadge: 'FULL-STACK',
    number: '04',
    featured: false,
    overview: 'The Health Management System brings patient, doctor, and appointment workflows into one central platform, improving coordination and visibility across healthcare operations.',
    problem: 'Healthcare teams needed a centralized system to manage appointments, patient records, and staff responsibilities without relying on fragmented manual processes.',
    solution: 'We created a role-aware healthcare dashboard with patient records, scheduling workflows, and doctor-facing tools that make operational management clearer and faster.',
    features: ['Patient management', 'Doctor management', 'Appointment scheduling', 'Patient records', 'Doctor dashboard', 'Appointment tracking', 'User authentication', 'Responsive dashboard', 'Role-based access', 'Clean healthcare UI'],
    challenges: ['Keeping healthcare data organized and accessible', 'Designing a clean dashboard for multiple roles', 'Maintaining trust and clarity in sensitive workflows'],
    outcome: 'The platform improves the daily workflow for healthcare teams by making patient and appointment operations more structured, intuitive, and efficient.',
    githubUrl: 'https://github.com/prathap2736/Health-Management-System',
    demoUrl: '',
  },
  {
    id: 'online-examination',
    title: 'Online Examination System',
    subtitle: 'With Automated Evaluation',
    category: 'EdTech / Examination Platform',
    description: 'A full-stack online examination platform that enables students to attend online exams while automatically evaluating objective answers and generating examination results.',
    technologies: ['React', 'Tailwind CSS', 'Axios', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt'],
    filters: ['Full-Stack', 'React', 'MERN'],
    image: '/assets/projects/online-examination.png',
    accent: 'from-amber-500/25 via-orange-500/20 to-slate-950',
    spotlight: 'rgba(251, 191, 36, 0.18)',
    badge: 'ONLINE EXAMINATION',
    secondaryBadge: 'AUTOMATED EVALUATION',
    tertiaryBadge: 'MERN STACK',
    number: '05',
    featured: false,
    overview: 'This EdTech platform supports exam creation, student participation, timer-based assessments, and automatic scoring across role-based dashboards for students, teachers, and admins.',
    problem: 'Educational institutions needed a streamlined way to create assessments, monitor progress, and evaluate results automatically without manual overhead.',
    solution: 'The platform contains separate role-based portals for students, teachers, and admins, enabling secure exam delivery, scoring automation, and result generation.',
    features: ['Student registration/login', 'Teacher login', 'Admin login', 'Role-based authentication', 'Exam creation', 'Question management', 'Online examination', 'Timer-based exams', 'Automated evaluation', 'Automatic score calculation', 'Result generation', 'Student dashboard', 'Teacher dashboard', 'Admin dashboard', 'Exam history'],
    challenges: ['Creating secure role-based access patterns', 'Designing a fast exam workflow with consistent timing logic', 'Automating evaluation without compromising transparency'],
    outcome: 'The system improves exam delivery and evaluation efficiency while giving institutions a scalable, role-aware assessment workflow.',
    githubUrl: 'https://github.com/prathap2736',
    demoUrl: '',
  },
  {
    id: 'v-trends-menswear',
    title: 'V Trends MensWear',
    subtitle: "Men's Fashion & E-Commerce",
    category: "Men's Fashion & E-Commerce",
    description: 'A modern men\'s fashion e-commerce website designed to provide a stylish and seamless online shopping experience for discovering and purchasing the latest men\'s clothing and fashion products.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Web Design'],
    filters: ['Frontend'],
    image: '/assets/projects/v-trends-menswear.png',
    accent: 'from-stone-300/20 via-amber-500/15 to-slate-950',
    spotlight: 'rgba(245, 158, 11, 0.18)',
    badge: 'MENS FASHION',
    secondaryBadge: 'E-COMMERCE',
    tertiaryBadge: 'RESPONSIVE DESIGN',
    number: '06',
    featured: false,
    overview: 'The goal was to create a visually appealing and responsive men\'s fashion shopping experience with simple navigation, product discovery and interactive shopping elements.',
    problem: 'The fashion brand needed a premium storefront that felt elegant and modern while making shopping simple and responsive across screen sizes.',
    solution: 'The project blends curated product storytelling with clean category sections, polished product cards, and interactive storefront UI designed for a smooth mobile-first shopping flow.',
    features: ['Product browsing', 'Categories', 'Product filtering', 'Shopping cart', 'Wishlist', 'Responsive UI', 'Interactive components', 'Modern men\'s fashion homepage', 'Promotional sections', 'Fashion-focused UI'],
    challenges: ['Creating a responsive fashion layout', 'Designing attractive product cards', 'Maintaining consistent spacing', 'Creating smooth interactions', 'Optimizing the shopping experience'],
    outcome: 'A responsive and visually engaging men\'s fashion e-commerce interface designed for desktop, tablet and mobile users.',
    githubUrl: 'https://github.com/prathap2736',
    demoUrl: 'https://example.com/v-trends-menswear',
  },
];

const filterOptions = ['All', 'Frontend', 'Full-Stack', 'React', 'MERN'];

function ProjectCard({ project, onOpen }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (event) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    setTilt({
      x: (0.5 - py) * 8,
      y: (px - 0.5) * 8,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transformPerspective: 1000,
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      className="project-tilt-shell"
    >
      <SpotlightCard
        spotlightColor={project.spotlight}
        className={`project-card group relative h-full cursor-pointer ${project.featured ? 'md:col-span-2' : ''}`}
        onClick={() => onOpen(project)}
        data-cursor="project"
      >
        <div className={`project-visual relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.accent}`}>
          <img
            src={project.image}
            alt={project.title}
            className="project-preview-image h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
          <div className="project-visual-overlay" />
          <div className="project-visual-top">
            <span className="project-badge">{project.badge}</span>
            <div className="project-arrow">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
          {project.secondaryBadge && (
            <span className="project-sub-badge">{project.secondaryBadge}</span>
          )}
          {project.tertiaryBadge && (
            <span className="project-sub-badge project-sub-badge--alt">{project.tertiaryBadge}</span>
          )}
          <div className="project-image-button">VIEW PROJECT ↗</div>
          <div className="project-number">{project.number}</div>
        </div>

        <div className="project-content px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="project-category">{project.category}</span>
            {project.featured && (
              <span className="featured-pill">FEATURED PROJECT</span>
            )}
          </div>

          <div className="mb-4">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
          </div>

          <p className="project-description">{project.description}</p>

          <div className="project-tech-list">
            {project.technologies.map((tech) => (
              <span key={tech} className="project-tech-tag">{tech}</span>
            ))}
          </div>

          <div className="project-actions">
            <button type="button" className="project-action project-action--primary" onClick={(event) => { event.stopPropagation(); window.open(project.demoUrl, '_blank', 'noopener,noreferrer'); }}>
              Live Demo →
            </button>
            <button type="button" className="project-action project-action--ghost" onClick={(event) => { event.stopPropagation(); window.open(project.githubUrl, '_blank', 'noopener,noreferrer'); }}>
              View Code ↗
            </button>
            <button type="button" className="project-action project-action--muted" onClick={(event) => { event.stopPropagation(); onOpen(project); }}>
              Case Study
            </button>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projectsList
    : projectsList.filter((project) =>
        project.filters.includes(activeFilter) ||
        project.technologies.includes(activeFilter)
      );

  return (
    <section id="projects" className="relative z-10 overflow-hidden py-24 sm:py-28">
      <div className="projects-shell absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Selected Works"
          icon={FolderGit2}
          title="Featured"
          gradientTitle="Projects."
          subtitle="Building meaningful digital experiences with modern technologies."
        />

        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          <div className="mr-2 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-slate-400">
            <Filter className="h-3.5 w-3.5" />
            <span>Filter</span>
          </div>
          {filterOptions.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-xl border px-4 py-2 text-[11px] font-medium font-mono uppercase tracking-[0.18em] transition-all duration-300 ${
                activeFilter === filter
                  ? 'border-cyan-400/60 bg-cyan-500/15 text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.25)]'
                  : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                layout
                className={project.featured ? 'lg:col-span-2' : ''}
              >
                <ProjectCard project={project} onOpen={setSelectedProject} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
}

