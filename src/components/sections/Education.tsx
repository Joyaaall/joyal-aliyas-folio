
import { AnimatedSection } from "../AnimatedSection";
import { School, Briefcase, Calendar } from "lucide-react";

type TimelineItem = {
  id: number;
  title: string;
  institution: string;
  period: string;
  description: string;
  type: "education" | "experience";
};

export function Education() {
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: "Computer Science Engineering",
      institution: "Adi Shankara Institute",
      period: "2024 - Present",
      description: "Currently studying Computer Science Engineering with focus on software development and design.",
      type: "education",
    },
    {
      id: 2,
      title: "Higher Secondary Education",
      institution: "St. Peters Higher Secondary School",
      period: "2022 - 2024",
      description: "Completed higher secondary education with focus on science and computer studies.",
      type: "education",
    },
    {
      id: 3,
      title: "High School",
      institution: "Baselius Augen Public School",
      period: "2011 - 2022",
      description: "Completed formative education with strong foundation in mathematics and sciences.",
      type: "education",
    },
    {
      id: 4,
      title: "Python Applications Development",
      institution: "Self-directed & Collaborative Projects",
      period: "2024 - Present",
      description: "Developing practical applications with Python, focusing on automation, data processing, and user interfaces.",
      type: "experience",
    },
    {
      id: 5,
      title: "Python Learning & Peer Assistance",
      institution: "School & Community",
      period: "2022 - 2024",
      description: "Self-taught Python programming while helping peers learn coding fundamentals and problem-solving techniques.",
      type: "experience",
    },
    {
      id: 6,
      title: "Presentations & Visual Aids",
      institution: "School Projects & Events",
      period: "2018 - 2021",
      description: "Created visual presentations and educational materials for school events and academic projects.",
      type: "experience",
    },
  ];

  return (
    <AnimatedSection id="education" animation="slide-up">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">
          Education & <span className="text-primary">Experience</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {timelineItems.map((item, index) => (
            <div
              key={item.id}
              className="timeline-item"
            >
              <div className="flex items-start">
                <div className="mt-1">
                  {item.type === "education" ? (
                    <School className="h-6 w-6 text-primary" />
                  ) : (
                    <Briefcase className="h-6 w-6 text-primary" />
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <span>{item.institution}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
