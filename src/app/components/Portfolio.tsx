"use client";
import { AppBar, Box, Tab, Tabs, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowRight, Award, Boxes, Code, ExternalLink, Github, LucideShovel, Newspaper, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SwipeableViews from "react-swipeable-views";

const Project = [
    {
        title: "Quizzet: A Comprehensive Learning & Sharing Platform for Students",
        description: "Quizzet is a dynamic online learning platform specifically designed to enhance connectivity and learning efficiency within the student community. Our application integrates",
        image: "/quizzet.png",
        websiteLink: "https://www.quizzet.site/",
        githubLink: "https://github.com/trongandev/quiz",
        detailLink: "/project/1",
    },
    {
        title: "caKOL - Booking KOL or Influenter Person Services",
        description: "This app is a simple e-commerce app, sell booking KOL person services. This product is for learning purposes only, not for commercial purposes.",
        image: "/cakol.png",
        websiteLink: "https://cakol.id.vn/",
        githubLink: "https://github.com/minhnghia2k3/caKOL",
        detailLink: "/project/1",
    },
    {
        title: "Translate Quizzet Extension",
        description:
            "This Quizzet Translate Extension allows users to translate selected text on a web page using the Google Translate API. It displays an icon below the selected word, and when the icon is clicked, the translation is displayed along with the option to save the translation to bookmarks.",
        image: "/tqe.png",
        githubLink: "https://github.com/trongandev/translate-quizzet-extension",
        detailLink: "/project/1",
    },
    {
        title: "H2Nchivi Global - THE BEST ORDERING SERVICE FOR YOU",
        description:
            "H2Nchivi Global is a reputable shipping company specializing in online order placement and freight forwarding services. We facilitate seamless transportation of goods from Chinese factories, workshops, and e-commerce websites directly to Vietnam, offering the lowest transaction fees and the fastest delivery times in the market today.",
        image: "/h2nchivi.png",
        websiteLink: "https://trongandev.github.io/H2Nchivi/index.html",
        githubLink: "https://github.com/trongandev/H2Nchivi",
        detailLink: "/project/1",
    },

    {
        title: "Ani me - Watch Anime Online",
        description: "Ani me is a web application that allows users to watch anime online. It provides a user-friendly interface for browsing and streaming anime content.",
        image: "/anime.png",
        websiteLink: "https://trongandev.github.io/xem-alime/",
        githubLink: "https://github.com/trongandev/xem-alime",
        detailLink: "/project/1",
    },
    {
        title: "Artificial Intelligence Subjects",
        description: "This project help you review and memorize questions in artificial intelligence subject,",
        image: "/ai-subject.png",
        websiteLink: "https://trongandev.github.io/ai/",
        githubLink: "https://github.com/trongandev/ai",
        detailLink: "/project/1",
    },
];

const techStacks = [
    { icon: "html5.svg", language: "HTML" },
    { icon: "css.svg", language: "CSS" },
    { icon: "javascript.svg", language: "JavaScript" },
    { icon: "typescript.svg", language: "TypeScript" },
    { icon: "c-plusplus.svg", language: "C++" },
    { icon: "csharp.svg", language: "C#" },
    { icon: "python.svg", language: "Python" },
    { icon: "sass.svg", language: "SASS" },
    { icon: "tailwindcss.svg", language: "Tailwind CSS" },
    { icon: "ant-design-dark-theme.svg", language: "Ant Design" },
    { icon: "shadcn-ui.svg", language: "Shadcn UI" },
    { icon: "bootstrap.svg", language: "Bootstrap" },
    { icon: "json.svg", language: "JSON" },
    { icon: "firebase.svg", language: "Firebase" },
    { icon: "postgresql.svg", language: "Postgresql" },
    { icon: "mongodb.svg", language: "MongoDB" },
    { icon: "sql-server.svg", language: "SQL Server" },
    { icon: "redis.svg", language: "Redis" },
    { icon: "react_light.svg", language: "ReactJS" },
    { icon: "nextjs_icon_dark.svg", language: "NextJS" },
    { icon: "vitejs.svg", language: "ViteJS" },
    { icon: "tanstack.svg", language: "Tanstack" },
    { icon: "nodejs.svg", language: "Node JS" },
    { icon: "expressjs.svg", language: "Express JS" },
    { icon: "nestjs.svg", language: "NestJS" },
    { icon: "postman.svg", language: "Postman" },
    { icon: "socketio-light.svg", language: "Socket IO" },
    { icon: "jwt.svg", language: "JWT" },
    { icon: "clerk-light.svg", language: "Clerk" },
    { icon: "vercel.svg", language: "Vercel" },
    { icon: "github.svg", language: "Github" },
    { icon: "aws_light.svg", language: "AWS" },
];

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

const Projects = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {Project.map((project, index) => (
                <div className="group relative w-full group">
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
            ))}
        </div>
    );
};

const Certificates = () => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
            {techStacks.map((teck, index) => (
                <div key={index} className="group relative w-full">
                    <div className="relative h-32 rounded-lg bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20 p-5 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>
                        <Image src={`/icons/${teck.icon}`} alt={teck.language} width={40} height={40} className="w-12 h-12 object-contain" />
                        <span className="text-white font-semibold mt-2">{teck.language}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

const TechStack = () => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
            {techStacks.map((tech, index) => (
                <div className="bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center p-6" key={index}>
                    <div className="relative">
                        <div className="absolute"></div>
                        <div className="relative w-[80px] h-[80px]">
                            <Image src={`/tech-stack/${tech.icon}`} alt="" fill className="absolute object-cover"></Image>
                        </div>
                        <h1 className="text-center mt-3 font-semibold">{tech.language}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default function Portfolio() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
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
                            <Projects />
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <Certificates />
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <TechStack />
                        </TabPanel>
                    </SwipeableViews>
                </Box>
            </div>
        </div>
    );
}
