"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { Project } from "@/app/data/ProjectData";
import { ArrowLeft, ChevronRight, Code2, ExternalLink, Github, Layers, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { techStacks } from "@/app/data/TechData";
export default function DetailProject() {
    const { slug } = useParams();
    const router = useRouter();
    const handleBack = () => {
        router.back();
    };
    const project = Project.find((item) => item.slug === slug);
    if (!project) {
        return <div className="text-transparent h-screen flex items-center justify-center text-5xl font-semibold  bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text">Project not found...</div>;
    }
    return (
        <div className="w-full flex items-center justify-center flex-col md:flex-row">
            <div className="fixed inset-0 -z-1">
                <div className="absolute inset-0 h-full w-full bg-white/5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>{" "}
                <div className="absolute -inset-[10px] opacity-20">
                    <div className="absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
                    <div className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-2000" />
                    <div className="absolute -bottom-8 left-20 w-72 md:w-96 h-72 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-4000" />
                </div>
            </div>
            <div className="relative z-1 w-full md:max-w-7xl  min-h-screen  p-5 mx-auto">
                <div className="w-full h-full flex items-center justify-center flex-col py-8 md:py-16 space-y-5">
                    <div className="flex justify-start w-full flex-col md:flex-row gap-3 md:gap-0">
                        <button
                            className="group flex items-center gap-2 px-3 py-2 bg-white/5 backdrop-blur-xl rounded-xl text-white/90 transition-all duration-300 border border-white/10 hover:border-white/20"
                            onClick={handleBack}>
                            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
                            <span>Back</span>
                        </button>
                        <div className="text-white/50 flex items-center gap-2 md:ml-4">
                            <span>Project</span>
                            <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="text-white/90 truncate">{project.title}</span>
                        </div>
                    </div>
                    <div className="flex  gap-10 flex-col md:flex-row">
                        <div className="flex-1  space-y-10">
                            <div className="">
                                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">{project.title}</h1>
                                <div className="relative w-16 md:w-24 h-1 mt-5">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm"></div>
                                </div>
                            </div>
                            <div className="text-gray-300/90 text-base md:text-lg leading-relaxed">
                                <p>{project.description}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 bg-[#0a0a1a] p-3 md:p-4 relative rounded-lg">
                                <div className="relative overflow-hidden border border-blue-500/20 rounded-lg bg-white/5 p-2 md:p-3 flex items-center gap-3 group hover:scale-105 hover:border-blue-500/50 transition-all duration-300">
                                    <div className="relative bg-blue-500/20 rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rotate-0 group-hover:rotate-180 transition-transform duration-500">
                                        <Code2 className="w-4 h-4 md:w-6 md:h-6 text-blue-300 " />
                                        <div className="absolute inset-0 rounded-full border-x-2 border-blue-500/50 animate-spin"></div>
                                        <div className="absolute inset-0 rounded-full border-x-2 border-blue-500/50 animate-spin blur-sm"></div>
                                    </div>
                                    <div className="">
                                        <h1 className="text-blue-200 text-lg md:text-xl font-semibold">{project.techStacks.length}</h1>
                                        <p className="text-gray-400 text-[10px] md:text-xs">Total Technologies</p>
                                    </div>
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transition-all duration-500 translate-x-[-100%] group-hover:translate-x-[100%] "></div>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden  border border-purple-500/20 rounded-lg bg-white/5 p-2 md:p-3 flex items-center gap-3 group hover:scale-105 hover:border-purple-500/50 transition-all duration-300">
                                    <div className="relative bg-purple-500/20 rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rotate-0 group-hover:rotate-180 transition-transform duration-500">
                                        <Layers className="w-4 h-4 md:w-6 md:h-6 text-purple-300 " />
                                        <div className="absolute inset-0 rounded-full border-x-2 border-purple-500/50 animate-spin"></div>
                                        <div className="absolute inset-0 rounded-full border-x-2 border-purple-500/50 animate-spin blur-sm"></div>
                                    </div>
                                    <div className="">
                                        <h1 className="text-purple-200 text-lg md:text-xl font-semibold">{project.features.length}</h1>
                                        <p className="text-gray-400 text-[10px] md:text-xs">Main features</p>
                                    </div>
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent transition-all duration-500 translate-x-[-100%] group-hover:translate-x-[100%] "></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 md:gap-4">
                                <Link
                                    href={project.websiteLink || "#"}
                                    target="_blank"
                                    className="relative group flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 px-4 py-2.5  hover:to-purple-500/20 md:px-8 md:py-4 rounded-xl transition-all duration-300 text-blue-300 text-sm md:text-base group backdrop-blur-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/30 ">
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-purple-600/10 translate-y-[100%] group-hover:translate-y-[0%] transition-all duration-300"></div>
                                    <ExternalLink className="h-4 w-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                                    <span className="font-medium">Live Demo</span>
                                </Link>
                                <Link
                                    href={project.githubLink || "#"}
                                    target="_blank"
                                    className="relative group flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 hover:from-pink-500/20 px-4 py-2.5  hover:to-purple-500/20 md:px-8 md:py-4 rounded-xl transition-all duration-300 text-pink-300 text-sm md:text-base group backdrop-blur-lg overflow-hidden border border-pink-500/20 hover:border-pink-500/30 ">
                                    <div className="absolute inset-0 bg-gradient-to-t from-pink-600/10 to-purple-600/10 translate-y-[100%] group-hover:translate-y-[0%] transition-all duration-300"></div>
                                    <Github className="h-4 w-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                                    <span className="font-medium">Github</span>
                                </Link>
                            </div>
                            <div className="">
                                <div className="flex items-center gap-3 text-lg md:text-xl font-semibold text-white/90">
                                    <Code2 className="h-4 w-4 md:w-5 md:h-5 text-blue-400" />
                                    <h3>Technologies Used</h3>
                                </div>
                                <div className="mt-5 flex items-center gap-3 flex-wrap">
                                    {project.techStacks.map((tech, index) => {
                                        const techStacksData = techStacks.find((item) => item.language === tech);
                                        if (!techStacksData) return null; // Skip if tech stack data is not found
                                        return (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3 group relative px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-500/10 hover:to-purple-500/10 rounded-xl border border-blue-500/10 hover:border-blue-500/20 transition-all duration-300 backdrop-blur-lg">
                                                <div className="relative w-4 h-4 md:w-6 md:h-6 ">
                                                    <Image src={`/tech-stack/${techStacksData?.icon}` || ""} alt="" className="absolute w-full h-full" fill></Image>
                                                </div>
                                                <div className="text-blue-300/90 text-xs md:text-sm font-medium group-hover:text-blue-200 transition-colors">{tech}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="relative h-64 md:h-1/2 w-full border-2 border-white/10 rounded-xl hover:border-white/30 overflow-hidden group shadow-lg transition-all duration-300">
                                <Image src={project.image} alt="" className="absolute w-full h-full object-cover rounded-xl group-hover:scale-105 transition-all duration-300" fill></Image>
                            </div>
                            <div className="mt-10 border border-white/10 hover:border-white/20 rounded-2xl px-5 py-4 md:px-10 md:py-8 bg-white/[0.02]  shadow-lg backdrop-blur-xl transition-colors duration-300 group">
                                <h3 className="flex items-center gap-3 text-white/90 text-xl font-semibold">
                                    <Star className="w-5 h-5 text-yellow-400 group-hover:rotate-[20deg] transition-transform duration-300" /> Key Features
                                </h3>
                                <div className="mt-3">
                                    {project.features.map((feat, index) => (
                                        <div className="hover:bg-white/5 p-2.5 md:p-3.5 rounded-xl border border-transparent hover:border-white/10" key={index}>
                                            <div className="relative pl-5 text-gray-300 group-hover:text-white text-sm md:text-base transition-colors">
                                                <div className="absolute top-0 left-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-all duration-300 translate-y-[100%]"></div>
                                                <span>{feat}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
