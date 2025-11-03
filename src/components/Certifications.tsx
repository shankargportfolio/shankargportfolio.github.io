import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Award, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    title: "SAFe 6.0 Product Manager/Product Owner",
    issuer: "Scaled Agile",
    year: "2024",
  },
  {
    title: "SAFe 6.0 Scrum Master",
    issuer: "Scaled Agile",
    year: "2024",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2021",
  },
  {
    title: "Harness Cloud Cost Management",
    issuer: "Harness Cloud",
    year: "2024",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications demonstrating expertise and continuous learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="hover-lift hover:shadow-lg transition-all duration-300 border-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary transition-colors w-fit">
                  <Award className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">{cert.issuer}</span>
                </div>
                <div className="text-sm font-semibold text-primary">{cert.year}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
