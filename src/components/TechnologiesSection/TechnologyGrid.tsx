import React from "react";
import { TechnologyIcon } from "./TechnologyIcon";

export const TechnologyGrid: React.FC = () => {
    return (
        <section className="flex flex-col justify-center mt-5 w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-1 justify-between py-2.5 w-full max-md:max-w-full">
                <div className="flex overflow-hidden justify-between items-center h-full min-w-60 max-md:max-w-full">
                    <div className="flex overflow-hidden flex-wrap gap-5 max-md:gap-2 items-center self-stretch p-4 my-auto bg-neutral-100 min-w-60 max-md:max-w-[97%]">
                        {Array(11)
                            .fill(null)
                            .map((_, index) => (
                                <TechnologyIcon key={index} imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b815eda6b61ebae5ce79eb979722fdb74009743f?placeholderIfAbsent=true&apiKey=1e77c0d424e04ed5ae05ba00b6bcdae9" />
                            ))}
                    </div>
                </div>
                <div className='w-[8px] bg-offWhite'></div>
            </div>
        </section>
    );
};
