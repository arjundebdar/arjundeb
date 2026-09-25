"use client";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className="border-b border-zinc-800 bg-[#0b0b0b]">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="FitLog"
                        width={40}
                        height={40}
                    />
                    <span className="text-xl font-bold text-white">
                        FitLog
                    </span>
                </Link>

                {/* Navigation */}
                <div className="hidden items-center gap-6 sm:flex">
                    <Link href="/" className="text-xl text-white">
                        Workout
                    </Link>

                    <Link href="/my-plan" className="text-xl text-white">
                        My Plan
                    </Link>
                </div>

                {/* Counters */}
                <div className="flex items-center gap-2 text-xl text-white">
                    <Link href="/my-plan">Plan <span className="bg-amber-400 p-1.5 rounded-full">0</span></Link>
                    <Link href="/my-plan">Saved <span>0</span></Link>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;