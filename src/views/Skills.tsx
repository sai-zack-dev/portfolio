"use client";

import { Box, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { Element } from "react-scroll";
import {
  IconTerminal2,
} from "@tabler/icons-react";

export function Skills() {
  return (
    <Element name="skills" className="h-dvh my-[150px] sm:mb-0">
      <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <Grid />
      </div>
    </Element>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  list: Array<string>;
}

const Grid = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-8 px-4 py-16">
      <ul className="w-full grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-2 md:grid-rows-2 lg:gap-4 xl:max-h-[34rem]">
        <GridItem
          area="md:[grid-area:1/1/3/2]"
          icon={
            <Settings className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="Tech Stack"
          list={["Laravel", "PHP", "React", "React Native", "JavaScript", "TypeScript", "Tailwind CSS", "HTML", "CSS", "MySQL", "PostgreSQL", "Git", "REST API", "Apache", "Linux"]}
        />

        <GridItem
          area="md:[grid-area:1/2/2/3]"
          icon={
            <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="Design Tools"
          list={["Figma", "Adobe Photoshop", "Spline"]}
        />

        <GridItem
          area="md:[grid-area:2/2/3/3]"
          icon={
            <Box className="h-full w-full text-black dark:text-neutral-400" />
          }
          title="Soft Skills"
          list={["Strong Collaboration & Teamwork", "Time Management", "Critical Thinking & Problem-Solving", "Willingness to Learn new tech"]}
        />
      </ul>
    </div>
  );
};

const GridItem = ({ area, icon, title, list }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 bg-gray-500/5 backdrop-blur-[2px]">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                <ul>
                  {list.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <IconTerminal2 className="h-4 w-4 text-black dark:text-neutral-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
