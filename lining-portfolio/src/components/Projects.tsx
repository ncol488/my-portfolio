"use client";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 0,
    name: "Matcha Mart",
    description:
      "A matcha e-commerce app for browsing and purchasing matcha products. Built with a clean, modern interface for a seamless shopping experience.",
    image: "/matcha-mart.png",
    tags: ["React", "E-Commerce"],
    url: "https://matcha-mart.netlify.app/",
  },
  {
    id: 1,
    name: "The Fading Tail",
    description:
      "A browser-based game following the journey of a cat. Built entirely in vanilla JavaScript with custom game logic and interactive storytelling.",
    image: "/FadingTail.png",
    tags: ["JavaScript", "Browser Game"],
    url: "https://the-fading-tail.netlify.app/",
  },
  {
    id: 2,
    name: "EduTrends",
    description:
      "A dashboard exploring trends in average tuition fees across Canadian undergraduate university programs from 2020 to 2024. Filter by year, field of study, and compare across institutions.",
    image: "/dashboard.png",
    tags: ["React", "Data", "Dashboard"],
    url: "https://edutrends.netlify.app/",
  },
];

const folderColors = [
  { tab: "#C8C7C7", body: "#C8C7C7" },
  { tab: "#C8C7C7", body: "#C8C7C7" },
  { tab: "#C8C7C7", body: "#C8C7C7" },
];

const FOLDER_WIDTH = 900;
const FOLDER_HEIGHT = 550;

