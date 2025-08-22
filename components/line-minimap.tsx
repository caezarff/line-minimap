"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function LineMinimap() {
  const [orangeLinePosition, setOrangeLinePosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const minimapContainerRef = useRef<HTMLDivElement | null>(null);

  // Seções do blog
  const sections = [
    { id: "intro", title: "Tecnologias que Moldam o Futuro" },
    { id: "ai", title: "O Futuro da Inteligência Artificial" },
    { id: "web", title: "Desenvolvimento Web Moderno" },
    { id: "cloud", title: "Cloud Computing e DevOps" },
    { id: "security", title: "Segurança Cibernética" },
    { id: "blockchain", title: "Blockchain e Criptomoedas" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolling(true);

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set scrolling to false after scroll ends
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      // Calculate scroll progress based on the footer position
      const footer = document.querySelector("footer");
      const windowHeight = window.innerHeight;

      let maxScrollY;
      let scrollProgress;

      if (footer) {
        // Get footer's position relative to the document
        const footerRect = footer.getBoundingClientRect();
        const footerTop = footerRect.top + window.pageYOffset;
        const footerBottom = footerTop + footerRect.height;

        // Calculate max scroll to reach the bottom of the footer
        maxScrollY = Math.max(0, footerBottom - windowHeight);
        scrollProgress =
          maxScrollY > 0 ? Math.min(currentScrollY / maxScrollY, 1) : 0;
      } else {
        // Fallback to document height calculation
        const body = document.body;
        const html = document.documentElement;
        const documentHeight = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight
        );
        maxScrollY = documentHeight - windowHeight;
        scrollProgress =
          maxScrollY > 0 ? Math.min(currentScrollY / maxScrollY, 1) : 0;
      }

      // Get the actual height of the minimap container dynamically
      if (minimapContainerRef.current) {
        const containerRect =
          minimapContainerRef.current.getBoundingClientRect();
        const actualMinimapHeight = containerRect.height;

        // Calculate position to ensure the line reaches the very end of the minimap
        // Use the full height minus just 1px to account for the line thickness
        const maxPosition = actualMinimapHeight - 1;
        const orangeLinePosition = scrollProgress * maxPosition;

        // Ensure the line stays within bounds
        const clampedPosition = Math.max(
          0,
          Math.min(orangeLinePosition, maxPosition)
        );

        setOrangeLinePosition(clampedPosition);
      } else {
        // Fallback if ref is not available yet
        setOrangeLinePosition(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll(); // Chama uma vez para definir a posição inicial

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-30 max-md:left-1 max-sm:left-0.5">
      <div
        className={`flex h-px w-screen left-8 bg-orange-500 absolute pointer-events-none max-[960px]:left-0 max-md:left-1 max-sm:left-0.5 z-10 transition-transform duration-300 ease-out ${
          isScrolling ? "duration-100" : "duration-300"
        }`}
        style={{ transform: `translateY(${orangeLinePosition}px)` }}
      >
        <svg
          width="10"
          height="8"
          viewBox="0 0 7 6"
          fill="none"
          className="translate-y-[-3px] -ml-4 -rotate-90 max-sm:w-2 max-sm:h-2 max-sm:-ml-2"
        >
          <path
            d="M3.54688 6L0.515786 0.75L6.57796 0.75L3.54688 6Z"
            fill="#FF5800"
          ></path>
        </svg>

        <a
          href="/"
          className="absolute right-32 max-[640px]:right-8 max-md:right-4 max-sm:right-2 uppercase h-6 px-2 text-[13px] max-sm:text-[10px] max-sm:px-1 flex items-center bg-orange-500 text-white whitespace-nowrap cursor-pointer pointer-events-auto"
        >
          newsletter
        </a>
      </div>

      {/* linhas verticais do minimapa */}
      <div ref={minimapContainerRef} className="flex flex-col mx-8 max-md:mx-4 max-lg:hidden gap-3 max-md:gap-2">
        {sections.map((section, sectionIndex) => {
          const containerHeight = minimapContainerRef.current?.getBoundingClientRect().height || 200;
          
          return (
            <div key={section.id} className="flex flex-col gap-2 max-md:gap-1.5 max-sm:gap-1">
              {/* Linha do título - branca */}
              <motion.div 
                className="bg-white h-px"
                animate={(() => {
                  // Calcular posição desta linha específica
                  const linePosition = (sectionIndex * 7) * (containerHeight / (sections.length * 7 - 1));
                  const distanceFromOrange = Math.abs(orangeLinePosition - linePosition);
                  const maxDistance = 30;
                  const proximity = Math.max(0, 1 - distanceFromOrange / maxDistance);
                  
                  // Tamanhos responsivos para linha de título
                  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
                  const baseTitleWidth = windowWidth < 640 ? 24 : windowWidth < 768 ? 32 : 40;
                  const growthFactor = windowWidth < 640 ? 12 : windowWidth < 768 ? 16 : 20;
                  const titleWidth = baseTitleWidth + proximity * growthFactor;
                  const titleOpacity = 0.5 + proximity * 0.5;
                  
                  return {
                    width: `${titleWidth}px`,
                    opacity: titleOpacity
                  };
                })()}
                transition={{ duration: 0.2, ease: "easeOut" }}
              ></motion.div>
              {/* Linhas de conteúdo - brancas */}
              {Array.from({ length: 6 }).map((_, lineIndex) => {
                // Calcular posição desta linha específica
                const linePosition = ((sectionIndex * 7) + lineIndex + 1) * (containerHeight / (sections.length * 7 - 1));
                const distanceFromOrange = Math.abs(orangeLinePosition - linePosition);
                const maxDistance = 30;
                const proximity = Math.max(0, 1 - distanceFromOrange / maxDistance);
                
                // Tamanhos responsivos para linhas de conteúdo
                const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
                const baseContentWidth = windowWidth < 640 ? 16 : windowWidth < 768 ? 20 : 24;
                const growthFactor = windowWidth < 640 ? 10 : windowWidth < 768 ? 12 : 16;
                const contentWidth = baseContentWidth + proximity * growthFactor;
                const contentOpacity = 0.4 + proximity * 0.6;
                
                return (
                  <motion.div 
                    key={lineIndex} 
                    className="bg-white h-px"
                    animate={{
                      width: `${contentWidth}px`,
                      opacity: contentOpacity
                    }}
                    transition={{ 
                      duration: 0.2, 
                      ease: "easeOut"
                    }}
                  ></motion.div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
