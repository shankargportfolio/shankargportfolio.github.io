import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { FileText, BookOpen, Layout, ExternalLink } from "lucide-react";

const projects = [
  {
    icon: FileText,
    title: "PRD for Lab Instruments Calibration",
    description: "Lab instruments require regular calibration for accurate results. Labs currently rely on manual tracking or spreadsheets, leading to missed events or non-compliance. The Auto-Calibrate Workflow Tracker will automate this process and integrate with internal systems.",
    link: "https://docs.google.com/document/d/1Nz_kAOxUiQtE9_Bc_q-MImY8qO-3YiSVCfppIpGsW3I/edit?usp=sharing",
    type: "PRD",
  },
  {
    icon: BookOpen,
    title: "Market Size of Smart Home Solutions in India",
    description: "Analyzed market potential, target customer segments, and key product features for Space Tech Innovators Inc. to diversify into the smart home solutions market in India.",
    link: "https://docs.google.com/document/d/1M1pbhNdAEQ-CvOPWaMLjcBZS3xp2hJJvM1b8IIdtPIM/edit?usp=sharing",
    type: "Case Study",
  },
  {
    icon: BookOpen,
    title: "Transforming Customer Support into a Proactive Growth Engine",
    description: "Automated manual support ticket handling of 10,000 daily emails, improving tagging consistency and reducing user frustration caused by robotic responses.",
    link: "https://docs.google.com/document/d/1Ib9o7gDKNUY9OxUBwXIdClMOJe53b_DXBNDxgWNtB2E/edit?usp=sharing",
    type: "Case Study",
  },
  {
    icon: Layout,
    title: "Marketplace for Cloud Services Catalog",
    description: "Wireframe showcasing a cloud product marketplace for purchasing cloud service blueprints. Includes 2 versions and cart design for checkout.",
    link: "https://www.figma.com/design/V0lxSH2x9llCFoiSILjwDD/Wire-frame---Marketplace-for-cloud-services?node-id=0-1&t=Fhd5Ju08QaJwfXPa-1",
    type: "Wireframe",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Project <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            PRDs, Case Studies, and Wireframes showcasing product strategy and delivery
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="hover-lift hover:shadow-lg transition-all duration-300 border-border group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {project.type}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:shadow-md"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View {project.type}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
