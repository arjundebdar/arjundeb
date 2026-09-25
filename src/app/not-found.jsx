import Link from "next/link";

const NotFound = () => {
    return (
        <main className="flex min-h-[70vh] items-center justify-center bg-[#0b0b0b] px-5 text-center">
            <div>
                <p className="text-sm font-bold text-[#ccff00]">
                    404
                </p>

                <h1 className="mt-3 text-4xl font-black uppercase text-white">
                    Page Not Found
                </h1>

                <p className="mt-4 text-zinc-500">
                    The page you are looking for does not exist.
                </p>

                <Link
                    href="/"
                    className="mt-6 inline-block rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold text-black"
                >
                    Back to Home
                </Link>
            </div>
        </main>
    );
};

export default NotFound;