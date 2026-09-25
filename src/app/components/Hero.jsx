import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="border-b border-[#242424] bg-[#0b0b0b]">
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 md:py-16 lg:grid-cols-2 lg:px-10 lg:py-20">

                <div>
                    <p className="mb-5 text-sm font-bold text-[#cdff07]">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="max-w-2xl text-5xl font-black uppercase  tracking-tight text-white sm:text-6xl lg:text-5xl">
                        TRAIN WITH INTENT.
                        LOG EVERY SET.
                    </h1>

                    <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today's plan, and watch the week's work add up.
                    </p>

                    <Link
                        href="#library"
                        className="mt-8 inline-flex rounded-full bg-[#9eff01] px-6 py-3 text-[16px] uppercase text-gray-900 font-bold"
                    >
                        Browse Workouts
                    </Link>
                </div>

                <div className="relative h-[350px] overflow-hidden rounded-2xl sm:h-[450px] lg:h-[520px]">
                    <Image
                        src="/banner.png"
                        alt="Workout training"
                        width={500}
                        height={500}
                        className="object-cover"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;