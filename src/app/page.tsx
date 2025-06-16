import Image from "next/image";
import Navbar from "./components/navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import HomeComponent from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
export default function Home() {
    return (
        <div className="">
            <Navbar />
            <AnimatedBackground />
            <div className="px-[10%] flex justify-between items-center flex-col relative z-1 text-white">
                <div className="">
                    <HomeComponent />
                    <About />

                    <Portfolio />
                    <div className="h-screen text-white flex items-center justify-center text-3xl" id="Contact">
                        Contact
                    </div>
                </div>
            </div>
        </div>
    );
}
