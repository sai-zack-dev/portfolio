import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Element } from "react-scroll";

export function Contact() {
  return (
    <Element name="contact" className="h-dvh">
      <BackgroundBeamsWithCollision>
        <div className="flex">
          <p>
            Dive into my journey and explore my experiences, skills, and passion for technology or 
Quickly access my CV for a detailed overview of my professional background
          </p>
        </div>
      </BackgroundBeamsWithCollision>
    </Element>
  );
}
