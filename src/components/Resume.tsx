import { Button } from "./ui/button";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10">
            <FileText className="h-12 w-12 text-primary" />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Download My <span className="text-primary">Resume</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get a comprehensive overview of my experience, skills, and achievements in a single document.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1WqIxpx-PEFSEhvk4gZwPB8hPx2q2q50B/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Let's connect and discuss how I can help build impactful products for your organization
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
