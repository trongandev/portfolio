"use client";
import React, { useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { ArrowUpRight, Award, Code, FileText, Globe, Sparkles } from "lucide-react";
import Image from "next/image";

export default function About() {
    const navItems = useMemo(
        () => [
            {
                icon: Code,
                label: "Total Projects",
                description: "Innovative web solutions crafted",
                animation: "fade-up-left",
                total: 6,
            },
            {
                icon: Award,
                label: "Certificates",
                description: "Professional skills validated",
                animation: "zoom-in",
                total: 1,
            },
            {
                icon: Globe,
                label: "Experience",
                description: "Continuous learning journey",
                animation: "fade-up-right",
                total: 1,
            },
        ],
        []
    );
    // Optimized AOS initialization
    useEffect(() => {
        const initAOS = () => {
            AOS.init({
                once: false,
            });
        };

        initAOS();

        // Debounced resize handler
        let resizeTimer: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(initAOS, 250);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(resizeTimer);
        };
    }, []);
    return (
        <div className="mb-20" id="About">
            <div className="text-center">
                <h2 className=" bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text font-black text-transparent text-5xl" data-aos="zoom-in-up" data-aos-duration="600">
                    About Me
                </h2>
                <p className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2" data-aos="zoom-in-up" data-aos-duration="800">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    Transforming ideas into digital experiences
                    <Sparkles className="w-5 h-5 text-purple-400" />
                </p>
            </div>
            <div className="flex items-center mt-20 flex-col-reverse gap-10 md:gap-0 lg:flex-row">
                <div className="flex-1">
                    <div className="space-y-5">
                        <div className="">
                            <h2 className=" bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text font-bold text-transparent text-5xl" data-aos="zoom-in-up" data-aos-duration="600">
                                Hello, I'm
                            </h2>
                            <h2 className="text-5xl font-bold text-white" data-aos="fade-right" data-aos-duration="1300">
                                Nguyen Trong An
                            </h2>
                        </div>
                        <p className="text-xl text-gray-400 leading-relaxed text-justify" data-aos="fade-right" data-aos-duration="1500">
                            With a passion for using computers since childhood, a diligent person explores new technologies and applies them to websites. I'm proficient in HTML, CSS, JavaScript, and
                            ReactJS. I'm also familiar with NodeJS, ExpressJS, and MongoDB. I'm always ready to learn new technologies and improve my skills.
                        </p>
                        <div className="flex items-center gap-5">
                            <Link href="https://www.topcv.vn/xem-cv/UAMEBQsBVwQHBgZUUABWAQQGXVZYAFUBAAcEBw7307?ta_source=EditCVInAfterSaveCV" target="_blank">
                                <button className="flex items-center gap-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] px-4 py-2 rounded-md text-white" data-aos="fade-right" data-aos-duration="1800">
                                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
                                </button>
                            </Link>
                            <Link href="#Portfolio" className="">
                                <button
                                    className="flex items-center gap-2 border border-[#a855f7]/50 text-[#a855f7] px-4 py-2 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:bg-[#a855f7]/10  delay-200 animate-bounce mt-2"
                                    data-aos="fade-right"
                                    data-aos-duration="1800">
                                    <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center" data-aos="fade-up" data-aos-duration="1000">
                    <div className="w-72 h-72 sm:w-80 sm:h-80 relative group overflow-hidden transform transition-all duration-700 group-hover:scale-105 shadow-[0px_0px_100px_rgba(120,119,198,0.5)] rounded-full">
                        <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 "></div>
                        <Image
                            src="/photo2.jpg"
                            alt=""
                            className="w-full h-full object-cover absolute rounded-full transition-all duration-700 scale-125 group-hover:scale-150 group-hover:rotate-2 brightness-75 group-hover:brightness-100"
                            fill
                            unoptimized></Image>

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
                            <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16 cursor-pointer">
                {navItems.map((item, index) => (
                    <Link href="#Portfolio" className="flex-1 relative group" data-aos={item.animation} data-aos-duration={1300} key={index}>
                        <div className="h-44 relative overflow-hidden z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10  hover:scale-105 hover:shadow-2xl transition-all duration-300">
                            <div className="absolute bg-gradient-to-br from-[#6366f1] to-[#a855f7] -z-10 inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
                                    <item.icon className="w-8 h-8 text-white" />
                                </div>
                                <span className="text-4xl font-bold text-white" data-aos="fade-up-left" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
                                    {item.total}
                                </span>
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-wider text-gray-300 mb-2" data-aos="fade-up" data-aos-duration="800" data-aos-anchor-placement="top-bottom">
                                    {item.label}
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="text-xs text-gray-400" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                                        {item.description}
                                    </p>
                                    <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
