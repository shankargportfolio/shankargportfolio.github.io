import { Badge } from "./ui/badge";

const skillCategories = [
  {
    category: "Product Management",
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
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Core competencies spanning product management, strategy, and technical delivery
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="space-y-4 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-foreground border-l-4 border-primary pl-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-muted hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
