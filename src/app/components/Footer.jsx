const Footer = () => {
    return (
        <footer className=" border-t border-[#242424] bg-[#0b0b0b] container mx-auto ">
            <div className="flex justify-between gap-1 items-center justify-around container mx-auto">
                <h2 className="text-xl font-black uppercase text-white">Fitlog</h2>
                <p className=" text-2xl  text-white ">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;