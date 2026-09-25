const Loading = () => {
    return (
        <main className="min-h-screen bg-[#0b0b0b] px-4 py-8">
            <div className="mx-auto max-w-7xl">

                <div className="mb-8">
                    <div className="h-8 w-40 animate-pulse rounded-md bg-[#1d1d1d]" />
                    <div className="mt-3 h-4 w-64 animate-pulse rounded-md bg-[#181818]" />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl border border-[#242424] bg-[#111111]"
                        >

                            <div className="h-52 w-full animate-pulse bg-[#1c1c1c]" />

                            <div className="p-4">
                                {/* Tags */}
                                <div className="flex gap-2">
                                    <div className="h-6 w-16 animate-pulse rounded-full bg-[#1d1d1d]" />
                                    <div className="h-6 w-20 animate-pulse rounded-full bg-[#1d1d1d]" />
                                </div>


                                <div className="mt-4 h-6 w-3/4 animate-pulse rounded-md bg-[#1d1d1d]" />


                                <div className="mt-3 h-4 w-1/2 animate-pulse rounded-md bg-[#181818]" />


                                <div className="mt-5 flex gap-5">
                                    <div className="h-4 w-20 animate-pulse rounded-md bg-[#1d1d1d]" />
                                    <div className="h-4 w-20 animate-pulse rounded-md bg-[#1d1d1d]" />
                                    <div className="h-4 w-16 animate-pulse rounded-md bg-[#1d1d1d]" />
                                </div>


                                <div className="mt-5 h-10 w-full animate-pulse rounded-xl bg-[#1d1d1d]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Loading;

