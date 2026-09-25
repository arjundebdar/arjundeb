import Hero from "./components/Hero";
import WorkoutCard from "./components/WorkoutCard";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

const Home = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const workouts = await response.json();

  return (
    <main>
      <Hero />

      <section
        id="library"
        className="bg-[#0b0b0b] px-5 py-14 sm:px-8 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-bold text-[#ccff00]">THE LIBRARY</p>

            <h2 className="mt-2 text-3xl font-black uppercase text-white sm:text-4xl">
              Twelve lifts covering every major muscle group.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
