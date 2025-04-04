
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animation?: 
    | "fade-in" 
    | "slide-up" 
    | "slide-in-left" 
    | "slide-in-right";
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  id,
  animation = "fade-in",
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, hasAnimated } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  return (
    <section
      id={id}
      //@ts-ignore
      ref={ref}
      className={cn(
        "py-20 w-full",
        className,
        hasAnimated ? `animate-${animation}` : "opacity-0"
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards" 
      }}
    >
      {children}
    </section>
  );
}
