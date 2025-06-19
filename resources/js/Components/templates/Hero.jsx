"use client";
import React from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { TextRevealCard } from "../ui/text-reveal-card";
import { FloatingDock } from "../ui/floating-dock";
import {
  IconMail,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
  IconFileCv,
} from "@tabler/icons-react";
import { ScrollVelocity } from '../ui/scrollVelocity';

export default function Hero() {
  const words = [
    { text: "I" },
    { text: "Specialize" },
    { text: "in" },
    {
      text: "Geographic Information Systems (GIS),",
      className: "text-purple-500 dark:text-purple-500",
    },
    { text: "Design" },
    { text: "Intuitive User Interfaces," },
    { text: "and Build Modern Web Applications." },
  ];

  const iconClass = "w-6 h-6 text-neutral-500 dark:text-neutral-300 transition duration-300 hover:text-white";

  const links = [
    {
      title: "Email",
      icon: <IconMail className={iconClass} />, href: "mailto:rezachairul6@gmail.com",
    },
    {
      title: "Instagram",
      icon: <IconBrandInstagram className={iconClass} />, href: "https://www.instagram.com/rezachairul6/",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className={iconClass} />, href: "https://www.linkedin.com/in/reza-chairul6",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className={iconClass} />, href: "https://github.com/rezachairul",
    },
    {
      title: "Resume",
      icon: <IconFileCv className={iconClass} />, href: "/Resume",
    },
  ];

  const velocity = 50;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-black text-white px-4 py-16">
      <div className="mt-6 md:mt-16">
        <img
          src="/assets/logo-cobradev.svg"
          alt="Logo from freepik"
          className="mx-auto w-16 md:w-20"
        />
      </div>

      <TextRevealCard
        text="Hi, I'm Cobra Developer"
        revealText="Hi, I'm Reza Chairul"
        className="font-sans mt-4 md:mt-6 text-2xl md:text-3xl font-bold text-white"
      />

      <TypewriterEffectSmooth words={words} className="font-sans mt-4 mb-8 md:mt-6 md:mb-12" />

      <FloatingDock
        mobileClassName="translate-y-10"
        className="mb-10 md:mb-14"
        items={links}
      />

      {/* ScrollVelocity (optional) */}
      <div className="relative overflow-hidden w-full">
        <ScrollVelocity
          texts={['CobraDev']}
          velocity={velocity}
          className="custom-scroll-text text-white"
        />
      </div>
    </section>
  );
}
