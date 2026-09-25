"use client";

import { usePlan } from "./PlanProvider";
import toast from "react-hot-toast";

const WorkoutActions = ({ workout }) => {
    const { addToPlan, addToSaved } = usePlan();

    const handlePlan = () => {
        const result = addToPlan(workout);
        toast.success(result.message);
    };

    const handleSave = () => {
        const result = addToSaved(workout);
        toast.success(result.message);
    };

    return (
        <div className="mt-8">
            <div className="flex flex-wrap gap-3">
                <button
                    onClick={handlePlan}
                    className="rounded-full bg-[#ccff00] px-5 py-3 text-sm font-bold text-black"
                >
                    Add to today's plan
                </button>

                <button
                    onClick={handleSave}
                    className="rounded-full border border-[#ccff00] px-5 py-3 text-sm font-bold text-[#ccff00]"
                >
                    Save for later
                </button>
            </div>
        </div>
    );
};

export default WorkoutActions;