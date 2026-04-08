import React from "react";

interface TechnologyIconProps {
    imageUrl: string;
}

export const TechnologyIcon: React.FC<TechnologyIconProps> = ({ imageUrl }) => {
    return (
        <div className="flex overflow-hidden flex-col justify-center items-center self-stretch px-2.5 my-auto bg-neutral-900 h-[93px] w-[93px]">
            <img
                src={imageUrl}
                alt="Technology icon"
                className="object-contain aspect-square w-[73px]"
            />
        </div>
    );
};
