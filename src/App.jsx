import React, { useState, useEffect } from 'react';
import AnimatedBackground from './components/Background/AnimatedBackground';
import CustomCursor from './components/Cursor/CustomCursor';
import ScrollProgress from './components/Common/ScrollProgress';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import SkillsSection from './components/Skills/SkillsSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import FreelanceSection from './components/Freelance/FreelanceSection';
import ExperienceSection from './components/Experience/ExperienceSection';
import ServicesSection from './components/Services/ServicesSection';
import GithubSection from './components/GithubTerminal/GithubSection';
import ResumeCTA from './components/Resume/ResumeCTA';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';
import ResumeModal from './components/Modals/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [contactPrefillSubject, setContactPrefillSubject] = useState('');

  const handleFreelanceContact = () => {
    setContactPrefillSubject('Freelance Project Inquiry');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'services', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050609] text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Interactive Canvas Background */}
      <AnimatedBackground />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <HeroSection onOpenResume={() => setIsResumeModalOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <FreelanceSection onStartProject={handleFreelanceContact} />
        <ExperienceSection />
        <ServicesSection />
        <GithubSection />
        <ResumeCTA onOpenResume={() => setIsResumeModalOpen(true)} />
        <ContactSection prefillSubject={contactPrefillSubject} onSubjectClear={() => setContactPrefillSubject('')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer/Downloader Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
