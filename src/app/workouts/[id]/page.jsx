import Image from "next/image";
import WorkoutActions from "../../components/WorkoutActions";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

const WorkoutDetails = async ({ params }) => {
    const { id } = await params;

    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        return <div>Workout not found</div>;
    }

    const workout = await response.json();

    return (
        <main className="bg-[#0b0b0b] px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

                <div className="relative min-h-[400px] overflow-hidden rounded-2xl border border-[#242424]">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>

                <div>
                    <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups?.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#202020] px-3 py-1 text-xs text-zinc-300"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <h1 className="mt-5 text-4xl font-black uppercase text-white sm:text-5xl">
                        {workout.name}
                    </h1>

                    <p className="mt-5 leading-7 text-zinc-400">
                        {workout.description}
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="border border-[#242424] p-4">
                            <p className="text-xs text-zinc-500">EQUIPMENT</p>
                            <p className="mt-1 font-bold text-white">
                                {workout.equipment}
                            </p>
                        </div>

                        <div className="border border-[#242424] p-4">
                            <p className="text-xs text-zinc-500">DIFFICULTY</p>
                            <p className="mt-1 font-bold text-white">
                                {workout.difficulty}
                            </p>
                        </div>

                        <div className="border border-[#242424] p-4">
                            <p className="text-xs text-zinc-500">SETS</p>
                            <p className="mt-1 font-bold text-white">
                                {workout.sets}
                            </p>
                        </div>

                        <div className="border border-[#242424] p-4">
                            <p className="text-xs text-zinc-500">REPS</p>
                            <p className="mt-1 font-bold text-white">
                                {workout.reps}
                            </p>
                        </div>

                        <div className="border border-[#242424] p-4">
                            <p className="text-xs text-zinc-500">DURATION</p>
                            <p className="mt-1 font-bold text-white">
                                {workout.duration} min
                            </p>
                        </div>

                        <div className="border border-[#242424] p-4">
                            <p className="text-xs text-zinc-500">CALORIES</p>
                            <p className="mt-1 font-bold text-white">
                                {workout.caloriesBurned} kcal
                            </p>
                        </div>

                        <div className="border border-[#242424] p-4">
                            <p className="text-xs text-zinc-500">RATING</p>
                            <p className="mt-1 font-bold text-white">
                                ★ {workout.rating}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-xl font-bold uppercase text-white">
                            Instructions
                        </h2>

                        <ol className="mt-4 space-y-3 text-zinc-400">
                            {workout.instructions?.map((instruction, index) => (
                                <li key={index}>
                                    {index + 1}. {instruction}
                                </li>
                            ))}
                        </ol>
                    </div>

                    <WorkoutActions workout={workout} />
                </div>

            </div>
        </main>
    );
};

export default WorkoutDetails;