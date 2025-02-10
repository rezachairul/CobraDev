import React, { useState, useEffect } from "react";
export default function About() {
    const [isScrolling, setIsScrolling] = useState(false);
    
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolling(true);
        } else {
          setIsScrolling(false);
        }
      };
    
      window.addEventListener("scroll", handleScroll);
    
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
    const textColor = isScrolling ? "text-white" : "text-gray-500";
    return (
    <section id="about" className="h-[32rem] flex items-center justify-center bg-black">
      <div className="max-w-4xl px-4">
        <h1 className={`text-6xl font-bold mb-4 text-white`}>About Me</h1>
        <p className={`text-lg leading-relaxed text-white`}>
          Hi there! 👋 I'm Reza Chairul Manam, I'm currently living in Lampung, Indonesia. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, odit dignissimos
          Vitae rerum accusamus, cum dignissimos culpa laudantium tempore nostrum praesentium
          reiciendis blanditiis dicta veritatis consequuntur consectetur aliquam doloribus corporis.
        </p>
      </div>
    </section>
    );
}
