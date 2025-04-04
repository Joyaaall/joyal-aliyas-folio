
import { AnimatedSection } from "../AnimatedSection";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import placeholderImage from "/placeholder.svg";

const achievements = [
  {
    id: 1,
    image: placeholderImage,
    title: "APJ KTU Startup Cell Idea Competition",
    description: "Participated in the prestigious startup idea competition by APJ KTU, presenting innovative technical solutions.",
  },
  {
    id: 2,
    image: placeholderImage,
    title: "School Science Exhibition",
    description: "First prize for an interactive demonstration of programming concepts applied to real-world problems.",
  },
  {
    id: 3,
    image: placeholderImage,
    title: "Python Development Recognition",
    description: "Recognized for creating helpful Python tools for student productivity and learning.",
  },
  {
    id: 4,
    image: placeholderImage,
    title: "Design Challenge",
    description: "Honorable mention for creative graphic design work in a regional student competition.",
  },
];

export function Achievements() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { ref, hasAnimated } = useIntersectionObserver();

  return (
    <AnimatedSection id="achievements" animation="slide-up">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">
          <span className="text-primary">Achievements</span> & Recognitions
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div 
            //@ts-ignore
            ref={ref} 
            className="overflow-x-auto scrollbar-none"
          >
            <div 
              ref={scrollContainerRef} 
              className="flex space-x-6 pb-6 px-4"
              style={{
                minWidth: "100%",
                transform: hasAnimated ? "translateX(0)" : "translateX(100px)",
                opacity: hasAnimated ? 1 : 0,
                transition: "all 0.8s ease-out",
              }}
            >
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="flex-shrink-0 w-80 card-hover rounded-lg overflow-hidden border"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8 text-muted-foreground">
            <p>Scroll horizontally to see more achievements →</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
