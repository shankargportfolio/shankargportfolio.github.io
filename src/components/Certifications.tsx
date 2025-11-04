import { useState } from "react";
import { Card } from "./ui/card";
import { X } from "lucide-react";
import certPopm from "@/assets/cert-popm.jpg";
import certScrumMaster from "@/assets/cert-scrum-master.jpg";
import certAws from "@/assets/cert-aws.jpg";
import certHarness from "@/assets/cert-harness.jpg";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog";

const certifications = [
  {
    title: "SAFe 6.0 Product Manager/Product Owner",
    issuer: "Scaled Agile",
    year: "2024",
    image: certPopm,
  },
  {
    title: "SAFe 6.0 Scrum Master",
    issuer: "Scaled Agile",
    year: "2024",
    image: certScrumMaster,
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2021",
    image: certAws,
  },
  {
    title: "Harness Cloud Cost Management",
    issuer: "Harness Cloud",
    year: "2024",
    image: certHarness,
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card
                  className="hover-lift hover:shadow-xl transition-all duration-300 border-border group overflow-hidden cursor-pointer h-64"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold text-sm mb-1 leading-tight">{cert.title}</h3>
                      <p className="text-xs opacity-90">{cert.issuer}</p>
                      <p className="text-xs font-semibold mt-1">{cert.year}</p>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0 bg-primary/95">
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto max-h-[85vh] object-contain"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable={false}
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
