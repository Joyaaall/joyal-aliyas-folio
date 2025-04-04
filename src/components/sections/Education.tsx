
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
      title: "Bachelor of Computer Science",
      institution: "University of Technology",
      period: "2020 - Present",
      description: "Focusing on software development, data structures, and human-computer interaction with a minor in design studies.",
      type: "education",
    },
    {
      id: 2,
      title: "High School Diploma",
      institution: "International School",
      period: "2016 - 2020",
      description: "Graduated with honors, focusing on mathematics, physics, and computer science.",
      type: "education",
    },
    {
      id: 3,
      title: "Graphic Design Intern",
      institution: "Creative Studio",
      period: "Summer 2022",
      description: "Assisted with brand identity projects, created social media assets, and participated in client presentations.",
      type: "experience",
    },
    {
      id: 4,
      title: "Web Developer (Part-time)",
      institution: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: "Developing responsive websites for clients, implementing UI/UX designs, and maintaining existing web applications.",
      type: "experience",
    },
    {
      id: 5,
      title: "UI/UX Design Course",
      institution: "Design Academy Online",
      period: "2021",
      description: "Completed an intensive 12-week course on user interface and experience design principles and practices.",
      type: "education",
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
