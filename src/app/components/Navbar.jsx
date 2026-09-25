"use client";

import Link from "next/link";
import { Dumbbell, ClipboardList, Bookmark } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    const isWorkoutActive = pathname === "/";
    const isPlanActive = pathname === "/my-plan";

    return (
        <header className="border-b border-[#242424] bg-[#0b0b0b]">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2"
                    aria-label="FitLog Home"
                >
                    <span className="flex h-9 w-9 items-center justify-center bg-[#ccff00] text-black">
                        <Dumbbell size={20} strokeWidth={2.5} />
                    </span>

                    <span className="text-xl font-black uppercase tracking-tight sm:text-2xl">
                        FitLog
                    </span>
                </Link>

                {/* Navigation */}
                <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
                    <Link
                        href="/"
                        className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition ${isWorkoutActive
                                ? "bg-[#ccff00] text-black"
                                : "text-[#929292] hover:text-white"
                            }`}
                    >
                        Workout
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition ${isPlanActive
                                ? "bg-[#ccff00] text-black"
                                : "text-[#929292] hover:text-white"
                            }`}
                    >
                        My Plan
                    </Link>
                </div>

                {/* Status Badges */}
                <div className="flex items-center gap-2">
                    <Link
                        href="/my-plan"
                        className="group flex items-center gap-2 rounded-full bg-[#ccff00] px-3 py-1.5 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#d9ff4d] sm:px-4"
                    >
                        <ClipboardList size={15} strokeWidth={2.5} />

                        <span className="hidden sm:inline">Plan</span>

                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1.5 text-[10px] text-[#ccff00]">
                            0
                        </span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="group flex items-center gap-2 rounded-full border border-[#ccff00] px-3 py-1.5 text-xs font-black uppercase tracking-wide text-[#ccff00] transition hover:bg-[#ccff00] hover:text-black sm:px-4"
                    >
                        <Bookmark size={15} strokeWidth={2.5} />

                        <span className="hidden sm:inline">Saved</span>

                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-current px-1.5 text-[10px]">
                            0
                        </span>
                    </Link>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div className="border-t border-[#1d1d1d] md:hidden">
                <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2">
                    <Link
                        href="/"
                        className={`flex-1 px-3 py-2 text-center text-xs font-bold uppercase tracking-wider ${isWorkoutActive
                                ? "bg-[#ccff00] text-black"
                                : "text-[#929292]"
                            }`}
                    >
                        Workout
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`flex-1 px-3 py-2 text-center text-xs font-bold uppercase tracking-wider ${isPlanActive
                                ? "bg-[#ccff00] text-black"
                                : "text-[#929292]"
                            }`}
                    >
                        My Plan
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;