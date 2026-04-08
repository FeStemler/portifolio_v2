export function ProfileCard() {
    return (
        <section className="font-inter overflow-hidden p-5 bg-neutral-100 min-w-60 h-[650px] w-[555px] max-md:max-w-full">
            <header
                className="flex justify-between overflow-hidden flex-wrap gap-2.5 items-center w-full text-2xl text-center max-w-[515px] min-h-[29px] text-neutral-900 max-md:max-w-full">
                <h2>Felipe Stemler</h2>
                <h2>
                    Web Developer
                </h2>
            </header>
            <figure
                className="flex overflow-hidden flex-col justify-center items-center mt-2.5 max-w-full h-[93%] w-[515px]">
                <img
                    src="src/assets/Profile.jpg"
                    alt="Felipe Stemler profile"
                    className="object-cover w-full aspect-square h-[100%]"
                />
            </figure>
        </section>
    );
}
