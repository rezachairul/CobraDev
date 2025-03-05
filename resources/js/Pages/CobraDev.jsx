import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/templates/Navbar';
import Hero from '@/components/templates/Hero';
import About from '@/components/templates/About';
import Works from '@/components/templates/Works';
import Tech from '@/components/templates/Tech';
import Skill from '@/components/templates/Skill';
import Contact from '@/components/templates/Contact';
import Resume from '@/Pages/Resume';

import SplashCursor from '../Components/ui/SplashCursor';



export default function CobraDev() {
    return (
        <>
            {/* <SplashCursor /> */}
            <Head title="Home"/>
            <Navbar />
            <Hero />
            <About />
            <Works />
            <Tech />
            <Skill />
            <Contact />
        </>
    );
}