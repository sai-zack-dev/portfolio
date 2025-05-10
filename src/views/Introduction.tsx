"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { FlipWords } from "../components/ui/flip-words";
import { LinkPreview } from "@/components/ui/link-preview";

export function Introduction() {
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];
  return (
    <div className="relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden">
      <div className="relative z-20 w-full mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-3 px-4 gap-10 mt-10 sm:mt-0">
        <div className="w-full max-w-[50vw] bg-white aspect-square rounded-full mx-auto"></div>
        <div className="w-full h-full sm:col-span-2 flex flex-col items-start justify-around gap-4">
          <h1 className="flex flex-col sm:flex-row text-2xl sm:text-3xl text-white sm:gap-2 text-shadow-lg sm:items-center">
            <span className="align-middle">Hello, I'm</span>
            <div className="font-bold text-[#FCC959] text-4xl align-middle">
              SAI ZACK
              <img
                src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
                alt="gif"
                className="w-12 h-12 rounded-full inline-block ms-3"
              />
            </div>
          </h1>
          <FlipWordTitle />
          <p className="text-gray-400 dark:text-zinc-400 text-lg sm:text-2xl max-w-3xl mx-auto mb-10">
            build innovative{" "}
            <LinkPreview url="https://framer.com/motion">
              projects
            </LinkPreview>{" "}
            that showcase my{" "}
            <LinkPreview url="https://framer.com/motion">
              skills
            </LinkPreview>{" "}
            in both development and design, with hands-on{" "}
            <LinkPreview url="https://framer.com/motion">
              experiences
            </LinkPreview>{" "}
            in Laravel, React, React Native and Figma.
          </p>
        </div>
      </div>
      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-gray-950/75 backdrop-blur-[2px] dark:bg-zinc-900/50" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}

const FlipWordTitle = () => {
  const words = ["Designer", "Developer", "Engineer"];
  return (
    <div className=" text-2xl sm:text-4xl font-semibold text-white text-shadow-lg">
      &lt; Software
      <FlipWords words={words} />
      /&gt;
    </div>
  );
};
