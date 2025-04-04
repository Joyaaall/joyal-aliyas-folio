
import { AnimatedSection } from "../AnimatedSection";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function About() {
  const tools = [
    "Photoshop",
    "Illustrator",
    "Figma",
    "After Effects",
    "Premiere Pro",
    "Visual Studio Code"
  ];

  const languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java"
  ];

  return (
    <AnimatedSection id="about" className="bg-muted/20 py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold mb-4">
              I'm a multidisciplinary designer and developer
            </h3>
            <p className="text-lg text-muted-foreground">
              I'm a Computer Science student with a passion for graphic design and development, 
              currently balancing academic pursuits with creative projects.
            </p>
            <p className="text-lg text-muted-foreground">
              My background spans both technical and creative fields, allowing me to approach 
              problems from multiple angles. I enjoy creating solutions that are both functional and aesthetically pleasing.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding or designing, you can find me exploring photography, 
              learning new music, or planning my next travel adventure.
            </p>
            
            <Button variant="outline" className="mt-4 rounded-full">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-hover p-8 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-4">Design Tools</h3>
              <ul className="space-y-2">
                {tools.map((tool, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="card-hover p-8 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <ul className="space-y-2">
                {languages.map((language, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span>{language}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
