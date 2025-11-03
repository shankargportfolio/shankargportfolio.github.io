import { Badge } from "./ui/badge";
import { Target, TrendingUp, Zap, Wrench } from "lucide-react";

const skillCategories = [
  {
    category: "Product Management",
    icon: Target,
    skills: [
      "Product Lifecycle Management",
      "Product Strategy",
      "Feature Prioritization",
      "Product Roadmapping",
      "Go-To-Market Strategy",
      "MVP Delivery",
    ],
  },
  {
    category: "Business & Strategy",
    icon: TrendingUp,
    skills: [
      "User Research",
      "Market Sizing",
      "Competitor Analysis",
      "Stakeholder Management",
      "Risk Analysis",
      "Business Transformation",
    ],
  },
  {
    category: "Agile & Delivery",
    icon: Zap,
    skills: [
      "Agile Sprint Planning",
      "Product Backlog",
      "User Stories",
      "SAFe 6.0",
      "Scrum Master",
      "Problem Solving",
    ],
  },
  {
    category: "Technical & Tools",
    icon: Wrench,
    skills: [
      "SaaS Product Delivery",
      "UI/UX Design",
      "Power BI",
      "AWS",
      "Azure",
      "GCP",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Core competencies spanning product management, strategy, and technical delivery
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.category}
                className="bg-card border border-border rounded-xl p-6 space-y-4 animate-fade-in hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <IconComponent className="w-6 h-6 text-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="px-4 py-2 text-sm font-medium bg-primary/90 text-primary-foreground hover:bg-primary transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
