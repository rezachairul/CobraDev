"use client";
import React from "react";
import {TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle, } from "../ui/text-reveal-card";

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
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center bg-black text-white px-4">
            <img src="/assets/logo.svg" className="mx-auto w-20" />
            <TextRevealCard
                text="Hi, I'm Cobra Developer"
                revealText="Hi, I'm CobraDev"
                className="font-sans" >
            </TextRevealCard>            
            <TypewriterEffectSmooth words={words} className="font-sans" />
        </section>
    );
}
