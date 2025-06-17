"use client";
import React, { memo, useCallback, useEffect, useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, Sparkles, Facebook } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Constants
const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ["Will to Progress", "Tech Enthusiast", "Typing With 11 Fingers", "Morse Code Programming", "35 Years Web Coding Experience"];
const TECH_STACK = ["React", "Javascript", "Node.js", "Tailwind"];
const SOCIAL_LINKS = [
    { icon: Github, link: "https://github.com/trongandev" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/troandev/" },
    { icon: Facebook, link: "https://www.facebook.com/trongandev/" },
];

const CTAButton = ({ href, text, icon: Icon }: { href: string; text: string; icon: React.ComponentType<{ className?: string }> }) => {
    return (
        <Link href={href} className="block group relative cursor-pointer w-[160px] ">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] blur-md rounded-xl group-hover:opacity-90 transition-all duration-700"></div>
            <div
                className={`${
                    text == "Contact" && "bg-[#030014]"
                } flex items-center justify-center gap-2 h-11 backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden relative`}>
                <div className="absolute inset-0 origin-left transition-transform  scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20 duration-500"></div>
                <span>{text}</span>
                <Icon className={`w-4 h-4 text-gray-200 transform transition-all duration-300 z-10 ${text == "Contact" ? "group-hover:translate-x-3 " : "group-hover:rotate-45"}`} />
            </div>
        </Link>
    );
};

const SocialLink = ({ index, icon: Icon, link }: { icon: React.ComponentType<{ className?: string }>; link: string; index: number }) => {
    return (
        <Link href={link} target="_blank" className="block relative group p-2" key={index}>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur-md opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative  rounded-xl bg-black/50 backdrop-blur-xl w-10 h-10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"></Icon>
            </div>
        </Link>
    );
};

const HomeComponent = () => {
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const handleTyping = useCallback(() => {
        if (isTyping) {
            if (charIndex < WORDS[wordIndex].length) {
                setText((prev) => prev + WORDS[wordIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            } else {
                setTimeout(() => setIsTyping(false), PAUSE_DURATION);
            }
        } else {
            if (charIndex > 0) {
                setText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            } else {
                setWordIndex((prev) => (prev + 1) % WORDS.length);
                setIsTyping(true);
            }
        }
    }, [charIndex, isTyping, wordIndex]);

    useEffect(() => {
        const timeout = setTimeout(handleTyping, isTyping ? TYPING_SPEED : ERASING_SPEED);
        return () => clearTimeout(timeout);
    }, [handleTyping]);

    useEffect(() => {
        const initAOS = () => {
            AOS.init({
                once: true,
                offset: 10,
            });
        };

        initAOS();
        window.addEventListener("resize", initAOS);
        return () => window.removeEventListener("resize", initAOS);
    }, []);

    useEffect(() => {
        setIsLoaded(true);
        return () => setIsLoaded(false);
    }, []);

    // Lottie configuration
    const lottieOptions = {
        src: "https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie",
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            progressiveLoad: true,
        },
        style: { width: "100%", height: "100%" },
        className: `w-full h-full transition-all duration-500 ${
            isHovering ? "scale-[180%] sm:scale-[160%] md:scale-[150%] lg:scale-[145%] rotate-2" : "scale-[175%] sm:scale-[155%] md:scale-[145%] lg:scale-[140%]"
        }`,
    };
    return (
        <div className=" flex items-center justify-between flex-col lg:flex-row mt-20 w-full" id="Home">
            <div className="flex flex-col items-start gap-5  flex-1">
                <div className="relative group cursor-pointer animate-float" data-aos="zoom-in" data-aos-delay="400">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
                        <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
                            <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
                            Ready to Innovate
                        </span>
                    </div>
                </div>
                <div className="" data-aos="fade-up" data-aos-delay="600">
                    <div className="relative text-7xl font-bold">
                        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-25"></span>
                        <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">Frontend</span>
                    </div>
                    <div className="relative text-7xl font-bold">
                        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-25"></span>
                        <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Developer</span>
                    </div>
                </div>
                <div className="h-8 flex items-center" data-aos="fade-up" data-aos-delay="800">
                    <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">{text}</span>
                    <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"></span>
                </div>
                <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light" data-aos="fade-up" data-aos-delay="1000">
                    A web developer, performance optimizer, speed up the site
                </p>
                <div className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="1200">
                    {TECH_STACK.map((tech, index) => (
                        <div
                            key={index}
                            className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
                            {tech}
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-5" data-aos="fade-up" data-aos-delay="1400">
                    <CTAButton href="#Portfolio" text="Project" icon={ExternalLink} />
                    <CTAButton href="#Contact" text="Contact" icon={Mail} />
                </div>
                <div className="flex items-center gap-5 w-full justify-center md:justify-start" data-aos="fade-up" data-aos-delay="1600">
                    {SOCIAL_LINKS.map((social, index) => (
                        <SocialLink index={index} icon={social.icon} link={social.link} />
                    ))}
                </div>
            </div>
            <div
                className="flex-1 py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative overflow-hidden flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0 mb-20 lg:mb-0"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                data-aos="fade-left"
                data-aos-delay="600">
                <div className="relative w-full opacity-90">
                    <div className={`absolute inset-0  rounded-3xl blur-3xl transition-all duration-700 ease-in-out ${isHovering ? "opacity-50 scale-105" : "opacity-20 scale-100"}`}></div>

                    <div className={`relative z-10 w-full opacity-90 transform transition-transform duration-500 ${isHovering ? "scale-105" : "scale-100"}`}>
                        <DotLottieReact {...lottieOptions} />
                    </div>

                    <div className={`absolute inset-0 pointer-events-none transition-all duration-700 ${isHovering ? "opacity-50" : "opacity-20"}`}>
                        <div
                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]  blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 ${
                                isHovering ? "scale-110" : "scale-100"
                            }`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(HomeComponent);
