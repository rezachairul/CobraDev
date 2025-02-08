import { useState, Suspense } from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Earth from "../canvas/Earth";
import Stars from "../canvas/Stars";
import ContactForm from "./ContactForm";

export default function Contact() {
  const [count, setCount] = useState(0);
  return (
    <section id="contact" className="relative py-2 bg-black text-white text-center">
        {/* Canvas sebagai background yang menutupi seluruh section */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Stars />
        </div>

        {/* Contact */}
        <h2 className="text-6xl font-black mt-4 text-purple-500 mb-1">Contact Me</h2>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 p-10">
            {/* Kolom Kiri - Earth 3D */}
            <div className="w-full md:w-1/2 h-[400px] flex items-center justify-center">
                {/* <Earth /> */}
                <Canvas>
                    <ambientLight/>
                    <OrbitControls enableZoom={false}/>
                    <Suspense fallback={null}>
                      <Earth />
                    </Suspense>
                </Canvas>
            </div>

            {/* Kolom Kanan - Contact Form */}
            <div className="w-full md:w-1/2 rounded-lg shadow-md">
                <ContactForm />
            </div>
        </div>
        <p className="mt-2 text-center text-white">
            Copyright CobraDev 2025 All rights reserved.
        </p>
    </section>
  );
}
