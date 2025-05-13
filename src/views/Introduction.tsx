"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { FlipWords } from "../components/ui/flip-words";
import { LinkPreview } from "@/components/ui/link-preview";
import { Element } from "react-scroll";
import { motion } from "motion/react";
import { AuroraBackground } from "../components/ui/aurora-background";
import profileImg from "../assets/profile.png";

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
    <Element name="introduction">
      {/* Dark */}
      <div className="relative h-dvh w-full flex-col items-center justify-center overflow-hidden hidden dark:flex">
        <IntroductionContent />

        <div className="absolute inset-0 z-10 h-full w-full bg-gray-950/75 backdrop-blur-[2px] dark:bg-zinc-900/50" />
        <ThreeDMarquee
          className="pointer-events-none absolute inset-0 h-full w-full"
          images={images}
        />
      </div>
      {/* Light */}
      <div className="dark:hidden">
        <AuroraBackground>
          <IntroductionContent />
        </AuroraBackground>
      </div>
    </Element>
  );
}

const FlipWordTitle = () => {
  const words = ["Designer", "Developer", "Engineer"];
  return (
    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-700 dark:text-zinc-200">
      &lt; Software
      <FlipWords words={words} />
      /&gt;
    </div>
  );
};

const IntroductionContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4 z-20"
    >
      <div className="relative z-20 w-full mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-3 px-4 gap-10">
        <div className="relative w-full max-w-[50vw] bg-white aspect-square rounded-full mx-auto">
          <div className="absolute bg-black/10 w-full h-full rounded-full hidden dark:block" />
          <img src={profileImg} alt="Profile" />
        </div>
        <div className="w-full h-full sm:col-span-2 flex flex-col items-start justify-center gap-4">
          <h1 className="flex flex-col text-gray-900 dark:text-zinc-50 sm:flex-row text-2xl sm:text-3xl sm:gap-2 sm:items-center">
            <span className="align-middle">Hello, I'm</span>
            <div className="font-semibold text-5xl align-middle text-sky-600 dark:text-sky-300">SAI ZACK</div>
          </h1>
          <FlipWordTitle />
          <div className="text-gray-500 dark:text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto mb-10">
            build innovative{" "}
            <LinkPreview url="https://github.com/sai-zack-dev?tab=repositories">
              projects
            </LinkPreview>{" "}
            that showcase my{" "}
            <LinkPreview url="https://codepen.io/saizack/pens/showcase">
              skills
            </LinkPreview>{" "}
            in both development and design, with hands-on{" "}
            <LinkPreview url="https://www.linkedin.com/in/sai-zay-linn-htet">
              experiences
            </LinkPreview>{" "}
            in Laravel, React and React Native.
          </div>
        </div>
      </div>
    </motion.div>
  );
};
