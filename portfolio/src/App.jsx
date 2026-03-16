import { lazy, Suspense } from 'react';
import ErrorBoundary from './components/ui/ErrorBoundary';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';

const AboutSection          = lazy(() => import('./components/sections/AboutSection'));
const SkillsSection         = lazy(() => import('./components/sections/SkillsSection'));
const ProjectsSection       = lazy(() => import('./components/sections/ProjectsSection'));
const TestimonialSection    = lazy(() => import('./components/sections/TestimonialSection'));
const ExperienceSection     = lazy(() => import('./components/sections/ExperienceSection'));
const CertificationsSection = lazy(() => import('./components/sections/CertificationsSection'));
const BlogSection           = lazy(() => import('./components/sections/BlogSection'));
const ContactSection        = lazy(() => import('./components/sections/ContactSection'));

function SectionLoader() {
  return (
    <div className="flex justify-center items-center py-20" aria-label="Cargando sección">
      <div className="w-5 h-5 rounded-full border-2 border-bg-border border-t-accent-primary animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-bg-base text-text-primary">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent-primary focus:text-bg-base focus:rounded-lg focus:font-medium focus:text-sm"
        >
          Ir al contenido principal
        </a>

        <Navbar />

        <main id="main-content">
          <HeroSection />

          <Suspense fallback={<SectionLoader />}>
            <AboutSection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <SkillsSection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <ProjectsSection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <TestimonialSection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <ExperienceSection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <CertificationsSection />
          </Suspense>

          {/* Blog — demuestra pensamiento técnico y comunicación */}
          <Suspense fallback={<SectionLoader />}>
            <BlogSection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <ContactSection />
          </Suspense>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}
