import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

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
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
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
          {numPages > 0 && (
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPageNumber((prev) => Math.max(1, prev - 1))}
                disabled={pageNumber <= 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {pageNumber} of {numPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPageNumber((prev) => Math.min(numPages, prev + 1))}
                disabled={pageNumber >= numPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 p-4 overflow-auto flex justify-center bg-muted/20">
        <Document
          file={project.file}
          onLoadSuccess={onDocumentLoadSuccess}
          className="max-w-5xl"
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className="shadow-lg"
            width={Math.min(1200, window.innerWidth - 100)}
          />
        </Document>
      </div>
    </div>
  );
};

export default ProjectViewer;
