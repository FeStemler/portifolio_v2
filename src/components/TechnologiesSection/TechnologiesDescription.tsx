import React from "react";

export const TechnologiesDescription: React.FC = () => {
    return (
        <section className="flex flex-wrap gap-5 justify-center py-2.5 mt-7 w-full text-lg text-left max-md:max-w-full">
            <div className='w-[8px] bg-offWhite'></div>
            <p className="overflow-hidden flex-1 shrink gap-2.5 self-stretch h-full basis-0 min-w-60 max-md:max-w-full">
                I work with modern technologies to build high-performance web and mobile
                applications. Using Angular, React, and TypeScript, I create scalable
                and efficient front-end solutions. I develop WordPress sites with custom
                features and design intuitive Flutter apps for cross-platform
                experiences. With Tailwind CSS and Figma, I craft clean, responsive, and
                engaging user interfaces.
            </p>
        </section>
    );
};
