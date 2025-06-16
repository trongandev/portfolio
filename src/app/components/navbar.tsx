"use client";
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
        <nav className={`px-[10%] w-full flex  h-20 fixed  z-50 transition-all duration-500 ${isOpen ? "bg-[#030014] opacity-100" : scrolled ? "bg-[#030014]/50 backdrop-blur-xl" : "bg-transparent"}`}>
            <div className="flex items-center justify-between w-full">
                <Link href="#" className="text-xl flex-1 bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent font-bold">
                    trongandev
                </Link>
                <div className="space-x-4">
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
            </div>
        </nav>
    );
}
