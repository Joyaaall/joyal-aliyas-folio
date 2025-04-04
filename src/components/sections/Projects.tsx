
import { AnimatedSection } from "../AnimatedSection";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import placeholderImage from "/placeholder.svg";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "design" | "development" | "academic" | "all";
  tools: string[];
  links?: {
    live?: string;
    github?: string;
  };
};

export function Projects() {
  const [filter, setFilter] = useState<"all" | "design" | "development" | "academic">("all");
  
  const projects: Project[] = [
    {
      id: 1,
      title: "First 2D Game in Unity",
      description: "My journey into game development, exploring Unity's 2D capabilities and learning about game mechanics and design principles.",
      image: placeholderImage,
      category: "development",
      tools: ["Unity", "C#", "Game Design"],
      links: {
        github: "https://github.com/Joyaaall",
      },
    },
    {
      id: 2,
      title: "Device Spoofing & Cloud Storage",
      description: "An ethical innovation exploration into cybersecurity and cloud systems, focusing on secure data management and access.",
      image: placeholderImage,
      category: "development",
      tools: ["Python", "Cloud Services", "Security"],
    },
    {
      id: 3,
      title: "OnTrack",
      description: "An offline bus alert system designed to improve commuter experience with reliable notifications and route tracking.",
      image: placeholderImage,
      category: "development",
      tools: ["Mobile Development", "UX Design", "Location Services"],
      links: {
        live: "#",
        github: "https://github.com/Joyaaall",
      },
    },
    {
      id: 4,
      title: "Women's Safety at Night",
      description: "A case study on conditions affecting women's safety at night in India, including recommendations for improvement.",
      image: placeholderImage,
      category: "academic",
      tools: ["Research", "Data Visualization", "Social Analysis"],
    },
    {
      id: 5,
      title: "Brand Identity Design",
      description: "Complete visual identity design for a sustainable fashion brand, including logo, typography, and color palette.",
      image: placeholderImage,
      category: "design",
      tools: ["Illustrator", "Photoshop", "InDesign"],
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects, skills, and achievements with a clean, minimal design.",
      image: placeholderImage,
      category: "development",
      tools: ["React", "Tailwind CSS", "Framer Motion"],
      links: {
        live: "#",
        github: "https://github.com/Joyaaall",
      },
    },
  ];
  
  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  return (
    <AnimatedSection id="projects" className="bg-muted/20 py-24" animation="slide-up">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-6">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A collection of my recent work spanning design, development, and academic research.
        </p>
        
        <div className="flex justify-center mb-12 space-x-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="rounded-full"
          >
            All
          </Button>
          <Button
            variant={filter === "design" ? "default" : "outline"}
            onClick={() => setFilter("design")}
            className="rounded-full"
          >
            Design
          </Button>
          <Button
            variant={filter === "development" ? "default" : "outline"}
            onClick={() => setFilter("development")}
            className="rounded-full"
          >
            Development
          </Button>
          <Button
            variant={filter === "academic" ? "default" : "outline"}
            onClick={() => setFilter("academic")}
            className="rounded-full"
          >
            Academic
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card card-hover">
              <div className="aspect-video mb-4 overflow-hidden rounded-md bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              {project.links && (
                <div className="flex space-x-3 mt-auto">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
