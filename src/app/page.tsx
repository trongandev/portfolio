import Image from "next/image";
import Navbar from "./components/navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import HomeComponent from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
export default function Home() {
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
