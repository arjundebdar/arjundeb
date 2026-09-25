"use client";

import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import { useState } from "react";
import { usePlan } from "../components/PlanProvider";

const MyPlan = () => {
    const {
        plan,
        saved,
        loaded,
        removeFromPlan,
        markAsDone,
        removeFromSaved,
    } = usePlan();

    const [activeTab, setActiveTab] = useState("today");

    if (!loaded) {
        return (
            <main className="min-h-screen bg-[#0b0b0b] px-5 py-20 text-center text-zinc-400">
                Loading workouts...
            </main>
        );
    }

    const currentList = activeTab === "today" ? plan : saved;

    const totalMinutes = plan.reduce(
        (total, workout) => total + Number(workout.duration || 0),
        0
    );

    const totalCalories = plan.reduce(
        (total, workout) => total + Number(workout.caloriesBurned || 0),
        0
    );

    return (
        <main className="min-h-screen bg-[#0b0b0b] px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-7xl">

                <p className="text-sm font-bold text-[#ccff00]">
                    YOUR WORKOUTS
                </p>

                <h1 className="mt-2 text-4xl font-black uppercase text-white sm:text-5xl">
                    MY PLAN
                </h1>

                <p className="mt-4 max-w-2xl text-zinc-400">
                    Build today's session and keep your saved lifts ready for later.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                    <div className="border border-[#242424] p-4">
                        <p className="text-xs text-zinc-500">EXERCISES</p>
                        <p className="mt-2 text-2xl font-bold text-white">
                            {plan.length}
                        </p>
                    </div>

                    <div className="border border-[#242424] p-4">
                        <p className="text-xs text-zinc-500">MINUTES</p>
                        <p className="mt-2 text-2xl font-bold text-white">
                            {totalMinutes}
                        </p>
                    </div>

                    <div className="border border-[#242424] p-4">
                        <p className="text-xs text-zinc-500">CALORIES</p>
                        <p className="mt-2 text-2xl font-bold text-white">
                            {totalCalories}
                        </p>
                    </div>
                </div>

                <div className="mt-10 flex gap-2 border-b border-[#242424]">
                    <button
                        onClick={() => setActiveTab("today")}
                        className={`px-4 py-3 text-sm font-bold ${activeTab === "today"
                            ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                            : "text-zinc-500"
                            }`}
                    >
                        Today's Plan
                    </button>

                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`px-4 py-3 text-sm font-bold ${activeTab === "saved"
                            ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                            : "text-zinc-500"
                            }`}
                    >
                        Saved
                    </button>
                </div>

                {currentList.length === 0 ? (
                    <div className="py-20 text-center">
                        <h2 className="text-2xl font-bold text-white">
                            Nothing here yet.
                        </h2>

                        <p className="mt-3 text-zinc-500">
                            Add some workouts to get started.
                        </p>

                        <Link
                            href="/#library"
                            className="mt-6 inline-block rounded-full bg-[#ccff00] px-5 py-3 text-sm font-bold text-black"
                        >
                            Go to workouts
                        </Link>
                    </div>
                ) : (
                    <div className="mt-8 space-y-4">
                        {currentList.map((workout) => (
                            <div
                                key={workout.id}
                                className="flex flex-col gap-5 rounded-2xl border border-[#242424] bg-[#111111] p-4 sm:flex-row sm:items-center"
                            >
                                <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl sm:w-48">
                                    <Image
                                        src={workout.image}
                                        alt={workout.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex-1">
                                    <h2 className="text-xl font-bold text-white">
                                        {workout.name}
                                    </h2>

                                    <p className="mt-1 text-sm text-zinc-500">
                                        {workout.equipment}
                                    </p>

                                    <p className="mt-3 text-sm text-zinc-400">
                                        {workout.duration} min ·{" "}
                                        {workout.caloriesBurned} kcal · ★{" "}
                                        {workout.rating}
                                    </p>

                                    {workout.done && (
                                        <p className="mt-2 text-sm text-[#ccff00]">
                                            Completed
                                        </p>
                                    )}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <Link
                                        href={`/workouts/${workout.id}`}
                                        className="rounded-full border border-[#444] px-4 py-2 text-sm text-white"
                                    >
                                        View Details
                                    </Link>

                                    {activeTab === "today" ? (
                                        <>
                                            <button
                                                onClick={() => {
                                                    markAsDone(workout.id);
                                                    toast.success(
                                                        "Workout marked as done"
                                                    );
                                                }}
                                                className="rounded-full bg-[#ccff00] px-4 py-2 text-sm font-bold text-black"
                                            >
                                                Mark as Done
                                            </button>

                                            <button
                                                onClick={() => {
                                                    removeFromPlan(workout.id);
                                                    toast.success(
                                                        "Workout removed"
                                                    );
                                                }}
                                                className="rounded-full border border-red-500 px-4 py-2 text-sm text-red-400"
                                            >
                                                X
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                removeFromSaved(workout.id);
                                                toast.success(
                                                    "Workout removed from saved"
                                                );
                                            }}
                                            className="rounded-full border border-red-500 px-4 py-2 text-sm text-red-400"
                                        >
                                            X
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
};

export default MyPlan;