import { Button } from "./ui/button";
import { Linkedin, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center section-padding relative overflow-hidden">
      {/* Abstract minimal background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" className="text-primary/10" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex items-start gap-8">
          {/* Left side - Information */}
          <div className="flex-1 space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-primary font-medium text-2xl">Good day! 👋</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to my portfolio,
              <br />
              <span className="inline-block mt-3">I am <span className="text-primary">Shankar</span></span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-bold">
              With <span className="font-bold text-foreground">9.8+ years of experience</span>, I enable organizations to build products that solve real problems and deliver measurable business impact.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground"
                asChild
              >
                <a href="https://www.linkedin.com/in/shankar-ganapathi-4a38a957/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
              
              <div className="flex gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToProjects}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  View My Work
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="https://drive.google.com/file/d/16GVc1C5vG7lxUMPP47F_OGYkwI0UtV-5/view" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-2">Product Manager specializing in</p>
              <div className="flex flex-wrap gap-2">
                {["SaaS", "Cloud FinOps", "Product Strategy", "MVP Delivery"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted text-foreground rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side - Photo in corner */}
          <div className="relative w-64 lg:w-80 shrink-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
              <img
                src={profilePhoto}
                alt="Shankar G - Product Manager"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Minimal badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-card rounded-xl shadow-lg px-4 py-2 border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">9.8+</div>
                <div className="text-xs text-muted-foreground whitespace-nowrap">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
