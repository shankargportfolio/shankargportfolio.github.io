import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
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
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Career journey spanning product management, business analysis, and engineering
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="hover-lift hover:shadow-lg transition-all duration-300 border-l-4 border-primary group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary transition-colors mt-1">
                      <Briefcase className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-primary font-semibold mt-1">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground md:ml-auto">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium whitespace-nowrap">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {exp.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
