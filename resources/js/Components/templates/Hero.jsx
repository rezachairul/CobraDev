"use client";
import React from "react";
import {TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { TextRevealCard} from "../ui/text-reveal-card";
import { FloatingDock } from "../ui/floating-dock";
import {
    IconMail,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandGithub,
    IconFileCv,
} from "@tabler/icons-react";
import {ScrollVelocity} from '../ui/scrollVelocity';


export default function Hero() {
    const words = [
        { text: "I" },
        { text: "Develop" },
        { text: "Attractive," },
        { text: "User Interfaces &" },
        { 
        text: "Web Applications.",
        className: "text-purple-500 dark:text-purple-500",
        },
    ];
    const links = [
        { title: "Email", icon: (
            <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ), href: "mailto:rezachairul6@gmail.com",
        },
        { title: "Instagram", icon: (
            <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ), href: "https://www.instagram.com/rezachairul6/",
        },
        { title: "LinkedIn", icon: (
            <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ), href: "https://www.linkedin.com/in/reza-chairul6",
        },
        { title: "GitHub", icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ), href: "https://github.com/rezachairul",
        },
        { title: "Resume", icon: (
            <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ), href: "/Resume",
        },
    ];
    const velocity = 50;
    return (
        <section className="h-[32rem] flex flex-col justify-center items-center text-center bg-black text-white px-4">
          <div className="mt-40">
            <img src="/assets/logo-cobra.svg" alt="Logo from freepik" className="mx-auto w-20" />
          </div>
            <TextRevealCard
                text="Hi, I'm Cobra Developer"
                revealText="Hi, I'm CobraDev"
                className="font-sans" >
            </TextRevealCard>
            <TypewriterEffectSmooth words={words} className="font-sans mb-20" />
            <FloatingDock mobileClassName="translate-y-20" className="mb-14" items={links} />

          {/* ScrollVelocity */}
          {/* <div className="relative overflow-hidden w-full">
            <ScrollVelocity 
              texts={['CobraDev']}
              velocity={velocity} 
              className="custom-scroll-text text-white"
            />
          </div> */}
          {/* <div className="w-screen mt-5">
          </div> */}
        </section>
    );
}