function getSlotStyle(pos: -1 | 0 | 1 | null) {
  if (pos === null) {
    return {
      transform: "translateX(-50%) scale(0.75)",
      left: "50%",
      top: "80px",
      zIndex: 0,
      opacity: 0,
      pointerEvents: "none" as const,
      tabJustify: "flex-end",
      tabPaddingRight: "80px",
      tabPaddingLeft: "0px",
    };
  }
  if (pos === 0) {
    return {
      transform: "translateX(-50%) scale(1)",
      left: "50%",
      top: "0px",
      zIndex: 10,
      opacity: 1,
      pointerEvents: "auto" as const,
      tabJustify: "flex-end",
      tabPaddingRight: "80px",
      tabPaddingLeft: "0px",
    };
  }
  if (pos === -1) {
    return {
      transform: "translateX(-65%) scale(0.88)",
      left: "10%",
      top: "60px",
      zIndex: 5,
      opacity: 0.7,
      pointerEvents: "auto" as const,
      tabJustify: "flex-end",
      tabPaddingRight: "80px",
      tabPaddingLeft: "0px",
    };
  }
  return {
    transform: "translateX(-35%) scale(0.88)",
    left: "90%",
    top: "60px",
    zIndex: 5,
    opacity: 0.7,
    pointerEvents: "auto" as const,
    tabJustify: "flex-start",
    tabPaddingLeft: "80px",
    tabPaddingRight: "0px",
  };
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const total = projects.length;

  const getPos = (id: number): -1 | 0 | 1 | null => {
    const diff = (id - activeIndex + total) % total;
    if (diff === 0) return 0;
    if (diff === 1) return 1;
    if (diff === total - 1) return -1;
    return null;
  };

  const goTo = (index: number) => setActiveIndex(index);
  const prev = () => setActiveIndex((activeIndex - 1 + total) % total);
  const next = () => setActiveIndex((activeIndex + 1) % total);

  const activeProject = projects[activeIndex];
  const colors = folderColors[activeIndex % folderColors.length];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#e7e7e7] py-20 px-4 md:px-12"
    >
      <h1 style={{ fontSize: "clamp(2rem, 8vw, 3.75rem)" }}>PROJECTS</h1>
      <div className="hidden md:block relative h-[640px]">
        {projects.map((project) => {
          const pos = getPos(project.id);
          const slot = getSlotStyle(pos);
          const isActive = pos === 0;
          const isHovered = hoveredId === project.id && !isActive;
          const c = folderColors[project.id % folderColors.length];

          return (
            <div
              key={project.id}
              className="absolute cursor-pointer"
              style={{
                left: slot.left,
                top: isHovered ? `${parseInt(slot.top) - 12}px` : slot.top,
                zIndex: slot.zIndex,
                transform: slot.transform,
                opacity: slot.opacity,
                pointerEvents: slot.pointerEvents,
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                width: `${FOLDER_WIDTH}px`,
              }}
              onClick={() => goTo(project.id)}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className="mb-0 flex"
                style={{
                  justifyContent: slot.tabJustify,
                  paddingLeft: slot.tabPaddingLeft,
                  paddingRight: slot.tabPaddingRight,
                }}
              >
                <div
                  className="px-6 py-3 rounded-t-xl"
                  style={{
                    backgroundColor: c.tab,
                    clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
                  }}
                >
                  <h2 className="pr-8 text-blue-700 font-bold uppercase">
                    {project.name}
                  </h2>
                </div>
              </div>

              <div
                className="rounded-[10px] overflow-hidden"
                style={{
                  backgroundColor: c.body,
                  boxShadow: isActive
                    ? "4px 4px 10px rgba(0,0,0,0.2)"
                    : isHovered
                      ? "3px 3px 8px rgba(0,0,0,0.15)"
                      : "2px 2px 6px rgba(0,0,0,0.1)",
                  width: `${FOLDER_WIDTH}px`,
                  height: `${FOLDER_HEIGHT}px`,
                  transition: "box-shadow 0.3s ease",
                }}
              >
                <div className="p-8 h-full flex flex-col">
                  {isActive ? (
                    <div className="flex gap-6 h-full">
                      <div className="flex-1 flex flex-col gap-4">
                        <div className="w-full h-48 bg-[#B8B8B8] rounded-[10px] overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.name}
                            width={400}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-justify leading-relaxed py-4 pr-8">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-col gap-3 justify-center">
                        {project.tags.map((tag) => (
                          <div
                            key={tag}
                            className="bg-black text-white text-sm px-6 py-3 rounded-full text-center min-w-[120px]"
                          >
                            {tag}
                          </div>
                        ))}
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="mt-2 border-2 border-black text-black text-sm px-6 py-3 rounded-full text-center min-w-[120px] hover:bg-black hover:text-white transition-colors duration-200"
                        >
                          Visit Project ↗
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4 h-full">
                      <div
                        className="w-full rounded-[8px] overflow-hidden"
                        style={{ height: "260px" }}
                      >
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={400}
                          height={260}
                          className="w-full h-full object-cover"
                          style={{ filter: "grayscale(30%)" }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="md:hidden w-full">
        <div className="flex justify-end pr-6">
          <div
            className="px-5 py-2 rounded-t-xl"
            style={{
              backgroundColor: colors.tab,
              clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
            }}
          >
            <h2 className="pr-6 text-blue-700 font-bold uppercase text-sm">
              {activeProject.name}
            </h2>
          </div>
        </div>
        <div
          className="rounded-[10px] overflow-hidden w-full"
          style={{
            backgroundColor: colors.body,
            boxShadow: "4px 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <div className="p-5 flex flex-col gap-4">
            <div
              className="w-full rounded-[8px] overflow-hidden"
              style={{ height: "200px" }}
            >
              <Image
                src={activeProject.image}
                alt={activeProject.name}
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <p
              style={{ fontSize: "clamp(0.75rem, 3.5vw, 0.875rem)" }}
              className="leading-relaxed text-justify"
            >
              {activeProject.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {activeProject.tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-black text-white text-xs px-4 py-2 rounded-full"
                >
                  {tag}
                </div>
              ))}
            </div>
            <a
              href={activeProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black text-black text-sm px-6 py-3 rounded-full text-center hover:bg-black hover:text-white transition-colors duration-200"
            >
              Visit Project ↗
            </a>
          </div>
        </div>
      </div>

      {/* ── Navigation (shared) ── */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prev}
          className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-black hover:text-white"
          style={{ border: "2px solid #00000040" }}
          aria-label="Previous project"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M9 2L4 7L9 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to project ${i + 1}`}
              style={{
                width: i === activeIndex ? "24px" : "8px",
                height: "8px",
                borderRadius: "9999px",
                backgroundColor: i === activeIndex ? "#000000" : "#00000030",
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-black hover:text-white"
          style={{ border: "2px solid #00000040" }}
          aria-label="Next project"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M5 2L10 7L5 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <span
          className="text-sm font-medium"
          style={{ color: "#00000060", marginLeft: "8px" }}
        >
          {activeIndex + 1} / {total}
        </span>
      </div>
    </section>
  );
}
