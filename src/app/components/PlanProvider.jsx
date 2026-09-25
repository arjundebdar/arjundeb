"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
    const [plan, setPlan] = useState([]);
    const [saved, setSaved] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const storedPlan = localStorage.getItem("fitlog-plan");
        const storedSaved = localStorage.getItem("fitlog-saved");

        if (storedPlan) {
            setPlan(JSON.parse(storedPlan));
        }

        if (storedSaved) {
            setSaved(JSON.parse(storedSaved));
        }

        setLoaded(true);
    }, []);

    useEffect(() => {
        if (!loaded) return;

        localStorage.setItem("fitlog-plan", JSON.stringify(plan));
        localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    }, [plan, saved, loaded]);

    const addToPlan = (workout) => {
        if (plan.length >= 5) {
            return {
                success: false,
                message: "Today's plan is full",
            };
        }

        const exists = plan.some((item) => item.id === workout.id);

        if (exists) {
            return {
                success: false,
                message: "Already in today's plan",
            };
        }

        setPlan((current) => [...current, workout]);

        return {
            success: true,
            message: "Added to today's plan",
        };
    };

    const removeFromPlan = (id) => {
        setPlan((current) => current.filter((item) => item.id !== id));
    };

    const markAsDone = (id) => {
        setPlan((current) =>
            current.map((item) =>
                item.id === id ? { ...item, done: true } : item
            )
        );
    };

    const addToSaved = (workout) => {
        const exists = saved.some((item) => item.id === workout.id);

        if (exists) {
            return {
                success: false,
                message: "Already saved",
            };
        }

        setSaved((current) => [...current, workout]);

        return {
            success: true,
            message: "Saved for later",
        };
    };

    const removeFromSaved = (id) => {
        setSaved((current) => current.filter((item) => item.id !== id));
    };

    return (
        <PlanContext.Provider
            value={{
                plan,
                saved,
                loaded,
                addToPlan,
                removeFromPlan,
                markAsDone,
                addToSaved,
                removeFromSaved,
            }}
        >
            {children}
        </PlanContext.Provider>
    );
};

export const usePlan = () => useContext(PlanContext);