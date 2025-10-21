import { Button } from "./ui/button";
import { Linkedin } from "lucide-react";
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
      {/* Geometric shapes background */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-primary font-medium text-lg">Good day! 👋</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to my portfolio,<br />
              I am <span className="text-primary">Shankar</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              With <span className="font-semibold text-foreground">9.8+ years of experience</span>, I enable organizations to build products that solve real problems and deliver measurable business impact.
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
              
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToProjects}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View My Work
              </Button>
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
          
          <div className="relative lg:justify-self-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 gradient-accent rounded-2xl rotate-12 opacity-20" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 gradient-primary rounded-2xl -rotate-12 opacity-20" />
              
              {/* Profile photo */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Shankar G - Product Manager"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Stats badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background rounded-2xl shadow-lg p-4 border border-border z-20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">9.8+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
