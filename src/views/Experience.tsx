"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";
import { Element } from "react-scroll";

export function Experience() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () =>
    setActive(null)
  );

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-transparent text-transparent display-none"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <Element name="experience" className="h-dvh">
        <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:20px_20px]",
              "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
              "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          <ul className="max-w-5xl mx-auto w-full gap-4 px-5 sm:px-10 mb-20 z-30">
            <h1 className="text-black dark:text-white text-2xl mb-10">
              Experiences
            </h1>
            {cards.map((card) => (
              <motion.div
                layoutId={`card-${card.title}-${id}`}
                key={`card-${card.title}-${id}`}
                onClick={() => setActive(card)}
                className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
              >
                <div className="flex sm:gap-4 flex-row ">
                  <motion.div layoutId={`image-${card.title}-${id}`}>
                    {/* <img
                      width={100}
                      height={100}
                      src={card.src}
                      alt={card.title}
                      className="h-14 w-14 rounded-lg object-cover object-top hidden sm:block"
                    /> */}
                  </motion.div>
                  <div className="">
                    <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className="font-medium text-neutral-800 dark:text-neutral-200 text-left"
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${card.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-left"
                    >
                      {card.description}
                    </motion.p>
                  </div>
                </div>
                <motion.button
                  layoutId={`button-${card.title}-${id}`}
                  className="px-4 py-2 text-xs sm:text-sm rounded-full font-bold sm:bg-gray-100 bg-[#93c2ea] text-black mt-4 md:mt-0"
                >
                  {card.ctaText}
                </motion.button>
              </motion.div>
            ))}
          </ul>
        </div>
      </Element>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "before 2022",
    title: "Graphic Designer",
    src: "/assets/experiences/graphic_design.png",
    ctaText: "Freelance",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Collaborated with local businesses to create compelling visual content tailored to their branding needs. Designed logos, business cards, promotional flyers, and digital assets that helped clients establish and strengthen their brand identity. Gained hands-on experience in balancing creativity with client requirements and branding consistency.
        </p>
      );
    },
  },
  {
    description: "3 months (early 2022)",
    title: "QA Tester",
    src: "/assets/experiences/qa_testing.jpg",
    ctaText: "Internship",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Worked as a QA Tester intern on C# and ASP.NET-based applications. Responsibilities included identifying bugs, testing new features, and verifying software functionality across different environments. Contributed to maintaining product quality and stability by preparing detailed reports and assisting developers in resolving issues.
        </p>
      );
    },
  },

  {
    description: "3 months (late 2022)",
    title: "ERP Solution ",
    src: "assets/experiences/odoo_erp.jpg",
    ctaText: "Internship",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Participated in the research and development of ERP systems using Odoo. Explored the customization capabilities of Odoo modules to meet real business requirements. Gained practical experience in enterprise workflows, business logic, and the modular architecture of ERP platforms.
        </p>
      );
    },
  },
  {
    description: "1 year & 4 months (2022-2024)",
    title: "Full Stack Developer",
    src: "assets/experiences/dev.png",
    ctaText: "Full Time",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Worked as a full-stack developer, building responsive and dynamic web applications using the LAMP stack (Linux, Apache, MySQL, PHP). Specialized in PHP and JavaScript for both front-end and back-end development. Integrated RESTful APIs for mobile applications and optimized performance and scalability. Also contributed to database design, authentication systems, and maintaining clean, reusable code for long-term projects.
        </p>
      );
    },
  },
];
