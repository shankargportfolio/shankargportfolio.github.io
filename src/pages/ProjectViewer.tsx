import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const projectFiles: Record<string, { title: string; file: string }> = {
  "prd-lab-instruments": {
    title: "PRD for Lab Instruments Calibration",
    file: "/projects/prd-lab-instruments.pdf",
  },
  "market-size-smart-home": {
    title: "Market Size of Smart Home Solutions in India",
    file: "/projects/market-size-smart-home.pdf",
  },
  "customer-support": {
    title: "Transforming Customer Support into a Proactive Growth Engine",
    file: "/projects/customer-support-case-study.pdf",
  },
  "marketplace-wireframe": {
    title: "Marketplace for Cloud Services Catalog",
    file: "/projects/marketplace-wireframe.pdf",
  },
};

const ProjectViewer = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectId ? projectFiles[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <h1 className="text-lg font-semibold text-foreground">{project.title}</h1>
        </div>
      </div>
      <div className="flex-1 bg-muted/20">
        <object
          data={project.file}
          type="application/pdf"
          className="w-full h-full min-h-[calc(100vh-5rem)]"
          aria-label={project.title}
        >
          <div className="flex items-center justify-center h-full p-8">
            <div className="text-center">
              <p className="text-muted-foreground">
                Unable to display PDF in this browser.
              </p>
            </div>
          </div>
        </object>
      </div>
    </div>
  );
};

export default ProjectViewer;
