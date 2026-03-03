import { useState, useEffect } from "react";
import "../styles/ScrollIndicator.css";

interface ScrollIndicatorProps {
  totalSections: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const ScrollIndicator = ({ totalSections, containerRef }: ScrollIndicatorProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const sectionHeight = container.clientHeight || window.innerHeight;
      const currentIndex = Math.round(container.scrollTop / sectionHeight);
      setActiveIndex(currentIndex);
    };

    // set initial index
    handleScroll();

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);

  const scrollToSection = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollTo({
      top: container.clientHeight * index,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-indicator">
      {Array.from({ length: totalSections }).map((_, index) => (
        <button
          key={index}
          className={`scroll-dot ${activeIndex === index ? "active" : ""}`}
          onClick={() => scrollToSection(index)}
        />
      ))}
    </div>
  );
};

export default ScrollIndicator;