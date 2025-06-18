"use client";
import Navbar from "./components/navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import HomeComponent from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const source = searchParams.get("source");
        if (source === "cv") {
            if (typeof window !== "undefined" && (window as any).umami) {
                (window as any).umami.track("CV Click");
            }
        }
    }, [searchParams]);
    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <AnimatedBackground />
            <div className="px-6 lg:px-[10%] flex justify-between items-center flex-col relative z-1 text-white">
                <HomeComponent />
                <About />

                <Portfolio />
            </div>
            <Contact />
        </div>
    );
}
