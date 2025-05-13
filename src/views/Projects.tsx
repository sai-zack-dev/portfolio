"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { Tabs } from "../components/ui/tabs";
import { Element } from "react-scroll";

export function Projects() {
  const tabs = [
    {
      title: "Web",
      value: "web",
      content: (
        <div className="w-full relative h-fit rounded-2xl sm:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-100 to-white dark:from-zinc-800 dark:to-black grid grid-cols-1 sm:grid-cols-2 gap-10">
          <ProjectCard
            thumbnail="assets/projects/thumbnails/hotel_system.png"
            title="Hotel Management System"
            description="A web-based hotel booking and management application built with Laravel Breeze, designed for streamlined room reservations, admin panel CRUD operations, and efficient guest management."
            link="https://github.com/SaiZack/HotelBookingSystem"
          />
          <ProjectCard
            thumbnail="assets/projects/thumbnails/mini_games.png"
            title="Mini Games Collection"
            description="A fun and interactive collection of mini-games built with HTML, CSS, JavaScript, and Scratch. This project showcases clean design, simple gameplay, and educational value."
            link="https://saiz-mini-games-collection.netlify.app/"
          />
        </div>
      ),
    },
    {
      title: "Mobile",
      value: "mobile",
      content: (
        <div className="w-full relative h-fit rounded-2xl sm:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-100 to-white dark:from-zinc-800 dark:to-black  grid grid-cols-1 sm:grid-cols-2 gap-10">
          <ProjectCard
            thumbnail="assets/projects/thumbnails/ai_chatbot.png"
            title="AI Chatbot"
            description="A simple React Native chatbot powered by Google's Generative AI (Gemini 1.5 Flash) API"
            link="https://github.com/sai-zack-dev/ai-chatbot"
          />
          <ProjectCard
            thumbnail="assets/projects/thumbnails/3d_app.png"
            title="3D Food Ordering App"
            description="A practice project using React Native, Three Fiber, and Drei to create a fun and interactive 3D food ordering experience"
            link="https://github.com/sai-zack-dev/3d-food-order"
          />
        </div>
      ),
    },
    {
      title: "Design",
      value: "design",
      content: (
        <div className="w-full relative h-fit rounded-2xl sm:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-100 to-white dark:from-zinc-800 dark:to-black  grid grid-cols-1 sm:grid-cols-2 gap-10">
          <ProjectCard
            thumbnail="assets/projects/thumbnails/flatsync_ui.png"
            title="FlatSync Mobile App UI Design"
            description="UI for a system designed to seamlessly coordinate household responsibilities among flatmates. From managing cleaning schedules to handling rent payments."
            link="https://www.figma.com/design/iN0IdDQdUBO1ZIUyVAYGRE/Software-projects?node-id=0-1"
          />
          {/* <ProjectCard
            thumbnail="https://images.unsplash.com/photo-1713869820987-519844949a8a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Codeology Branding Assets"
            description="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
          /> */}
        </div>
      ),
    },
  ];

  return (
    <Element name="projects" className="">
      <div className="h-[50rem] sm:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-20 px-5 sm:px-10 ">
        <h1 className="text-black dark:text-white text-2xl mb-10">
          Featured Projects
        </h1>
        <Tabs tabs={tabs} />
      </div>
    </Element>
  );
}
