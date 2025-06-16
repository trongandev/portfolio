"use client";
import { AppBar, Backdrop, Box, Modal, Tab, Tabs, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowRight, Award, Boxes, Code, ExternalLink, Github, LucideShovel, Newspaper, Phone, Scan } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useRef, useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { Project } from "../data/ProjectData";
import { techStacks } from "../data/TechData";
import { certificates } from "../data/CertificateData";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

const ToggleButton = ({ onClick, isShowMore }: any) => (
    <button
        onClick={onClick}
        className="relative group px-3 py-1.5 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm overflow-hidden ">
        <span className="flex gap-1 items-center">
            {isShowMore ? "See Less" : "See More"}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 
          ${isShowMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}>
                <polyline points={isShowMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
            </svg>
        </span>
        <span className="absolute bg-purple-500/50 transition-all duration-300 w-0 h-0.5 group-hover:w-full bottom-0 left-0"></span>
    </button>
);

const Projects = ({ index, project }: any) => {
    return (
        <div
            className="group relative w-full group"
            data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
            data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}>
            <div className="relative h-full rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20 p-5 ">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>

                <div className="w-full h-[270px] relative overflow-hidden rounded-xl">
                    <Image src={project.image} alt="" className="absolute  object-cover  group-hover:scale-105 transition-all duration-300" fill />
                </div>
                <div className="mt-5 space-y-3">
                    <h1 title={project.title} className="line-clamp-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent font-semibold text-xl">
                        {project.title}
                    </h1>
                    <p className="line-clamp-2">{project.description}</p>
                    <div className="flex items-center justify-between">
                        <Link
                            href={project?.websiteLink || "#Portfolio"}
                            target={project.websiteLink ? "_blank" : ""}
                            className={`${project.websiteLink ? "text-blue-500 hover:text-blue-300 " : "text-gray-500"} transition-colors duration-200 inline-flex items-center gap-2 `}>
                            <span className="text-sm font-semibold"> {project.websiteLink ? " View Website" : "Not Available"}</span>
                            <ExternalLink className="w-4 h-4 transition-transform duration-500" />
                        </Link>
                        <Link href={project.githubLink} target="_blank" className="text-blue-500 hover:text-blue-300 transition-colors duration-200 inline-flex items-center gap-2 ">
                            <Github className="w-4 h-4 transition-transform duration-500" />
                            <span className="text-sm font-semibold">Github</span>
                        </Link>
                        <Link
                            href="/project/1"
                            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 transition-all duration-200 px-4 py-2 rounded-lg text-sm text-white/90 hover:scale-105 group">
                            <span className="text-sm font-medium">Detail</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all duration-500 group-hover:rotate-180" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Certificates = ({ open, setOpen }: any) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {certificates.map((item, index) => (
                <div className="relative group hover:-translate-y-0.5 duration-300 transition-all">
                    <div
                        className=" p-3 bg-slate-800 rounded-lg object-cover  cursor-pointer"
                        data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                        data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}>
                        <div className="relative w-full h-[250px] rounded-md overflow-hidden group-hover:brightness-50 group-hover:-translate-y-1 transition-all duration-300 brightness-90">
                            <Image src={`/${item.image}`} alt={item.image} className="absolute object-cover" fill />
                        </div>
                    </div>
                    <div
                        className="absolute  opacity-0 group-hover:opacity-100 w-full h-full top-0 right-0 left-0 bottom-0 group-hover:translate-y-0.5 duration-500 transition-all flex items-center justify-center flex-col gap-2 cursor-pointer"
                        onClick={() => setOpen(true)}>
                        <Scan />
                        <span className="text-white font-bold drop-shadow-md text-lg">View Certificate</span>
                    </div>
                    <Modal open={open} onClose={() => setOpen(false)} className="w-[80%] h-[700px] absolute top-0 right-0 left-0 bottom-0 m-auto">
                        <div className="relative w-full h-full rounded-md overflow-hidden transition-all duration-300 ">
                            <Image src={`/${item.image}`} alt={item.image} className="absolute object-cover" fill />
                        </div>
                    </Modal>
                </div>
            ))}
        </div>
    );
};

