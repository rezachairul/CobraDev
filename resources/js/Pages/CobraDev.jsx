import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/templates/Navbar';
import Hero from '@/components/templates/Hero';
import About from '@/components/templates/About';
import Works from '@/components/templates/Works';
import Skill from '@/components/templates/Skill';
import Contact from '@/components/templates/Contact';
import SplashCursor from '@/components/ui/SplashCursor';
// import SplashScreen from '@/Components/templates/SplashScreen';

export default function CobraDev() {
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => setLoading(false), 2000); // splash selama 2 detik
    //     return () => clearTimeout(timer);
    // }, []);

    // if (loading) {
    //     return <SplashScreen />;
    // }
    return (
        <>
            {/* <SplashCursor /> */}
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