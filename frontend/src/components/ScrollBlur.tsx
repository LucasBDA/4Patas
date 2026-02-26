import { useEffect } from 'react';
import '../styles/ScrollBlur.css';

interface ScrollBlurProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const ScrollBlur = ({ containerRef }: ScrollBlurProps) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const sections = container.querySelectorAll('.body-section');
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).clientHeight;
        const scrollTop = container.scrollTop;
        const containerHeight = container.clientHeight;
        
        // Calcular quanto da seção está visível
        const sectionBottom = sectionTop + sectionHeight;
        const visibleStart = scrollTop;
        const visibleEnd = scrollTop + containerHeight;
        
        const isFullyVisible = sectionTop >= visibleStart && sectionBottom <= visibleEnd;
        const isTransitioning = !(sectionBottom <= visibleStart || sectionTop >= visibleEnd);
        
        if (isTransitioning && !isFullyVisible) {
          // Calcular o progresso da transição (0 a 1)
          let blurAmount = 0;
          const transitionZone = containerHeight * 0.4; // Aumenta a zona de transição
          
          // Se a seção está saindo por cima
          if (sectionBottom < visibleEnd && sectionBottom > visibleStart) {
            blurAmount = (visibleEnd - sectionBottom) / transitionZone;
          }
          // Se a seção está entrando por cima
          else if (sectionTop > visibleStart && sectionTop < visibleEnd) {
            blurAmount = (sectionTop - visibleStart) / transitionZone;
          }
          
          blurAmount = Math.max(0, Math.min(1, blurAmount));
          // Suaviza a curva do blur com easing
          const easedBlur = blurAmount * blurAmount * (3 - 2 * blurAmount); // Smoothstep function
          (section as HTMLElement).style.filter = `blur(${easedBlur * 18}px)`;
          (section as HTMLElement).style.opacity = String(1 - easedBlur * 0.45);
        } else if (isFullyVisible) {
          (section as HTMLElement).style.filter = 'blur(0px)';
          (section as HTMLElement).style.opacity = '1';
        }
      });
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [containerRef]);

  return null;
};

export default ScrollBlur;
