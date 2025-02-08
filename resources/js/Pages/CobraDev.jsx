import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/templates/Navbar';
import Hero from '@/components/templates/Hero';
import About from '@/components/templates/About';
import Tech from '@/components/templates/Tech';
import Works from '@/components/templates/Works';
import Contact from '@/components/templates/Contact';

export default function CobraDev() {
    return (
        <>
            <Head title="Home"/>
            <Navbar />
            <Hero />
            <About />
            <Tech />
            <Works />
            <Contact />
        </>
    );
}