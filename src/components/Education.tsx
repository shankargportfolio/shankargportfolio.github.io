import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "MBA – Finance & Marketing",
    institution: "VIT University",
    period: "2014 – 2016",
  },
  {
    degree: "B.E – Mechanical Engineering",
    institution: "SCSVMV University",
    period: "2009 – 2013",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic foundation in business and engineering
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="hover-lift hover:shadow-lg transition-all duration-300 border-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary transition-colors">
                    <GraduationCap className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{edu.degree}</CardTitle>
                    <p className="text-muted-foreground font-medium">{edu.institution}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <span className="text-sm font-semibold text-primary">{edu.period}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
