import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Product Manager",
    company: "UST Global",
    period: "Jan 2020 – Jun 2025",
    description: "Led SaaS and Cloud FinOps product strategy, design, and delivery—driving MVPs, POCs, and customer-centric features that boosted adoption by 35% and achieved 15%+ cost savings. Defined roadmaps, accelerated Agile delivery, and transformed ideas into impactful, scalable products.",
  },
  {
    title: "Business Analyst",
    company: "HCL Tech",
    period: "Jun 2016 – Dec 2019",
    description: "Delivered automation solutions transforming manual processes into scalable workflows, securing stakeholder buy-in through POCs and proposals. Implemented 17+ use cases across sectors, reducing turnaround times by 45% and driving faster ROI.",
  },
  {
    title: "Graduate Engineer Trainee",
    company: "Indo Auto Tech",
    period: "Sep 2013 – May 2014",
    description: "Supervised and produced automobile spare parts across departments, ensuring quality standards.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Career journey spanning product management, business analysis, and engineering
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="hover-lift hover:shadow-lg transition-all duration-300 border-t-4 border-primary group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary transition-colors">
                    <Briefcase className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{exp.title}</CardTitle>
                    <p className="text-primary font-semibold text-sm">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
