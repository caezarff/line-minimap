"use client";

import { useEffect, useState, useRef } from "react";

export default function LineMinimap() {
  const [scrollY, setScrollY] = useState(0);
  const [orangeLinePosition, setOrangeLinePosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Seções do blog
  const sections = [
    { id: "intro", title: "Tecnologias que Moldam o Futuro", element: null },
    { id: "ai", title: "O Futuro da Inteligência Artificial", element: null },
    { id: "web", title: "Desenvolvimento Web Moderno", element: null },
    { id: "cloud", title: "Cloud Computing e DevOps", element: null },
    { id: "security", title: "Segurança Cibernética", element: null },
    { id: "blockchain", title: "Blockchain e Criptomoedas", element: null },
  ];

  // Função para navegar para uma seção ou parte específica
  const scrollToSection = (sectionIndex: number, isTitle: boolean = true) => {
    const articles = document.querySelectorAll("article");
    if (articles[sectionIndex]) {
      const article = articles[sectionIndex];
      const rect = article.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      let targetPosition;
      if (isTitle) {
        // Navegar para o título da seção
        targetPosition = rect.top + scrollTop - 100;
      } else {
        // Navegar para o meio do conteúdo da seção
        const articleHeight = rect.height;
        targetPosition = rect.top + scrollTop + articleHeight * 0.4 - 100;
      }

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolling(true);

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set scrolling to false after scroll ends
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      // Get document dimensions
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const maxScrollY = documentHeight - windowHeight;

      // Calculate scroll progress (0 to 1)
      const scrollProgress = maxScrollY > 0 ? currentScrollY / maxScrollY : 0;

      // Calculate minimap dimensions - corrigido para corresponder ao layout real
      const linesPerSection = 4; // 1 title + 3 content lines
      const lineHeight = 1; // height of each line in pixels
      const gapBetweenLines = 8; // gap-2 = 8px in Tailwind
      const gapBetweenSections = 8; // gap-2 = 8px between sections (corrigido)

      // Calculate height of one section
      const sectionHeight =
        linesPerSection * lineHeight + (linesPerSection - 1) * gapBetweenLines;

      // Calculate total minimap height
      const totalSections = sections.length;
      const totalMinimapHeight =
        totalSections * sectionHeight +
        (totalSections - 1) * gapBetweenSections;

      // Map scroll progress directly to minimap position
      const orangeLinePosition = scrollProgress * (totalMinimapHeight - 1);

      setOrangeLinePosition(
        Math.max(0, Math.min(orangeLinePosition, totalMinimapHeight))
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Chama uma vez para definir a posição inicial

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-30">
      <div
        className={`flex h-px w-screen left-8 bg-orange-500 absolute pointer-events-none max-[960px]:left-0 z-10 transition-transform duration-300 ease-out ${
          isScrolling ? "duration-100" : "duration-300"
        }`}
        style={{ transform: `translateY(${orangeLinePosition}px)` }}
      >
        <svg
          width="10"
          height="8"
          viewBox="0 0 7 6"
          fill="none"
          className="translate-y-[-3px] -ml-4 -rotate-90 max-[960px]:hidden"
        >
          <path
            d="M3.54688 6L0.515786 0.75L6.57796 0.75L3.54688 6Z"
            fill="#FF5800"
          ></path>
        </svg>

        <a
          href="/"
          className="absolute right-32 max-[640px]:right-10 uppercase h-6 px-2 text-[13px] flex items-center bg-orange-500 text-white whitespace-nowrap cursor-pointer pointer-events-auto"
        >
          newsletter
        </a>
      </div>

      {/* linhas verticais - agora funcionam como menu das seções do blog */}
      <div className="flex flex-col mx-8 gap-2">
        {sections.map((section, sectionIndex) => (
          <div key={section.id} className="flex flex-col gap-2">
            {/* Linha do título - escura */}
            <div
              className="bg-gray-700 w-10 h-px cursor-pointer hover:bg-gray-600 transition-colors duration-200 group relative"
              onClick={() => scrollToSection(sectionIndex, true)}
              title={`Ir para: ${section.title}`}
            >
              {/* Tooltip */}
              <div className="absolute left-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                {section.title}
              </div>
            </div>
            {/* Linhas de conteúdo - claras */}
            {Array.from({ length: 3 }).map((_, lineIndex) => (
              <div
                key={lineIndex}
                className="bg-gray-300 w-6 h-px cursor-pointer hover:bg-gray-400 transition-colors duration-200 group relative"
                onClick={() => scrollToSection(sectionIndex, false)}
                title={`Ir para o conteúdo de: ${section.title}`}
              >
                {/* Tooltip para linhas de conteúdo */}
                <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  Conteúdo
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
