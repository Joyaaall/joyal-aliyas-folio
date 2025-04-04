
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profilePlaceholder from "/placeholder.svg";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background pattern with new styling */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(135,79,65,0.08)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h1 className="hero-text mb-4">
              Hi, I'm <span className="text-primary">Joyal Aliyas</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Blending Creativity with Technology
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              Crafting engaging experiences through code and design, blending technical knowledge with creative problem-solving.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="rounded-full">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" asChild className="rounded-full border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-secondary animate-float">
              <img
                src={profilePlaceholder}
                alt="Joyal Aliyas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
