"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { Link } from "react-scroll";

export function Header() {
  const navItems = [
    {
      name: "Skills",
      link: "skills",
      offset: "0",
      mobile: "-50",
    },
    {
      name: "Projects",
      link: "projects",
      offset: "-120",
      mobile: "-100",
    },
    {
      name: "Experience",
      link: "experience",
      offset: "0",
      mobile: "-30",
    },
    {
      name: "Contact",
      link: "contact",
      offset: "0",
      mobile: "0",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            // <a
            //   key={`mobile-link-${idx}`}
            //   href={item.link}
            //   onClick={() => setIsMobileMenuOpen(false)}
            //   className="relative text-neutral-600 dark:text-neutral-300"
            // >
            //   <span className="block">{item.name}</span>
            // </a>
            <Link
              key={`mobile-link-${idx}`}
              to={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
              smooth={true}
              duration={500}
              offset={item.mobile ? parseInt(item.mobile, 10) : undefined}
            >
              <span className="block">{item.name}</span>
            </Link>
          ))}
          <span className="block dark:text-white">
            <span>Theme:</span> <ThemeToggle />
          </span>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
