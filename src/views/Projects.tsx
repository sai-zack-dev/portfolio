"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { Tabs } from "../components/ui/tabs";

export function Projects() {
  const tabs = [
    {
      title: "Web",
      value: "web",
      content: (
        <div className="w-full relative h-fit rounded-2xl sm:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-100 to-white dark:from-zinc-800 dark:to-black grid grid-cols-1 sm:grid-cols-2 gap-10">
          <ProjectCard />
          <ProjectCard />
        </div>
      ),
    },
    {
      title: "Mobile",
      value: "mobile",
      content: (
        <div className="w-full relative h-fit rounded-2xl sm:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-100 to-white dark:from-zinc-800 dark:to-black  grid grid-cols-1 sm:grid-cols-2 gap-10">
          <ProjectCard />
          <ProjectCard />
        </div>
      ),
    },
    {
      title: "Design",
      value: "design",
      content: (
        <div className="w-full relative h-fit rounded-2xl sm:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-100 to-white dark:from-zinc-800 dark:to-black  grid grid-cols-1 sm:grid-cols-2 gap-10">
          <ProjectCard />
          <ProjectCard />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[62rem] sm:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-20 px-5 sm:px-10 ">
      <h1 className="text-black dark:text-white text-2xl mb-10">Featured Projects</h1>
      <Tabs tabs={tabs} />
    </div>
  );
}
