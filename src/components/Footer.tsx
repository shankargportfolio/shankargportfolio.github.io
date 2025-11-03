import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              Shankar<span className="text-primary-light">.</span>
            </h3>
            <p className="text-background/70">Product Manager | Building Impactful Solutions</p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/gowri-shankar-g-096b3677/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/10 hover:bg-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:shankar@example.com"
              className="p-3 rounded-full bg-background/10 hover:bg-primary transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-background/20 text-center text-background/70 text-sm">
          <p>© {new Date().getFullYear()} Shankar G. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
