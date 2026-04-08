import {HireButton} from "./HireButton.tsx";

export function AboutContent() {
    return (
        <section className="flex-1 shrink pt-64 pr-20 text-left pb-0 pl-9 my-auto font-bold basis-0 min-w-60 text-neutral-100 max-md:px-5 max-md:pt-24 max-md:max-w-full">
            <h2 className="w-full text-4xl uppercase max-md:max-w-full">
                Hi, im Felipe Stemler,
            </h2>
            <hr className="mt-4 border-0 h-[6px] bg-offWhite w-[1800px]" />
            <p className="mt-8 text-lg max-md:max-w-full">
                Hello! I'm an experienced front-end developer with over 5 years of
                dedication to web development.
                <br />
                My expertise includes WordPress, Angular, and API integrations. I'm
                passionate about creating engaging and responsive interfaces using
                libraries like Tailwind, LESS, and SCSS.If you're looking for a
                developer committed to delivering high-quality and high-performance
                solutions for your project, I'm here to help. Get in touch, and let's
                turn your ideas into digital reality!
            </p>
            <HireButton />
        </section>
    );
}
