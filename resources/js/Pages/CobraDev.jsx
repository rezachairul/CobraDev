import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/templates/Navbar';
import Hero from '@/components/templates/Hero';
import About from '@/components/templates/About';
import Works from '@/components/templates/Works';
import Skill from '@/components/templates/Skill';
import Contact from '@/components/templates/Contact';
import SplashCursor from '@/components/ui/SplashCursor';

export default function CobraDev() {
    return (
        <>
            <SplashCursor />
            <Head title="Home"/>
            <Navbar />
            <Hero />
            <About />
            <Works />
            <Skill />
            <Contact />
        </>
    );
}