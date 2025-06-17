import React from "react";

export default function Footer() {
    return (
        <div className="border-t border-t-white/10 mt-10 mb-5 pt-5 w-full  text-gray-400 flex items-center justify-center text-sm gap-1">
            © 2025{" "}
            <a href="https://github.com/trongandev" target="_blank" className="hover:underline">
                trongandev™
            </a>
            . All Rights Reserved.
        </div>
    );
}
