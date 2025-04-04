
import { AnimatedSection } from "../AnimatedSection";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useState, useEffect } from "react";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay: number;
}

function SkillBar({ name, percentage, delay }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const { ref, hasAnimated } = useIntersectionObserver();

  useEffect(() => {
    if (hasAnimated) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [hasAnimated, percentage, delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-sm font-semibold">{percentage}%</span>
      </div>
      <div className="skill-bar-container">
        {/* @ts-ignore */}
        <div ref={ref} className="skill-bar" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
}

export function Skills() {
  const designSkills = [
    { name: "UI/UX Design", percentage: 85 },
    { name: "Graphic Design", percentage: 90 },
    { name: "Typography", percentage: 75 },
    { name: "Motion Graphics", percentage: 65 },
  ];

  const developmentSkills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 80 },
    { name: "Python", percentage: 75 },
  ];

  const otherSkills = [
    { name: "Problem Solving", percentage: 90 },
    { name: "Project Management", percentage: 75 },
    { name: "Communication", percentage: 85 },
    { name: "Adaptability", percentage: 90 },
  ];

  return (
    <AnimatedSection id="skills" animation="slide-up">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">
          My <span className="text-primary">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="card-hover p-8 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold mb-6">Design</h3>
            {designSkills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 100}
              />
            ))}
          </div>
          
          <div className="card-hover p-8 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold mb-6">Development</h3>
            {developmentSkills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 100 + 400}
              />
            ))}
          </div>
          
          <div className="card-hover p-8 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold mb-6">Other Skills</h3>
            {otherSkills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 100 + 800}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
