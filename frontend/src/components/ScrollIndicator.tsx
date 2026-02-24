import { useState, useEffect } from "react";

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
      const sectionHeight = container.clientHeight;
      const currentIndex = Math.round(container.scrollTop / sectionHeight);
      setActiveIndex(currentIndex);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

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