import { useState } from "react";
import { Link } from "@inertiajs/react";
import { Menu, X } from "lucide-react"; // Pastikan lucide-react sudah diinstall

export default function Navbar() {
    const [isMenuOpen, setMenuIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white py-4 px-8 flex justify-between items-center z-50">
            {/* Logo + Title */}
            <div className="flex items-center space-x-3">
                <img src="/assets/logo.svg" alt="Logo" className="w-8 h-8" />
                <h1 className="text-2xl font-bold text-white">CobraDev</h1>
            </div>

            {/* Hamburger Button (Hidden on xl) */}
            {/* <button
                className="xl:hidden text-3xl cursor-pointer"
                onClick={() => setMenuIsOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X /> : <Menu />}
            </button> */}

            {/* Responsive Menu */}
            {/* <div
                className={`absolute top-16 left-0 w-full bg-black flex flex-col items-center text-lg font-semibold transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-70 visible" : "opacity-0 invisible"
                } xl:hidden`}
            >
                <Link href="#about" className="block py-4 w-full text-center hover:text-purple-400">
                    About
                </Link>
                <Link href="#works" className="block py-4 w-full text-center hover:text-purple-400">
                    Work
                </Link>
                <Link href="#tech" className="block py-4 w-full text-center hover:text-purple-400">
                    Tech
                </Link>
                <Link href="#contact" className="block py-4 w-full text-center hover:text-purple-400">
                    Contact
                </Link>
            </div> */}

            {/* Normal Menu (Hidden on Mobile) */}
            {/* <div className="hidden xl:flex space-x-6">
                <Link href="#about" className="hover:text-purple-400">About</Link>
                <Link href="#tech" className="hover:text-purple-400">Tech</Link>
                <Link href="#works" className="hover:text-purple-400">Work</Link>
                <Link href="#contact" className="hover:text-purple-400">Contact</Link>
            </div> */}
        </nav>
    );
}
