import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
        <Experience />
        <Education />
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
