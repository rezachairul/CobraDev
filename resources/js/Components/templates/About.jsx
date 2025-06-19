"use client";
import React from "react";

import BlurText from "../ui/BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-black py-16">
      {/* About Me Content */}
        <div className="container mx-auto max-w-4xl px-6 text-center md:text-justify">
          <BlurText
                text="About Me"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-5xl font-bold mb-6 text-white"
            />
          {/* <img src="/assets/logo-cobra.svg" alt="Logo from freepik" className="w-40 mt-5 mb-5 " /> */}
          <p className="text-lg leading-relaxed text-gray-300">
            Hi there! 👋 I'm <span className="font-semibold text-white">Reza Chairul Manam</span>, I'm currently living in Lampung, Indonesia. 
            I'm an Informatics Engineering student at the Sumatra Institute of Technology who loves everything about WebGIS and web development. Currently, I'm working with 
            <span className="text-rose-400"><a href="https://laravel.com/"> Laravel</a></span>, <span className="text-blue-400"> <a href="https://react.dev/"> React</a></span>, <span className="text-green-400"><a href="https://www.postgresql.org/"> PostgreSQL</a></span>, 
            and <span className="text-sky-400"><a href="https://tailwindcss.com/"> Tailwind CSS</a></span> to build interactive and scalable applications.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            Right now, I'm focused on a WebGIS project, exploring how geospatial data can be visualized and managed efficiently. I enjoy 
            problem-solving and bringing ideas to life through code.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            Beyond coding, I have a passion for <span className="font-semibold text-white">graphic design</span>, <span className="font-semibold text-white">photography</span>, 
            and <span className="font-semibold text-white">video editing</span>. Whether it's creating visuals, capturing moments, or editing content, 
            I love expressing creativity in different ways.
          </p>
          <p className="mt-4 text-lg font-semibold text-indigo-300">
            Let’s connect and create something awesome together! 🚀
          </p>
        </div>
    </section>
  );
}