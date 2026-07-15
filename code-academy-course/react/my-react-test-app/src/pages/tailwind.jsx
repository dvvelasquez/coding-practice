import { useState } from "react";

export default function TailWindPage() {
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState("light");

    return (
        <>
            <div className={`${theme} min-h-screen text-slate-900 dark:bg-background dark:text-primary`}>
                <button
                    className="text-xl cursor-pointer p-1 sm:!hidden !p-2"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                    {theme === "light" ? "⏾" : "☼"}
                </button>
                {/* Navbar */}
                <div className="flex items-center justify-between p-4">
                    <div className="font-bold">Logo</div>

                    {/* Desktop */}
                    <div className="hidden sm:flex gap-2">
                        <span>Home</span>
                        <span>Abpout</span>
                        <span>Contact</span>
                    </div>

                    <button
                        className="text-xl cursor-pointer p-1 sm:!hidden"
                        onClick={() => setOpen(!open)}>☰</button>
                </div>
                    {/* Mobile */}
                    {open && <div className="flex flex-col items-center gap-2 p-4 sm:hidden">
                        <span>Home</span>
                        <span>Abpout</span>
                        <span>Contact</span>
                    </div>}

                <div className="grid sm:grid-cols-2 md:grid-cols-3 text-white p-6 gap-6 text-center dark:text-white font-semibold text-2xl sm:text-sm">
                    <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-500">Feature One</div>
                    <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-500">Feature two</div>
                    <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-500">Feature Three</div>
                    <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-500">Feature Four</div>
                    <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-500">Feature Five</div>
                    <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-500">Feature Six</div>
                </div>
            </div>
        </>
    );
}
