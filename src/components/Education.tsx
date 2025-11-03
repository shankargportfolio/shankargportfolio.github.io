import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap } from "lucide-react";
import vitImage from "@/assets/vit-university.png";
import scsvmvImage from "@/assets/scsvmv-university.png";

const education = [
  {
    degree: "MBA – Finance & Marketing",
    institution: "VIT University",
    period: "2014 – 2016",
    image: vitImage,
  },
  {
    degree: "B.E – Mechanical Engineering",
    institution: "SCSVMV University",
    period: "2009 – 2013",
    image: scsvmvImage,
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic foundation in business and engineering
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="hover-lift hover:shadow-lg transition-all duration-300 border-border group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={edu.image} 
                  alt={edu.institution}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <CardHeader className="relative -mt-6 z-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary shadow-lg">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 font-bold">{edu.degree}</CardTitle>
                    <p className="text-foreground font-bold text-base">{edu.institution}</p>
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
