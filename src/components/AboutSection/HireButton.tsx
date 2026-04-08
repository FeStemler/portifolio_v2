"use client";

export function HireButton() {
    const handleClick = () => {
        // Handle hire button click
        console.log("Hire button clicked");
    };

    return (
        <button
            onClick={handleClick}
            className="overflow-hidden gap-2.5 self-stretch px-20 py-3 mt-8 w-full text-4xl uppercase rounded-xl border-solid bg-neutral-900 border-[3px] border-neutral-100 max-md:px-5 max-md:max-w-full hover:bg-neutral-800 transition-colors"
        >
            Hire me
        </button>
    );
}
