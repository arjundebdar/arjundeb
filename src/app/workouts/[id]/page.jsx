import Image from "next/image";
import WorkoutActions from "../../components/WorkoutActions";


const WorkoutDetails = async ({ params }) => {
    const { id } = await params;

    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

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


                    <h1 className="mt-5 text-4xl font-black uppercase text-white sm:text-5xl">
                        {workout.name}
                    </h1>

                    <p className="mt-5 leading-7 text-zinc-400">
                        {workout.description}
                    </p>
                    <div className="flex flex-wrap gap-2 items-center">
                        {workout.muscleGroups?.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#CCFF00] px-4 py-1 text-xl"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>
                    <div className="mt-8 flex flex-col">
                        <div className="p-4 flex justify-between items-center">
                            <p className="text-xl text-white">EQUIPMENT</p>
                            <p className="mt-1 font-bold text-white">
                                {workout.equipment}
                            </p>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                            <p className="text-xl text-white">DIFFICULTY</p>
                            <p className="mt-1 font-bold text-white">
                                {workout.difficulty}
                            </p>
                        </div>

                        <div className="p-4 flex justify-between items-center">
                            <p className="text-xl text-white">SETS</p>
                            <p className="mt-1 font-bold text-white">
                                {workout.sets}
                            </p>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                            <p className="text-xl text-white">REPS</p>
                            <p className="mt-1 font-bold text-white">
                                {workout.reps}
                            </p>
                        </div>

                        <div className="p-4 flex justify-between items-center">
                            <p className="text-xl text-white">DURATION</p>
                            <p className="mt-1 font-bold text-white">
                                {workout.duration}min
                            </p>
                        </div>


                        <div className="p-4 flex justify-between items-center">
                            <p className="text-xl text-white">CALORIES</p>
                            <p className="mt-1 font-bold text-white">
                                {workout.caloriesBurned}kcal
                            </p>
                        </div>

                        <div className="p-4 flex justify-between items-center">
                            <p className="text-xl text-white">RATING</p>
                            <p className="mt-1 font-bold text-white">
                                {workout.rating}
                            </p>
                        </div>


                    </div>

                    <div className="mt-8 ">
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