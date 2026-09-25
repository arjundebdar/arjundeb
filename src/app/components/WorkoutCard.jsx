import Link from "next/link";
import Image from "next/image";

const WorkoutCard = ({ workout }) => {
    return (
        <Link
            href={`/workouts/${workout.id}`}
            className="block overflow-hidden rounded-2xl border border-[#242424] bg-[#111111] hover:border-[#444444]"
        >
            <div className="relative h-56">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>

            <div className="p-5">

                <div className="mb-3 flex flex-wrap gap-2">
                    {workout.muscleGroups?.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-[#202020] px-3 py-1 text-xs text-zinc-300"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl font-bold text-white">
                    {workout.name}
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                    {workout.equipment}
                </p>

                <div className="mt-5 flex items-center justify-between text-sm text-zinc-400">
                    <span>{workout.duration} min</span>
                    <span>{workout.caloriesBurned} kcal</span>
                    <span>★ {workout.rating}</span>
                </div>

            </div>
        </Link>
    );
};

export default WorkoutCard;