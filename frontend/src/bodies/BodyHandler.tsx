import { useRef, useEffect } from "react";
import "../styles/BodyHandler.css";
import ScrollIndicator from "../components/ScrollIndicator";

interface BodyHandlerProps {
  sections: React.ComponentType[];
}

const BodyHandler = ({ sections }: BodyHandlerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // observe sections to add/remove the "in-view" class when they become active
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = Array.from(container.querySelectorAll('.body-section')) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            target.classList.add('in-view');
          } else {
            target.classList.remove('in-view');
          }
        });
      },
      {
        root: container,
        threshold: [0.5],
      }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, [containerRef]);

  return (
    <div className="body-wrapper">
      <div className="body-container" ref={containerRef}>
        {sections.map((Section, index) => (
          <div key={index} className="body-section">
            <Section />
          </div>
        ))}
      </div>

      <ScrollIndicator
        totalSections={sections.length}
        containerRef={containerRef}
      />
    </div>
  );
};

export default BodyHandler;