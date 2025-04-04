
import { AnimatedSection } from "../AnimatedSection";
import { Camera, Music, Globe, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Hobbies() {
  const interests = [
    {
      id: 1,
      icon: <Camera className="h-8 w-8" />,
      title: "Photography",
      description: "Capturing moments and exploring visual storytelling through different photography styles.",
    },
    {
      id: 2,
      icon: <Music className="h-8 w-8" />,
      title: "Music",
      description: "Playing guitar and piano, exploring various genres from classical to modern indie.",
    },
    {
      id: 3,
      icon: <Globe className="h-8 w-8" />,
      title: "Travel",
      description: "Experiencing different cultures, landscapes, and cuisines around the world.",
    },
    {
      id: 4,
      icon: <Palette className="h-8 w-8" />,
      title: "Design",
      description: "Exploring visual arts, typography, and emerging design trends as both hobby and profession.",
    },
  ];

  return (
    <AnimatedSection className="bg-muted/20 py-24" animation="slide-up">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">
          Interests & <span className="text-primary">Hobbies</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest) => (
            <Card key={interest.id} className="card-hover border bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="mb-4 text-primary flex justify-center">
                  {interest.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
                <p className="text-muted-foreground">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
