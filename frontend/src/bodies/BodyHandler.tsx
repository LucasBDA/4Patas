import { useRef } from "react";
import "../styles/BodyHandler.css";
import ScrollIndicator from "../components/ScrollIndicator";

interface BodyHandlerProps {
  sections: React.ComponentType[];
}

const BodyHandler = ({ sections }: BodyHandlerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

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