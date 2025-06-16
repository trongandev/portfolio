"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    const navItems = [
        { href: "#Home", label: "Home" },
        { href: "#About", label: "About" },
        { href: "#Portfolio", label: "Portfolio" },
        { href: "#Contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navItems
                .map((item) => {
                    const section = document.querySelector(item.href);
                    if (section) {
                        return {
                            id: item.href.replace("#", ""),
                            offset: (section as HTMLElement).offsetTop - 550,
                            height: (section as HTMLElement).offsetHeight,
                        };
                    }
                    return null;
                })
                .filter(Boolean);

            const currentPosition = window.scrollY;
            const active = sections.find((section) => section && currentPosition >= section.offset && currentPosition < section.offset + section.height);

            if (active) {
                setActiveSection(active.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: any, href: string) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            const top = (section as HTMLElement).offsetTop - 100;
            window.scrollTo({
                top: top,
                behavior: "smooth",
            });
        }
        setIsOpen(false);
    };

    return (
        <nav
            className={`w-full top-0  flex h-20 fixed overflow-hidden z-50 transition-all duration-300 ${
                isOpen ? "bg-[#030014] opacity-100" : scrolled ? "bg-[#030014]/50 backdrop-blur-xl" : "bg-transparent"
            }`}>
            <div className="flex items-center justify-between flex-1 px-6 lg:px-[10%] mx-auto">
                <Link href="#" className="text-xl flex-1 bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent font-bold">
                    trongandev
                </Link>
                {/* laptop */}
                <div className="space-x-4 hidden md:block">
                    {navItems.map((item) => (
                        <a key={item.label} href={item.href} onClick={(e) => scrollToSection(e, item.href)} className="group relative px-1 py-2 text-sm font-medium">
                            <span
                                className={`relative z-10 transition-colors duration-300 ${
                                    activeSection === item.href.substring(1)
                                        ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                                        : "text-[#e2d3fd] group-hover:text-white"
                                }`}>
                                {item.label}
                            </span>
                            <span
                                className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 ${
                                    activeSection === item.href.substring(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                }`}
                            />
                        </a>
                    ))}
                </div>
                {/* mobile */}
                <div className="block md:hidden text-white/70 hover:text-white">
                    <button onClick={() => setIsOpen(!isOpen)} className={`transition-all duration-300 ease-in-out ${isOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"}`}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            {/* menu overlay */}
            <div
                className={`md:hidden fixed inset-0 -z-1  h-2/5 bg-[#030014] transition-all duration-500 ease-in-out ${
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-100%]  pointer-events-none"
                }`}
                style={{ top: "64px" }}>
                <div className="flex flex-col h-full">
                    <div className="flex-1 space-y-4 px-6 py-6">
                        {navItems.map((item, index) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={`block px-4 py-3 text-lg font-medium transition-all duration-300 ease ${
                                    activeSection === item.href.substring(1)
                                        ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                                        : "text-[#e2d3fd] hover:text-white"
                                }`}
                                style={{
                                    transitionDelay: `${index * 100}ms`,
                                    transform: isOpen ? "translateX(0)" : "translateX(50px)",
                                    opacity: isOpen ? 1 : 0,
                                }}>
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