const TechStack = ({ index, icon, language }: any) => {
    return (
        <div
            className="bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 flex items-center flex-col gap-2 justify-center p-6 rounded-2xl shadow-lg group hover:scale-105 cursor-pointer hover:shadow-xl"
            key={index}
            data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
            data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}>
            <div className="relative ">
                <div className="absolute -inset-1 opacity-0 group-hover:opacity-50 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur"></div>
                <div className="relative w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]">
                    <Image src={`/tech-stack/${icon}`} alt={`${language} icon`} fill className="absolute "></Image>
                </div>
            </div>
            <h1 className="text-center mt-3 font-semibold text-sm md:text-base text-slate-300 tracking-wide group-hover:text-white transition-colors duration-300">{language}</h1>
        </div>
    );
};

export default function Portfolio() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [showTechStack, setShowTechStack] = useState(false);
    const [showProject, setProject] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const contentRef = useRef(null);
    const contentProjectRef = useRef(null);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();

        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const initialItems = isMobile ? 6 : 12;
    const initialItemsproject = isMobile ? 2 : 6;
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const displayedCertificates = showTechStack ? techStacks : techStacks.slice(0, initialItems);
    const displayedProject = showProject ? Project : Project.slice(0, initialItemsproject);

    const handleChangeToggleButton = (type: string) => {
        if (type === "project") {
            setProject((prev) => !prev);
            if (contentProjectRef.current) {
                const element = contentProjectRef.current as HTMLElement;
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        } else {
            setShowTechStack((prev) => !prev);
            if (contentRef.current) {
                const element = contentRef.current as HTMLElement;
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    };
    return (
        <div className=" text-white flex items-center justify-center text-3xl flex-col mt-20" id="Portfolio">
            <div className="text-center">
                <h2 className=" bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text font-black text-transparent text-5xl" data-aos="zoom-in-up" data-aos-duration="600">
                    Portfolio Showcase
                </h2>
                <p className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2" data-aos="zoom-in-up" data-aos-duration="800">
                    Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
                </p>
            </div>
            <div className="mt-20 w-full">
                <Box sx={{ width: "100%" }}>
                    <AppBar
                        position="static"
                        sx={{
                            bgcolor: "transparent",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "20px",
                            position: "relative",
                            overflow: "hidden",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
                                backdropFilter: "blur(10px)",
                                zIndex: 0,
                            },
                        }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            variant="fullWidth"
                            sx={{
                                // Existing styles remain unchanged
                                minHeight: "70px",
                                "& .MuiTab-root": {
                                    fontSize: { xs: "0.9rem", md: "1rem" },
                                    fontWeight: "600",
                                    color: "#94a3b8",
                                    textTransform: "none",
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    padding: "20px 0",
                                    zIndex: 1,
                                    margin: "8px",
                                    borderRadius: "12px",
                                    "&:hover": {
                                        color: "#ffffff",
                                        backgroundColor: "rgba(139, 92, 246, 0.1)",
                                        transform: "translateY(-2px)",
                                        "& .lucide": {
                                            transform: "scale(1.1) rotate(5deg)",
                                        },
                                    },
                                    "&.Mui-selected": {
                                        color: "#fff",
                                        background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                                        boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                                        "& .lucide": {
                                            color: "#a78bfa",
                                        },
                                    },
                                },
                                "& .MuiTabs-indicator": {
                                    height: 0,
                                },
                                "& .MuiTabs-flexContainer": {
                                    gap: "8px",
                                },
                            }}>
                            <Tab icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />} {...a11yProps(0)} label="Projects" />
                            <Tab icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />} {...a11yProps(1)} label="Certificates" />
                            <Tab icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />} {...a11yProps(2)} label="Tech Stack" />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews index={value} onChangeIndex={setValue}>
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5" ref={contentProjectRef}>
                                {displayedProject.map((project, index) => (
                                    <Projects index={index} project={project} />
                                ))}
                            </div>
                            {Project.length > initialItemsproject && (
                                <div className="mt-5">
                                    <ToggleButton onClick={() => handleChangeToggleButton("project")} isShowMore={showProject} />
                                </div>
                            )}
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <Certificates open={open} setOpen={setOpen} />
                            {/* <div className="flex items-center justify-center h-[450px]">Nothing certifications...</div> */}
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <div className="grid grid-cols-3 md:grid-cols-6 gap-5 overflow-x-hidden" ref={contentRef}>
                                {displayedCertificates.map((tech: any, index: number) => (
                                    <TechStack index={index} icon={tech.icon} language={tech.language} />
                                ))}
                            </div>
                            {techStacks.length > initialItems && (
                                <div className="mt-5">
                                    <ToggleButton onClick={() => handleChangeToggleButton("")} isShowMore={showTechStack} />
                                </div>
                            )}
                        </TabPanel>
                    </SwipeableViews>
                </Box>
            </div>
        </div>
    );
}
