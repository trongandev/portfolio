"use client";
import { ImagePlus, Send, X } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";

export default function Comment() {
    const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleImageChange = useCallback((e: any) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) return;
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    }, []);
    return (
        <form className="space-y-6">
            <div className="space-y-2">
                <label htmlFor="" className="block text-sm font-medium text-white">
                    Name <span className="text-red-400">*</span>
                </label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-white/10 bg-white/5 text-white placeholder-gray-400 px-5 py-2 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    required
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="" className="block text-sm font-medium text-white">
                    Message <span className="text-red-400">*</span>
                </label>
                <textarea
                    placeholder="Send me messages here..."
                    className="w-full border border-white/10 bg-white/5 text-white placeholder-gray-400 px-5 py-2 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none h-32"
                    required
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="" className="block text-sm font-medium text-white">
                    Profile Photo <span className="text-gray-400">(optional)</span>
                </label>
                <div className="w-full border border-white/10 bg-white/5 text-white placeholder-gray-400 p-5 rounded-xl transition-all">
                    {imagePreview ? (
                        <div className="flex gap-5 items-center">
                            <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-indigo-500/50">
                                <Image src={typeof imagePreview === "string" ? imagePreview : ""} alt="" className="absolute w-full h-full object-cover" fill></Image>
                            </div>

                            <button
                                className="flex items-center gap-2 text-red-400 hover:text-red-500  bg-red-500/20 hover:bg-red-500/30 px-5 py-2 rounded-full transition-all duration-500 group"
                                onClick={() => {
                                    setImagePreview(null);
                                }}>
                                <X className="w-4 h-4 group-hover:scale-150 transition-all duration-500" />
                                <span>Remove Photo</span>
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center flex-col gap-4 ">
                            <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleImageChange} />
                            <button
                                className="w-full flex items-center gap-2 justify-center border border-dashed border-indigo-500 px-3 py-2 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-400 hover:border-indigo-500 transition-colors"
                                onClick={() => fileInputRef.current?.click()}>
                                <ImagePlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span>Choose Profile Photo</span>
                            </button>
                            <p className="text-center text-sm text-gray-400">Max file size: 5MB</p>
                        </div>
                    )}
                </div>
            </div>
            <button
                className="relative w-full flex gap-3 items-center justify-center bg-gradient-to-r from-[#6366f1] to-[#a855f7] h-12 rounded-xl font-medium group transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed text-white hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
                type="submit">
                <Send className="w-5 h-5 animate-pulse-slow" />
                <span>Post Comment</span>
                <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-500 inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
            </button>
        </form>
    );
}
