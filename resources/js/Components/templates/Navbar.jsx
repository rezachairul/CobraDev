import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setMenuIsOpen] = useState(false);

    const toggleMenu = () => setMenuIsOpen(!isMenuOpen);

    const navItems = [
        { label: "About", to: "about" },
        { label: "Works", to: "works" },
        { label: "Skill", to: "skill" },
        { label: "Contact", to: "contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-sm text-white px-6 py-4 z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <img src="/assets/logo-cobradev.svg" alt="Logo" className="w-8 h-8" />
                    <h1 className="text-2xl font-bold">CobraDev</h1>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-8 font-medium text-lg">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <ScrollLink
                                to={item.to}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-purple-400 transition-colors"
                            >
                                {item.label}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 bg-black bg-opacity-90 rounded-lg p-4 space-y-4">
                    {navItems.map((item) => (
                        <ScrollLink
                            key={item.to}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            onClick={() => setMenuIsOpen(false)}
                            className="block text-center text-lg font-semibold text-white hover:text-purple-400 transition-colors"
                        >
                            {item.label}
                        </ScrollLink>
                    ))}
                </div>
            )}
        </nav>
    );
}
