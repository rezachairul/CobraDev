import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/templates/Navbar';
import Hero from '@/components/templates/Hero';
import About from '@/components/templates/About';
import Works from '@/components/templates/Works';
import Tech from '@/components/templates/Tech';
import Contact from '@/components/templates/Contact';
import Resume from '@/components/templates/Resume';

export default function CobraDev() {
    return (
        <>
            <Head title="Home"/>
            <Navbar />
            <Hero />
            <About />
            <Works />
            <Tech />
            <Contact />
        </>
    );
}