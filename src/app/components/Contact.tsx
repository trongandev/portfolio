"use client";
import { ExternalLink, Github, Instagram, Linkedin, Mail, MessageCircle, MessageSquare, Send, Share2, User, Youtube } from "lucide-react";
import React, { useState } from "react";
import Loading from "./Loading";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";
import Comment from "./Comment";

const socialLinks = [
    {
        name: "LinkedIn",
        displayName: "Let's Connect",
        subText: "on LinkedIn",
        icon: Linkedin,
        url: "https://www.linkedin.com/in/troandev/",
        color: "#0A66C2",
        gradient: "from-[#0A66C2] to-[#0077B5]",
        isPrimary: true,
    },
    {
        name: "Instagram",
        displayName: "Instagram",
        subText: "@Trọng An",
        icon: Instagram,
        url: "https://www.instagram.com/troandev",
        color: "#E4405F",
        gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
    },
    {
        name: "YouTube",
        displayName: "Youtube",
        subText: "@Trọng An",
        icon: Youtube,
        url: "https://www.youtube.com/@devquenk3",
        color: "#FF0000",
        gradient: "from-[#FF0000] to-[#CC0000]",
    },
    {
        name: "GitHub",
        displayName: "Github",
        subText: "@trongandev",
        icon: Github,
        url: "https://github.com/trongandev",
        color: "#ffffff",
        gradient: "from-[#333] to-[#24292e]",
    },
    {
        name: "TikTok",
        displayName: "Tiktok",
        subText: "@trongandev",
        icon: ({ className, ...props }: any) => (
            <div className={`relative w-6 h-6 ${className} `}>
                <Image src="/icon-social/tiktok.svg" alt="" className="absolute w-full h-full object-cover" fill></Image>
            </div>
        ),
        url: "https://tiktok.com/@trongandev",
        color: "black",
        gradient: "from-[#000000] via-[#25F4EE] to-[#FE2C55]",
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);

        Swal.fire({
            title: "Sending Message...",
            html: "Please wait while we send your message",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        try {
            // Get form data
            const form = e.target;
            const formData = new FormData(form);

            // Submit form
            await form.submit();

            // Show success message
            Swal.fire({
                title: "Success!",
                text: "Your message has been sent successfully!",
                icon: "success",
                confirmButtonColor: "#6366f1",
                timer: 2000,
                timerProgressBar: true,
            });

            // Reset form
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please try again later.",
                icon: "error",
                confirmButtonColor: "#6366f1",
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className=" text-white flex items-center justify-center text-3xl flex-col px-3 md:px-6 " id="Portfolio">
            <div className="text-center">
                <h2 className=" bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text font-black text-transparent text-5xl" data-aos="zoom-in-up" data-aos-duration="600">
                    Contact me
                </h2>
                <p className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2" data-aos="zoom-in-up" data-aos-duration="800">
                    Got a question? Send me a message, and I'll get back to you soon.
                </p>
            </div>
            <div className="mt-10 flex gap-10 flex-col md:flex-row w-full">
                <div className="bg-white/5 backdrop-blur-xl p-5 md:p-10 w-full md:w-[40%] rounded-3xl shadow-2xl ">
                    <div className="flex justify-between">
                        <div className="">
                            <h2 className=" bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text font-black text-transparent text-4xl" data-aos="zoom-in-up" data-aos-duration="600">
                                Get in touch
                            </h2>
                            <p className="mt-2 text-gray-400 max-w-2xl  text-base sm:text-md" data-aos="zoom-in-up" data-aos-duration="800">
                                Have something to discuss? Send me a message and let's talk.
                            </p>
                        </div>
                        <div className="">
                            <Share2 className="w-10 h-10 text-[#6366f1] opacity-50" />
                        </div>
                    </div>
                    <form action="https://formsubmit.co/trongandev@gmail.com" method="POST" onSubmit={handleSubmit} className="space-y-6 mt-5">
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="false" />
                        <div className="relative group ">
                            <User className="absolute translate-y-[100%] left-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className="w-full px-4 py-3 pl-12 text-md bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-500 focus:outline-none  focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                            />
                        </div>
                        <div className="relative group ">
                            <Mail className="absolute translate-y-[100%] left-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Your email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className="w-full px-4 py-3 pl-12 text-md bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-500 focus:outline-none  focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                            />
                        </div>
                        <div className="relative group ">
                            <MessageSquare className="absolute translate-y-[100%] left-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                            <textarea
                                placeholder="Your message"
                                required
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className="w-full resize-none h-[9.9rem] px-4 py-3 pl-12 text-md bg-white/10 rounded-xl border border-white/20 text-white placeholder-gray-500 focus:outline-none  focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                            />
                        </div>
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-3 rounded-xl font-semibold transition-all duration-300   hover:shadow-lg hover:shadow-[#6366f1]/20 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isSubmitting}>
                            {isSubmitting ? <Loading /> : <Send className="w-5 h-5" />}

                            {isSubmitting ? "Seding..." : "Send Message"}
                        </button>
                    </form>
                    <div className="mt-10 pt-6 border-t border-white/10 flex justify-center space-x-6">
                        <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
                            <h3 className="text-xl font-semibold">
                                <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full mr-3"></span>Connect with me
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                                {socialLinks.map((link, index) => (
                                    <Link
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={index}
                                        className={`flex items-center justify-between relative group p-4 rounded-lg bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500  ${
                                            link.isPrimary ? "col-span-2" : "col-span-2 md:col-span-1"
                                        } `}>
                                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${link.gradient}`}></div>
                                        <div className="flex items-center gap-2">
                                            <div className="relative w-10 h-10">
                                                <div
                                                    className={`absolute w-full h-full rounded-lg opacity-20  transition-all duration-500 group-hover:scale-110 group-hover:opacity-30`}
                                                    style={{ background: link.color }}></div>
                                                <div className="relative p-2 rounded-md" style={{ color: link.color }}>
                                                    <link.icon className={`w-6 h-6  transition-all duration-500 group-hover:scale-105`} />
                                                </div>
                                            </div>
                                            <div className="">
                                                <h3 className="text-lg text-gray-200 group-hover:text-white transition-all duration-300">{link.displayName}</h3>
                                                <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-all duration-300">{link.subText}</p>
                                            </div>
                                        </div>
                                        <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform  group-hover:translate-x-0 -translate-x-1 -rotate-90 group-hover:rotate-0" />
                                        {/* shine effect */}
                                        <div className="absolute opacity-0 inset-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000">
                                                {" "}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl p-3 py-3 md:p-10 md:py-8 flex-1 transform transition-all rounded-3xl shadown-2xl duration-300 hover:shadow-[#6366f1]/10">
                    <div className="w-full h-full bg-gradient-to-b from-white/10 to-white/5 rounded-2xl overflow-hidden backdrop-blur-xl shadow-xl">
                        <div className="border-b border-white/10 p-6">
                            <div className="flex items-center gap-3">
                                <div className="">
                                    <MessageCircle className="w-6 h-6 text-indigo-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">
                                    Comments <span className="text-indigo-400">(0)</span>
                                </h3>
                            </div>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="">
                                <Comment />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
