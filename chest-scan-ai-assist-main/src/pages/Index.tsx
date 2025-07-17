import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectOverview from '@/components/ProjectOverview';
import Features from '@/components/Features';
import TryModel from '@/components/TryModel';
import TechStack from '@/components/TechStack';
import ModelPerformance from '@/components/ModelPerformance';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProjectOverview />
      <Features />
      <TryModel />
      <TechStack />
      <ModelPerformance />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
