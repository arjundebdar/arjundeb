"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { usePlan } from "./PlanProvider";

const Navbar = () => {
    const pathname = usePathname();
    const { plan, saved } = usePlan();

    return (
        <header className="border-b border-[#242424] bg-[#0b0b0b]">
            <nav className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">

                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="FitLog"
                        width={40}
                        height={40}
                    />

                    <span className="text-xl font-black uppercase text-white">
                        FitLog
                    </span>
                </Link>

                <div className="hidden items-center gap-2 sm:flex">
                    <Link
                        href="/"
                        className={`rounded-full px-4 py-2 text-sm font-bold ${pathname === "/"
                            ? "bg-[#ccff00] text-black"
                            : "text-zinc-300 hover:text-white"
                            }`}
                    >
                        Workout
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`rounded-full px-4 py-2 text-sm font-bold ${pathname === "/my-plan"
                            ? "bg-[#ccff00] text-black"
                            : "text-zinc-300 hover:text-white"
                            }`}
                    >
                        My Plan
                    </Link>
                </div>

                <div className="flex items-center gap-2">
                    <Link
                        href="/my-plan"
                        className="rounded-full bg-[#ccff00] px-3 py-2 text-sm font-bold text-black"
                    >
                        Plan {plan.length}
                    </Link>

                    <Link
                        href="/my-plan"
                        className="rounded-full border border-[#ccff00] px-3 py-2 text-sm font-bold text-[#ccff00]"
                    >
                        Saved {saved.length}
                    </Link>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;