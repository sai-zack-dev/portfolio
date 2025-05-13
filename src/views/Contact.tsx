import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Element } from "react-scroll";
import { Button } from "@/components/ui/button";
import {
  IconMailFilled,
  IconMapPinFilled,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandCodepen,
  IconDownload,
  IconUser,
} from "@tabler/icons-react";

export function Contact() {
  return (
    <Element name="contact" className="h-dvh">
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col w-full max-w-5xl p-5 gap-5 sm:gap-10 sm:text-xl text-center text-gray-800 dark:text-zinc-100">
          <p>
            Dive into my journey and explore my experiences, skills, and passion
            for technology or Quickly access my CV for a detailed overview of my
            professional background
          </p>
          <div className="flex gap-5 justify-center">
            <Button variant="outline" className="rounded-full ">
              <IconUser />
              ABOUT ME
            </Button>
            <Button
              variant="outline"
              className="bg-zinc-900 dark:bg-gray-100 text-gray-100 dark:text-zinc-800 rounded-full"
            >
              <IconDownload />
              DOWNLOAD CV
            </Button>
          </div>
          <div className="flex flex-row gap-4 justify-center">
            <div className="flex flex-row gap-2 items-center">
              <IconMailFilled className="text-black dark:text-white" />
              <a href="mailto:" className="text-sm hover:underline">saizlinh@gmail.com</a>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <IconMapPinFilled className="text-black dark:text-white" /> <span className="text-sm">Singapore</span>
            </div>
          </div>
          <div className="flex justify-center gap-5 text-gray-500 dark:text-zinc-300">
            <a href="https://github.com/sai-zack-dev" target="_blank">
              <IconBrandGithub className="w-10 h-10 hover:text-black hover:dark:text-white" />
            </a>
            <a href="#">
              <IconBrandFacebook className="w-10 h-10 hover:text-black hover:dark:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/sai-zay-linn-htet/" target="_blank">
              <IconBrandLinkedin className="w-10 h-10 hover:text-black hover:dark:text-white" />
            </a>
            <a href="#">
              <IconBrandInstagram className="w-10 h-10 hover:text-black hover:dark:text-white" />
            </a>
            <a href="https://codepen.io/saizack/" target="_blank">
              <IconBrandCodepen className="w-10 h-10 hover:text-black hover:dark:text-white" />
            </a>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </Element>
  );
}
